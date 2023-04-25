import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, Navigate, useLocation,BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/SIgnup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App;
