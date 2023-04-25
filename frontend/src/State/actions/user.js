import { API_URI, ISLOGGEDIN, LOGINUSER, SIGNUPUSER, TOKEN, VERIFYTOKEN } from "../../const";

export let signupUser = (userdata) => async (dispatch) => {
  let response = await fetch(`${API_URI}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });
  let data = await response.json();
  if (!data.response) {
    alert(data.error);
  }
  localStorage.setItem(TOKEN, data.token);
  dispatch({ type: SIGNUPUSER, payload: data.user });
};
export let userLogin = (userdata) => async (dispatch) => {
  let response = await fetch(`${API_URI}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });
  let data = await response.json();
  if (!data.response) {
    alert(data.error);
  }
  console.log(data);
  localStorage.setItem(TOKEN, data.token);
  dispatch({ type: LOGINUSER, payload: data.user });
};
export let getUserDetails = () => async (dispatch) => {
  let response = await fetch(`${API_URI}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem(TOKEN),
    },
  });
  let data = await response.json();
  console.log("here", data);
  if (!data.response) {
    alert(data.error);
  }
  dispatch({ type: VERIFYTOKEN, payload: data.user });
};

export let isUserLogin = (data) => async (dispatch) => {
  dispatch({ type: ISLOGGEDIN, payload: data });
};
