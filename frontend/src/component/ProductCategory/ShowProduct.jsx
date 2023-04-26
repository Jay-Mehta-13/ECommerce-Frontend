import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../State/actions/product";
import Product from "../Product";

const ShowProduct = () => {
  let params = useParams();
  const [data, setdata] = useState([]);
  const {appliance, clothing,grocery, products } = useSelector((state) => state.products);
  useEffect(() => {
    console.log("hetetette",appliance, clothing,grocery,products);
    switch (params.category) {
      case "appliance":
        setdata(appliance);
        break;
      case "clothing":
        setdata(clothing);
        break;
      case "grocery":
        setdata(grocery);
        break;

      default:
        break;
    }
  }, [appliance, clothing,grocery,params]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products===null) {
        dispatch(getProducts());
    }
  }, []);
  return (
    <div className="container">
      {
        data!==null &&
        data.map(el=>{
          return <Product data={el}/>
        })
      }
    </div>
  );
};

export default ShowProduct;
