import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CreateOrder from './createOrder';
import { Navigation } from './navigation';
import './page2.css';
import { Sidebar } from './sidebar';
export function Page2() {
  const [data, setData] = useState([]);
  const getDrinks = async () => {
    const api = await axios.get('http://localhost:5000/drinks/getAll');
    const response = api.data;
    setData(response.drinks);
    console.log(data);
  };
  const getMostConsumed = async () => {
    const api = await axios.get('http://localhost:5000/drinks/mostConsumed');
    const response = api.data;
    setData(response.drinks);
    console.log(data);
  };
  const getAvailable = async () => {
    const api = await axios.get('http://localhost:5000/drinks/available/1');
    const response = api.data;
    setData(response.data);
    console.log(data);
  };
  useEffect(() => {
    getDrinks();
  }, []);
  return (
    <div className="page2">
      <Sidebar />
      <div className="main2">
        <div class="container">
        <button onClick={getDrinks}>All</button>
        <button onClick={getMostConsumed}>Consumed</button>
        <button onClick={getAvailable}>Available</button>
        </div>
        
        <table className="table2">
          <tbody>
            {data?.map((item) => {
              return (
                <tr>
                  <td>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </td>
                  <td> {item.ItemId}</td>
                  <td>{item.ItemName}</td>
                  <td>
                    <i class="fa-solid fa-arrow-trend-down"></i>
                  </td>

                  <td>
                    <i class="fa-solid fa-arrow-up-1-9"></i>
                    {item.available == 1 ? 'yes' : 'No'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Navigation />
    </div>
  );
}
