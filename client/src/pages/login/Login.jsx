import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { useContext, useState } from "react"

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const { login } = useContext(AuthContext);

  // handle login, if successful navigate to home page
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await login(inputs);
      console.log("lalaal")
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sit tempore nobis earum minus, enim sint corrupti quidem tenetur quae optio, atque modi. Hic eius animi nisi quidem dignissimos tenetur?</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {error && error}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login