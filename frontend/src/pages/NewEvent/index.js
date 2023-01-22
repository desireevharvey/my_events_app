import React from "react"
import { createEvent } from "../../utils/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const NewEvent = (props) => {
    

    
    const [formData, setFormData] = useState({ 
        image: '',
        performer: '',
        date: '',
        time: '',
        venue: '',
    })
    
    function handleChange(event) {
        setFormData({...formData, [event.target.id]: event.target.value })
        props.setCreatedEvent(false)
    }

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }


    function handleSubmit(event) {
        event.preventDefault()
        createEvent(formData)
        props.setCreatedEvent(true)
        navigateHome()
    
    }


    return(
       
        <form>
        <div class="field">
            <label class="label" htmlFor="image">Image: </label>
            <div class="control">
            <input 
                type="text" 
                className="form-control"
                id="image" 
                onChange={handleChange}
                value={formData.image}  />
        </div>
        </div>
        <div class="field">
            <label class="label" htmlFor="performer">Performer: </label>
            <div class="control">
            <input 
                type="text" 
                id="performer" 
                onChange={handleChange}
                value={formData.performer} />
        </div>
        </div>
        <div class="field">
            <label class="label" htmlFor="date">Date: </label>
            <div class="control">
            <input type="text" id="date" value={formData.date} onChange={handleChange} />
        </div>
        </div>
        <div class="field">
            <label class="label" htmlFor="time">Time:</label>
            <div class="control">
            <input type="text" id="time" value={formData.time} onChange={handleChange} />
        </div>
        </div>
        <div class="field">
            <label class="label" htmlFor="venue">Venue:</label>
            <div class="control">
            <input type="text" id="venue" value={formData.venue} onChange={handleChange} />
        </div>
        </div>
        <br />
        <button class="button is-link is-warning" onClick={handleSubmit}>Save Changes</button>
    </form>
       
    )
}

export default NewEvent