import axios from "axios";
import { API_URI, GETPRODUCTS } from "../../const";

export let getProducts = () => async (dispatch) => {
  console.log("iuppper");
  let data;
  try {
    let response = await axios.get("https://0b25-14-99-102-226.ngrok-free.app/product");
    console.log(response);
    data = await response.json();
    console.log("heyeyeyyeyeyeyyeyey", data);
    if (!data.response) {
      alert(data.error);
    }
    dispatch({ type: GETPRODUCTS, payload: data.product });
  } catch (err) {
    console.log(err);
  }
};
