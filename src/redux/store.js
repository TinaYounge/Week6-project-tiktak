import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ProductReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
  products: ProductReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
console.log(store.getState());
