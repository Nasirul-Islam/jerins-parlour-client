import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import AOS from 'aos';
import Register from "./Pages/Login/Register/Register";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";

AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
