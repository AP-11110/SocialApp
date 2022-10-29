import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Arturas",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Arturas",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    }
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts