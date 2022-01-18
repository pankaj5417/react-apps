import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { JobBoard, } from './components/JobBoard';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import JobDetails from './components/JobDetail';


function App() {
  
  return (
    <div className="App">
     
      <Routes>
       <Route path="/" element={<JobBoard />}></Route>
       <Route path="/jobs/:jobId" element={<JobDetails />}></Route>

     </Routes>
    </div>
  );
}

export default App;
