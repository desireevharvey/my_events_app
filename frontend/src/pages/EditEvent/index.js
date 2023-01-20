import { useEffect, useState } from "react";
import { updateOneEvent } from "../../utils/api";
import { useParams } from "react-router-dom";
import { showOneEvent } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { deleteOneEvent } from "../../utils/api";

function EditEvent ({anEvent}) {
    const navigate = useNavigate()
    const [eventState, setEventState] = useState({})
    const [editedState, setEditedState] = useState({
        image: '',
        performer: '',
        date: '',
        time: '',
        venue: '',
    })

    useEffect(() => {
        showOneEvent(id).then((data) => {
            setEditedState(data)
        })
    }, [])

    const handleChange = (event) => {
        setEditedState({ ...editedState, [event.target.id]: event.target.value })
    }

    const { id } = useParams()

    

    const handleSubmit = (event) => {
        event.preventDefault()
        updateOneEvent(id, editedState).then(data => {
            
            setEditedState(data)
        })
        
    }

    const deleteEvent = () => {
        
        deleteOneEvent(id).then(alert("You deleted this event"))
        navigate('/account')
    }

    return(
        <div>
            <button onClick={() => {deleteEvent()}}>Delete this event</button>
                    <form>
                        <div className="form-group">
                            <label htmlFor="image">Image: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="image" 
                                onChange={handleChange}
                                value={editedState.image}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="performer">Performer: </label>
                            <input 
                                type="text" 
                                id="performer" 
                                onChange={handleChange}
                                value={editedState.performer} />
                        </div>
                        <div className="input">
                            <label htmlFor="date">Date: </label>
                            <input type="text" id="date" value={editedState.date} onChange={handleChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="time">Time:</label>
                            <input type="text" id="time" value={editedState.time} onChange={handleChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="venue">Venue:</label>
                            <input type="text" id="venue" value={editedState.venue} onChange={handleChange} />
                        </div>
                        <br />
                        <button onClick={handleSubmit}>Save Changes</button>
                    </form>
        </div>
    )
}
export default EditEvent