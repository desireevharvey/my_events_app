
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NewEvent from './pages/NewEvent';
import Account from './pages/Account';
import ShowEvent from './pages/ShowEvent';
import EditEvent from './pages/EditEvent';
import Nav from './components/Nav';
import { getAllEvents } from './utils/api';



export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setUser] = useState({})
  const [createdEvent, setCreatedEvent] = useState(false)


return (
  <>
  <Nav isLoggedIn={isLoggedIn}/>
  <Routes>
  <Route exact path="/" element={<Home createdEvent={createdEvent} />} />
  <Route path="/:id/edit" element={<EditEvent />} />
  <Route path="/event/:id" element={<ShowEvent currentUser={currentUser}/>} />
  <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/newevent" element={<NewEvent setCreatedEvent={setCreatedEvent}/>} />
  <Route path="/account" element={<Account currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>} />
  </Routes>
  
  </>
  )
}