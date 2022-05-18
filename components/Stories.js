import { useEffect, useState } from "react"
import Story from "./Story"
import { faker } from "@faker-js/faker"
import { useSession } from "next-auth/react"

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])
  const { data: session } = useSession()
  return (
    <div className="flex space-x-2 p-6 mt-8 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          key={session.user.uid}
          img={session.user.image}
          username={session.user.username}
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username.split("_").join("").toLocaleLowerCase()}
        />
      ))}
    </div>
  )
}
export default Stories
