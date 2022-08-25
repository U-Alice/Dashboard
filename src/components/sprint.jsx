import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './main.css';
export function Overview({ userId, setUserId }) {
  const [data, setData] = useState({});
  const getCargo = async () => {
    const api = await axios.get('http://localhost:5000/cargo/getAll/');
    setData(await api.data)
    console.log(await api.data);
  };
  const getTransporter = async () => {
    const api =await axios.get(
      `http://localhost:5000/clients/getTransporter/${userId}`,
    );
   setData(api.result);
    console.log("working");
    console.log(data)
  };    
  useEffect(() => {
    getCargo();
    userId != 0 ? getTransporter() : getCargo()
  }, []);
//   useEffect(() => {
//     console.log(userId)
 
//   }, [userId]);
  return (
    <div className="overview">
      <h3>Sprint Overview</h3>
      <div className="statContainer">
        {data?.result?.map((item) => {
          return (
            <div className="stat">
              <i class="fa-solid fa-arrow-up-right-dots"></i>
              <h6>{item.companyName}</h6>
              <div>

              <h1>{item.orders}</h1>
              <p>Orders</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
