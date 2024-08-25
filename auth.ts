import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

export const config: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
        session.user.username = token.username as string;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const prismaUser = await prisma.user.findFirst({
          where: { email: token.email as string },
        });

        if (!prismaUser) {
          token.id = user.id;
          return token;
        }

        if (!prismaUser.username) {
          await prisma.user.update({
            where: { id: prismaUser.id },
            data: {
              username: prismaUser.name?.split(" ").join("").toLowerCase(),
            },
          });
        }

        return {
          id: prismaUser.id,
          name: prismaUser.name,
          email: prismaUser.email,
          username: prismaUser.username,
          picture: prismaUser.image,
        };
      }
      return token;
    },
  },
};

export default NextAuth(config);

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
