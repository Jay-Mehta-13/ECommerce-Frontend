import { API_URI, GETPRODUCTS } from "../../const";

export let getProducts = () => async (dispatch) => {
  console.log("iuppper");
  let data;
  try {
    let response=await fetch(`${API_URI}/product`)
    data = await response.json();
    console.log(data);
    if (!data.response) {
      alert(data.error);
    }
    dispatch({ type: GETPRODUCTS, payload: data.products });
  } catch (err) {
    console.log(err);
  }
};
