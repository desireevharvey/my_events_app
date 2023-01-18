import { useState } from "react"
import { userSignUp } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import React from "react"


const SignUp = (props) => {
    const [formData, setFormData] = useState({ username: '', password: ''})
    const navigate = useNavigate()

    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userSignUp(formData)
            .then((data) => localStorage.token = data.token)
        props.setIsLoggedIn(true)
        navigate('/')
    }
    return(
<form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="Username">Username</label>
    <input type="text" name="username" onChange={handleChange} value={formData.username}/>
  </div>
  <div>
    <label htmlFor="Password">Password</label>
    <input type="password" name="password" onChange={handleChange} value={formData.password}/>
  </div>
  <button onClick={handleSubmit}>Sign up</button>
</form>
    )
}
export default SignUp