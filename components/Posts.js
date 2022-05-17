import Post from "./Post"

const posts = [
  {
    id: "1",
    username: "Neilu",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "subscibe and like for the youtube algorithm bro this is lit and cool",
  },
  {
    id: "2",
    username: "Neilu",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "subscibe and like for the youtube algorithm bro this is lit and cool",
  },
  {
    id: "3",
    username: "Neilu",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "subscibe and like for the youtube algorithm bro this is lit and cool",
  },
  {
    id: "4",
    username: "Neilu",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
      "subscibe and like for the youtube algorithm bro this is lit and cool",
  },
]

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        )
      })}
    </div>
  )
}
export default Posts
