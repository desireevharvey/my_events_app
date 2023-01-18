import { getToken } from "../../utils/api"
import { useState, useEffect } from "react"

const Account = () => {
    const [userData, setUserData] = useState({username: ''})
    const [userEventData, setUserEventData] = useState([])

    useEffect(() => {
        getToken().then((data) => {
            setUserData(data.user.username)
            setUserEventData(data.events)
            
        })
    }, [])
   


    const handleLogOut = () => {
        localStorage.clear()
      }

    return(
        <>
        <h1>account</h1>
        <button onClick={handleLogOut}>LogOut</button>
        <div>
            <h2>Your Active Listings:</h2>
            <div>
                {userEventData.map((userEvent, i) => {
                    return(
                    <div key={i} style={{width: '18rem'}}>
                        <img src={userEvent.image} alt={userEvent.title}/>
                        <div>
                            <h5>{userEvent.performer}</h5>
                            <p>{userEvent.date}</p>
                            <p>{userEvent.time}</p>
                            <p>{userEvent.venue}</p>
                            
                            <div>
                            <a href={"/" + userEvent._id + "/edit"}>Edit</a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


export default Account