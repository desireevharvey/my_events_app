import { useState } from "react"
import { userLogin } from "../../utils/api"
import { useNavigate } from "react-router-dom"



const LogIn = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ username: '', password: ''})

    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userLogin(formData)
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
</form>
    )
}
export default LogIn