
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NewEvent from './pages/NewEvent';
import Account from './pages/Account';
import EditEvent from './pages/EditEvent';
import Nav from './components/Nav';
import { getAllEvents } from './utils/api';
import SeatGeek from './pages/SeatGeek';


export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [createdEvent, setCreatedEvent] = useState(false)

  useEffect(() => {
    if (localStorage.token){
      setIsLoggedIn(true)
    }
  }, [])

  const [myEvents, setMyEvents] = useState([]);


    useEffect(()=>{
        getAllEvents().then((data) => {setMyEvents(data)})
    },[createdEvent])

    console.log(myEvents)

   

return (
  <>
  <Nav isLoggedIn={isLoggedIn}/>
  <Routes>
  <Route path="/" element={<Home createdEvent={createdEvent} myEvents={myEvents} />} />
  <Route path="/:id/edit" element={<EditEvent />} />
  <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/newevent" element={<NewEvent setCreatedEvent={setCreatedEvent}/>} />
  <Route path="/account" element={<Account setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/seat" element={<SeatGeek />} />
  </Routes>
  
  </>
  )
}