import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./RegisterType";
import api from "../../apiService";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (userData) => {
  return {
    type: REGISTER_SUCCESS,
    payload: userData,
  };
};
export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
    payload: Error,
  };
};

export const registerUser = (state) => {
  console.log("chay toi action", state);
  return (dispatch) => {
    dispatch(registerRequest);
    const getRegisterResponse = async () => {
      try {
        const res = await api.post(`/auth/register`, {
          name: state.name,
          email: state.email,
          password: state.password,
        });
        console.log("register inhere", state);
        const data = await res.data;
        dispatch(registerSuccess(data));
      } catch (Error) {
        const errorMge = Error.message;
        console.log("register post", errorMge);
        dispatch(registerFail(errorMge));
      }
    };
    getRegisterResponse();
  };
};
