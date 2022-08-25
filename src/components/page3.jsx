import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import MainChart from './mainChart';
import './page3.css';
import { Sidebar } from './sidebar';
export default function Page3() {
  const [allCargo, setCargo] = useState([]);
  const [CargoName, setCargoName] = useState('');
  const [transported, setTransported] = useState('');
  const [Orders, setOrders] = useState([]);
  const [response, setResponse] = useState([]);


  const getCargo = async () => {
    const api = await axios.get('http://localhost:5000/cargo/getAll');
    const response = api.data;
    setCargo(response.result);
  };
  const completeOrder =async (id)=>{
    const api = await axios.post(`http://localhost:5000/orders/completeOrder/${id}`);
    const response = api.data;
    setResponse(response.result);
  }
  const getTransported = async () => {
    const api = await axios.get(
      `http://localhost:5000/cargo/getTransported/${CargoName}`,
    );
    const response = api.data;
    setTransported(response.result);
    console.log(transported);
  };
  const getOrders = async () => {
    const api = await axios.get(`http://localhost:5000/orders/getOrders`);
    const response = api.data;
    setOrders(response.data);
  };

  useEffect(() => {
    getCargo();
  }, []);
  useEffect(() => {
    getOrders();
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
                  src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/2x/external-cars-basic-ui-elements-2.3-sbts2018-outline-color-sbts2018.png"
                  alt=""
                />
                <h4>{item.companyName}</h4>
                <p>{item.CompanyId}</p>
                <div>
                  <h6
                    onClick={() => {
                      setCargoName(item.companyName);
                      getTransported();
                      console.log(CargoName);
                    }}
                  >
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
              {Orders.map((item) => {
                return (
                  <div>
                    <i class="fa-solid fa-square-virus"></i>
                    <p>Client : {item.firstName}</p>
                    <p>location: {item.location}</p>
                    <p>Item: {item.itemName}</p>
                    <i class="fa-solid fa-circle-check" onClick={()=>{
                      completeOrder(item.orderId)
                    }} ></i>
                  </div>
                );
              })}
            </div>
            <button>Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
