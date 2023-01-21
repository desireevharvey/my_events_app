import React from "react"
import { getAllEvents } from "../../utils/api";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";


const Home = (props) => {
    
    const [myEvents, setMyEvents] = useState([]);


    useEffect(()=>{
        getAllEvents().then((data) => {setMyEvents(data)})
    },[props.createdEvent])

   

   
   


    return(
        
        <>
            <div className="columns">
                <div className="column is-one-third">
                    {myEvents.length > 0 ? 
                    myEvents.map((oneEvent, i) => {
                        return(
                                <div className="card">
                                    <div className="card-image" key={i}>
                                        <figure className="image is-4by3">
                                            <img src={oneEvent.image} alt={oneEvent.performer}/>
                                        </figure>
                                        <p>{oneEvent.performer}</p>
                                        <p>{oneEvent.venue}</p>
                                        <p>{oneEvent.date}</p>
                                        <p>{oneEvent.time}</p>
                                    </div>
                                </div>
                        )
                    })
                    : null}
                </div>
              
            </div>
        
        </>
    )
}
export default Home