import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./RegisterType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

function RegisterUserReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case REGISTER_FAIL:
      return {
        loading: false,
        user: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export default RegisterUserReducer;
