import { TOAST_FAIL, TOAST_SUCCESS } from "./ToastType";

const initialState = {
  loading: false,
  state: [],
  error: "",
};

function ToastReducer(state = initialState, action) {
  switch (action.type) {
    case TOAST_SUCCESS:
      return {
        loading: false,
        state: action.payload,
        error: "",
      };
    case TOAST_FAIL:
      return {
        loading: false,
        state: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export default ToastReducer;
