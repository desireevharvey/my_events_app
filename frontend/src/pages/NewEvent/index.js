import React from "react"
import { createEvent } from "../../utils/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const NewEvent = () => {
    

    
    const [formData, setFormData] = useState({ 
        image: '',
        performer: '',
        date: '',
        time: '',
        venue: '',
    })
    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }


    function handleSubmit(event) {
        event.preventDefault()
        createEvent(formData)
        navigateHome()
    
    }


    return(
       
        <form>
        <div className="form-group">
            <label htmlFor="image">Image: </label>
            <input 
                type="text" 
                className="form-control"
                id="image" 
                onChange={handleChange}
                value={formData.image}  />
        </div>
        <div className="form-group">
            <label htmlFor="performer">Performer: </label>
            <input 
                type="text" 
                id="performer" 
                onChange={handleChange}
                value={formData.performer} />
        </div>
        <div className="input">
            <label htmlFor="date">Date: </label>
            <input type="text" id="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="input">
            <label htmlFor="time">Time:</label>
            <input type="text" id="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="input">
            <label htmlFor="venue">Venue:</label>
            <input type="text" id="venue" value={formData.venue} onChange={handleChange} />
        </div>
        <br />
        <button onClick={handleSubmit}>Save Changes</button>
    </form>
       
    )
}

export default NewEvent