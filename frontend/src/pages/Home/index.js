import React from "react"
import { getAllEvents } from "../../utils/api";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
    
    const [myEvents, setMyEvents] = useState([]);


    useEffect(()=>{
        getAllEvents().then((data) => {setMyEvents(data)})
    },[props.createdEvent])

   

   
   


    return(
        
        <>
        {myEvents.length > 0 ? 
        myEvents.map((oneEvent, i) => {
            return(
            <div key={i}>
                <img src={oneEvent.image} alt={oneEvent.performer}></img>
                <p>{oneEvent.performer}</p>
                <p>{oneEvent.venue}</p>
                <p>{oneEvent.date}</p>
                <p>{oneEvent.time}</p>
                </div>)
        })
        : null}
        </>
    )
}
export default Home