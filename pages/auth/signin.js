import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../components/Header"
import GoogleButton from "react-google-button"
const signin = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
        <h1 className="text-7xl mt-4 font-spring">Neilugram</h1>
        <div className="mt-40 ">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <GoogleButton
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </GoogleButton>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
export default signin
