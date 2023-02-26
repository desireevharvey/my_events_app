import axios from "axios"
import { useEffect, useState } from "react"

const SeatGeek = () => {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        axios.get('https://api.seatgeek.com/2/events/?client_id=MzIwOTUxMTR8MTY3NzQ0MTc3Ni4wODQxMzM5').then(res => setEvents(res.data.events))
    }, [])

    console.log(events)
    

    return(
        <>
        <h1>SeatGeek</h1>
        {events.map((one, i) => {
            return(
            <h2>{one.performers[0].name}</h2>)
        }) }
        </>
    )
}

export default SeatGeek