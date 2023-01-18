import { useState, useEffect } from 'react';
import { Routes, Route } from 'react';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NewEvent from './pages/NewEvent';
import Account from './pages/Account';
import ShowEvent from './pages/ShowEvent';

export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setUser] = useState({})
  const [events, setEvents] = useState([])
  useEffect(()=>{
  fetch("http://localhost:8000/event")
  .then(res => res.json())
  .then(data => setEvents(data))
  },[])

function loading(){
  return <h1>loading...</h1>
}
function loaded(){
  return events.map(e =>(
    <div key={e._id}>
      <img src={e.image} alt={e.performer}></img>
      <p>{e.performer}</p>
      <p>{e.venue}</p>
      <p>{e.date}</p>
      <p>{e.time}</p>

    </div>
  ))
}
return (
  <>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/event/:id" element={<ShowEvent currentUser={currentUser}/>} />
  <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/newevent" element={<NewEvent/>} />
  <Route path="/account" element={<Account currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>} />
</Routes>
  {events.length > 0 ? loaded() : loading()}
  </>
  )
}