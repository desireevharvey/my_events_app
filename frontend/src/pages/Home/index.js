
import { getAllEvents } from "../../utils/api";
import { useEffect, useState } from "react";


const Home = () => {
    
    const [eventList, setEventList] = useState([])

    

    useEffect(() => {

      getAllEvents()
        .then(data => setProductList(data))
        .catch(err => alert("Could not load products"))
      
      },[])
