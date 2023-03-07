import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Experiences } from "./Components/Experiences/Experiences";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/'></Route>
        <Route path='/whoami'></Route>
        <Route path='/experiences' element={<Experiences />}></Route>
        <Route path='/knowledge'></Route>
        <Route path='/contact'></Route>
      </Routes>
    </div>
  );
}

export default App;
