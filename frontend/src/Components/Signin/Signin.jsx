import { useNavigate } from "react-router-dom";
import { useState } from "react"
import "./Signin.css"


function Signin(){

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [roomId, setRoomId] = useState();


  function handleSubmit(e){
    e.preventDefault()
    sessionStorage.setItem("user", user)
    sessionStorage.setItem("roomId", roomId)

    navigate("/game")
  }
  

    return  <div className="signin-container">
      <div className="signin-img">
        <img src="/tttoe.png" alt="signin image"/>
      </div>
    <form onSubmit = {handleSubmit} className="signin-form">
      <h1>Sign In</h1>
      <input onChange={(e)=>setUser(e.target.value)}
      type="text" id="username" placeholder="Username" required/>
      <input onChange={(e)=>setRoomId(e.target.value)}
      type="text" id="username" placeholder="Room Id" required/>
      <button type="submit"><b>Create/Join Room</b></button>
    </form>
  </div>
}
export default Signin