import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../State/actions/product";
const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 5000);
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="container">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Home;
