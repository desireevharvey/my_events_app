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
            .then((data) => {
            localStorage.token = data.token
            localStorage.id = data.user._id
          })
        props.setIsLoggedIn(true)
        navigate('/')
    }
    return(
<form onSubmit={handleSubmit}>
  <div class="field">
    <label class="label" htmlFor="Username">Username</label>
    <div class="control">
    <input class="input" type="text" name="username" onChange={handleChange} value={formData.username}/>
  </div>
  <div class="field">
    <label class="label" htmlFor="Password">Password</label>
    <input class="input" type="password" name="password" onChange={handleChange} value={formData.password}/>
  </div>
  <div class="control">
  <button class="button is-link is-warning" onClick={handleSubmit}>Sign up</button>
  </div>
  </div>
  
</form>
    )
}
export default SignUp