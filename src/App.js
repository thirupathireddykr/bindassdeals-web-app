import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route exact path="/home" component={Home}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
