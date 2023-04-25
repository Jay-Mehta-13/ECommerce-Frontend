
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/SIgnup";
import { useSelector } from "react-redux";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
 
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App;
