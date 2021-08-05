import { COUNT_SEND } from "./CountType";

const initialState = {
  productId: [],
  total: [],
  error: "",
};

function CountReducer(state = initialState, action) {
  if (action.type === COUNT_SEND) {
    return {
      productId: action.payload.productId,
      total: action.payload.number,
      error: "",
    };
  } else {
    return state;
  }
}

export default CountReducer;
