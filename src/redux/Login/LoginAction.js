import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginType";
import api from "../../apiService";
import { toastFail, toastSuccess } from "../Toast/ToastAction";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};
export const loginFail = () => {
  return {
    type: LOGIN_FAIL,
    payload: Error,
  };
};

export const loginUser = (state) => {
  return (dispatch) => {
    dispatch(loginRequest);
    const getLoginResponse = async () => {
      try {
        const res = await api.post(`/auth/login`, {
          email: state.email,
          password: state.password,
        });
        const data = await res.data;
        dispatch(loginSuccess(data));
        dispatch(toastSuccess({ mode: "login", name: data.data.user.name }));
        console.log("data", data);
        api.defaults.headers.common["authorization"] =
          "Bearer " + data.data.accessToken;
      } catch (Error) {
        const errorMge = Error.message;
        console.log("login post", errorMge);
        dispatch(loginFail(errorMge));
        dispatch(toastFail(errorMge));
      }
    };
    getLoginResponse();
  };
};
