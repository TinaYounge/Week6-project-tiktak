import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./ProductType";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCT_FAIL:
      return {
        loading: false,
        products: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export default ProductReducer;
