/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "scontent-mty2-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
