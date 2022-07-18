import * as actionTypes from "./shopping-types";

export const addToCart = (item) => {
    console.log(item, "4");
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item,
    };
};
export const removeFromCart = (item) => {
    console.log(item, "11");
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item,
    };
};
