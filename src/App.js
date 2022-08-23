import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import React from 'react';
import { Page1 } from './components/page1';
import { Page2 } from './components/page2';
import Page3 from './components/page3';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/page1" exact element={<Page1 />} />
          <Route path="/page2" exact element={<Page2 />} />
          <Route path="/page3" exact element={<Page3 />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
