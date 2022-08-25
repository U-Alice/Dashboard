import { Sidebar } from './sidebar';
import "./mainPage.css"
import { Navbar } from './navbar';
import { Overview } from './sprint';
import { Team } from './team';

import { Navigation } from './navigation';
import MainChart from './mainChart';
import { Chart } from './chart';
import PopUp from './popup';
import axios from 'axios';
import { useState } from 'react';
import CreateOrder from './createOrder';

export default function MainPage(){
  const [clients, setClients] = useState([
    {
        title: 'Team overview',
        number: 52
    },      {
        title: 'Team overview',
        number: 52
    },      {
        title: 'Team overview',
        number: 52
    },       {
        title: 'Team overview',
        number: 52
    },       {
        title: 'Team overview',
        number: 52
    }
])
const [userId, setUserId] =useState(0)
const getUsers = async()=>{
 const api= await axios.get("http://localhost:5000/clients/getClients", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    },
  })
  setClients(await api.data.result)
}
const [user, setUser]= useState([])
const getUserById = async()=>{
  const api = await axios.get(`http://localhost:5000/clients/getById/${userId}`)
  
}


    return (
        <div className="mainPage">
      <Sidebar/>
      <div className='mainPageSec'>
      <Navbar/>
      <Overview userId={userId}/>
      <Chart getUsers= {getUsers} getUserById={getUserById} userId={userId} clients={clients} setUserId={setUserId}/>
   <CreateOrder/>
      </div>
      <Navigation/>
    </div>
    )
}