import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ProductReducer from "./Product/ProductReducer";
import RegisterUserReducer from "./Register/RegisterReduce";
import loginUserReducer from "./Login/LoginReduce";
import ToastReducer from "./Toast/ToastReducer";
import CountReducer from "./Count/CountReducer";

const rootReducer = combineReducers({
  products: ProductReducer,
  register: RegisterUserReducer,
  toast: ToastReducer,
  login: loginUserReducer,
  count: CountReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
console.log(store.getState());
