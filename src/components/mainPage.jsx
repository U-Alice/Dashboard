import { Sidebar } from './sidebar';
import "./mainPage.css"
import { Navbar } from './navbar';
import { Overview } from './sprint';
import { Team } from './team';

import { Navigation } from './navigation';
import MainChart from './mainChart';
import { Chart } from './chart';
import PopUp from './popup';

export default function MainPage(){
    return (
        <div className="mainPage">
      <Sidebar/>
      <div className='mainPageSec'>
      <Navbar/>
      <Overview/>
      <Chart/>
      <Team/>
      </div>
      <Navigation/>
    </div>
    )
}