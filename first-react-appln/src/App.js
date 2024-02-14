
import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import {Routes, Route} from "react-router-dom";

function App() {
  const company = "DevTown";

   const [name, setName] = useState("Rohan")
  return (
    <Routes>
        <Route path='/' element={<ClassComponent />}/>
        <Route path='/fun-comp' element={<FunctionalComponent />}/>
    </Routes>
    
  );
}

export default App;


//// <div>

    {/* <h1>Hello world</h1>
    <ClassComponent />
    <FunctionalComponent name={name} number={12} company={company} setName={setName}/> */}
    {/* <FunctionalComponent />
    <FunctionalComponent /> */}
    // </div>