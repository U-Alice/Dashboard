import { useEffect } from 'react';
import { useState } from 'react';
import './main.css';
import PopUp from './popup';
export function Navbar() {
  const [status, setStatus] = useState(false);
  const changeStatus = () => {
    setStatus(true);
  };
  return (
    <div className="navbar">
      <div>
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <button onClick={changeStatus}>Discover more</button>
      {status ? <PopUp setStatus={setStatus}/> : ''}
    </div>
  );
}
