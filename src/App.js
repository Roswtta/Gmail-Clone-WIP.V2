import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail.js';
import EmailList from './components/EmailList';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
      
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Header/>}/>
          </Routes>
          
          <div className='app__body'>
            <Routes> 
              <Route exact path="/" element={<Sidebar/>}/>
            </Routes>

            <Routes>
            <Route exact path="/mail" element={<Mail/>}/>
            <Route exact path="/" element={<EmailList/>}/>
            </Routes>
          </div>
        </div>
      </Router>

  );
}

export default App;
