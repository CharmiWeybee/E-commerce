import { combineReducers } from "redux";
import products from "./productReducer";
import auth from "./authReducer";
import authMessage from "./authMessageReducer";

export default combineReducers({
    products,
    auth,
    authMessage,
});
