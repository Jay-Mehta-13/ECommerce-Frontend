import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../State/actions/product";
const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProducts());
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="container">
      {
        products!==null &&
        products.map(el=>{
          return <Product data={el}/>
        })
      }
    </div>
  );
};

export default Home;
