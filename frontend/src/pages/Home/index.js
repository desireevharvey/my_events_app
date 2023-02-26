import React from "react"

import "./index.css";


const Home = ({myEvents}) => {
    
    

   
   


    return(
        
        <>
        <h1 class="title">Welcome to Event-Maker!</h1>
            <div className="columns">
                <div className="column is-one-third">
                    {myEvents.length > 0 ? 
                    myEvents.map((oneEvent, i) => {
                        return(
                                <div className="card">
                                    <div className="card-image" key={i}>
                                        <figure className="image is-128x128">
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