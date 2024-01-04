import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './Components/Create';
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Show from './Components/Show';


const App = () =>{
  return(
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/Create" element={<Create/>} />
      <Route path="/Show" element={<Show/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Edit/>} />

     
     </Routes>
     </BrowserRouter>
  )
}

export default App;