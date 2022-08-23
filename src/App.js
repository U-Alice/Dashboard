import { Sidebar } from './components/sidebar';
import "./app.css"
import { Navbar } from './components/navbar';
import { Overview } from './components/sprint';
import { Team } from './components/team';

import { Navigation } from './components/navigation';
import MainChart from './components/mainChart';
import { Chart } from './components/chart';
import PopUp from './components/popup';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='main'>
      <Navbar/>
      <Overview/>
      <Chart/>
      <Team/>
      </div>
      <Navigation/>
    </div>
  );
}

export default App;
