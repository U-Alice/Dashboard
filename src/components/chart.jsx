import { useState } from 'react';
import { useEffect } from 'react';
import './main.css';
import MainChart from './mainChart';
import axios from 'axios';

export function Chart({getUsers, clients, setUserId, getUserById, userId}) {
  useEffect(()=>{
    getUsers()
}, [])
  return (
    <div className="chartContainer">
      <div className="charts">
        <h3>Burndown Chart</h3>
        <div className="chart">
    <MainChart/>
        </div>
      </div>

      <div className="stories">
        <h3>Current Clients</h3>
        <table cellSpacing={0}>
          <tbody>
        {clients.map((item) => {
          return (
                <tr onClick={()=>{
                  setUserId(item.clientId)
                  getUserById()
                  console.log(userId)
                }}>
                  <td>{item.clientId}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.location}</td>
                  <td><i className="fa-solid fa-ellipsis"></i></td>
                </tr>
              );
            })}
            </tbody>
            </table>
      </div>
    </div>
  );
}
