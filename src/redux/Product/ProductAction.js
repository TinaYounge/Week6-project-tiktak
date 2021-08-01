import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./ProductType";
import axios from "axios";
export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};
export const fetchProductFail = () => {
  return {
    type: FETCH_PRODUCT_FAIL,
    payload: Error,
  };
};

// export const fetchProduct = () => {
//   return (dispatch) => {
//     dispatch(fetchProductRequest);
//     axios
//       .get("http://cs-ecom-be.herokuapp.com/api/products")
//       .then((response) => {
//         const product = response.data;
//         dispatch(fetchProductSuccess(product));
//       })
//       .catch((Error) => {
//         const errorMge = Error.message;
//         console.log("n", errorMge);
//         dispatch(fetchProductFail(errorMge));
//       });
//   };
// };

export const fetchSearchProduct = (search) => {
  return (dispatch) => {
    dispatch(fetchProductRequest);
    axios
      .get(`http://cs-ecom-be.herokuapp.com/api/products?search=${search}`)
      .then((response) => {
        const product = response.data;
        console.log("1 cai thoi", product);
        console.log("searchxuongtoiaction", search);

        dispatch(fetchProductSuccess(product));
      })
      .catch((Error) => {
        const errorMge = Error.message;
        console.log("searcbox", errorMge);
        dispatch(fetchProductFail(errorMge));
      });
  };
};
