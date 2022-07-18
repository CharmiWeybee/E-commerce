import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer";
import detailViewReducer from "./detailView/detail-view-reducer";

const rootReducer = combineReducers({
    shop: shopReducer,
    view: detailViewReducer
});

export default rootReducer;
