import Stories from "./Stories"

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-1 md:max-w-3xl xl:grid-cols-1 xl:max-w-6xl mx-auto">
      <section>
        {/* Stories */}
        <Stories className="col-span-2" />
        {/* Posts */}
      </section>

      <section>
        {/* Mini profile */}
        {/* Suggestiions */}
      </section>
    </main>
  )
}
export default Feed
