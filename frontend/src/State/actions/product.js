import { API_URI, GETPRODUCTS } from "../../const";

export let getProducts = () => async (dispatch) => {
  console.log("iuppper");
  let data;
  try {
    fetch("https://59bd-14-99-102-226.ngrok-free.app/product").then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log("error",err));
    // console.log(response);
    // data = await response.json();
    // console.log("heyeyeyyeyeyeyyeyey", data);
    // if (!data.response) {
    //   alert(data.error);
    // }
    // dispatch({ type: GETPRODUCTS, payload: data.product });
  } catch (err) {
    console.log(err);
  }
};
