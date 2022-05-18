import faker from "@faker-js/faker"
import { useEffect, useState } from "react"

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              src={profile.avatar}
              className="p-[2px] border rounded-full w-10 h-10"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-small">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">
                Works at {profile.company.name}
              </h3>
            </div>
            <button className="text-blue-400 text-cs font-bold">Follow</button>
          </div>
        )
      })}
    </div>
  )
}
export default Suggestions
