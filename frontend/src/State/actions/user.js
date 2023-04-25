import { API_URI, SIGNUPUSER } from "../../const";

export let  signupUser = (userdata) => async (dispatch) => {
    console.log("heyeyeyeyye");
    let response = await fetch(`${API_URI}/user`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
    let data = await response.json();
    console.log(data);
    dispatch({ type: SIGNUPUSER, payload: data.user })
}