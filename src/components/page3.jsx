import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import MainChart from './mainChart';
import './page3.css';
import { Sidebar } from './sidebar';
export default function Page3() {
  const [allCargo, setCargo] = useState([]);
  const [CargoName, setCargoName] =useState("")
  const [transported, setTransported] =useState("")
  const [Orders, setOrders] =useState("")


  const getCargo = async () => {
    const api = await axios.get('http://localhost:5000/cargo/getAll');
    const response = api.data;
    setCargo(response.result);
  };
  const getTransported = async () => {
    const api = await axios.get(`http://localhost:5000/cargo/getTransported/${CargoName}`);
    const response = api.data;
    setTransported(response.result)
    console.log(transported)
  };
  const getOrders =async ()=>{
    const api = await axios.get(`http://localhost:5000/orders/getOrders`);
    const response = api.data;
    setOrders(response.result);
  }
  useEffect(() => {
    getCargo();
  }, []);

  return (
    <div className="page3">
      <Sidebar />
      <div className="main3">
        <div className="header3">
          <div>
            <h1>Learn new skills </h1>
            <p>One simple Price, unlimited Skills</p>
          </div>
          <button>+ Explore More</button>
        </div>
        <div className="squares">
          {allCargo.map((item) => {
            return (
              <div>
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <h4>{item.companyName}</h4>
                <p>{item.CompanyId}</p>
                <div>
                  <h6
                 onClick={()=>{
                  setCargoName(item.companyName)
                  getTransported()
                  console.log(CargoName)
                }}>
                  
                    Get details
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom3">
          <MainChart />
          
          <div>
            <div className="grid">
              {orders?.map((itemm))}
              <div>
                <i class="fa-solid fa-square-virus"></i>
                <p>Courses</p>
              </div>
            </div>
            <button>Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
