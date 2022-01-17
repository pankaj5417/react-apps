import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Job } from './components/Job';
//import { Navbar } from './components/Navbar';
//import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
//import { JobDetail } from './components/JobDetail';
//import { Naukri } from './components/Jobs';

function App() {
  return (
    <div className="App">
     <Job /> 
     
    </div>
  );
}

export default App;
