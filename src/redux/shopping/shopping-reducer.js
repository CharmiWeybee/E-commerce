import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    cart: [],
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const addItem = action.payload;
            const addList = state.cart;
            const addExist = addList.find((x) => x.id === addItem.id);
            if (addExist) {
                return {
                    cart: addList.map((x) =>
                        x.id === addItem.id ? { ...addExist, qty: addExist.qty + 1 } : x
                    ),
                };
            } else {
                addList.push({ ...addItem, qty: 1 });
                return {
                    cart: addList,
                };
            }

        case actionTypes.REMOVE_FROM_CART:
            const removeItem = action.payload;
            const removeList = state.cart;
            const removeExist = removeList.find((x) => x.id === removeItem.id);
            if (removeExist.qty === 1) {
                return {
                    cart: removeList.filter((x) => x.id !== removeItem.id),
                };
            } else {
                return {
                    cart: removeList.map((x) =>
                        x.id === removeItem.id
                            ? { ...removeExist, qty: removeExist.qty - 1 }
                            : x
                    ),
                };
            }

       

        default:
            return state;
    }
};

export default shoppingReducer;
