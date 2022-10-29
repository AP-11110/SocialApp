import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authContext"

const Comments = () => {

  const { currentUser } = useContext(AuthContext);

  //temp
  const comments = [
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi saepe soluta cupiditate non dolor repellendus ullam, similique consequuntur dolorum obcaecati magnam, ipsam deserunt veniam eaque ratione accusantium dolorem repellat!",
        name: "Arturas",
        userId: 1,
        profilePicture: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi saepe soluta cupiditate non dolor repellendus ullam, similique consequuntur dolorum obcaecati magnam, ipsam deserunt veniam eaque ratione accusantium dolorem repellat!",
        name: "Arturas",
        userId: 2,
        profilePicture: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ]
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment"/>
        <button>Send</button>
      </div>
      {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments