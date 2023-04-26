import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/SIgnup";
import { useSelector } from "react-redux";
import ProductOutlate from "./component/ProductCategory/ProductOutlate";
import ShowProduct from "./component/ProductCategory/ShowProduct";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/products" element={<ProductOutlate />}>
          <Route path=":category" element={<ShowProduct />} />
          {/* <Route path="clothing" element={<ShowProduct />} />
          <Route path="grocery" element={<ShowProduct />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
