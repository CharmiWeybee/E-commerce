let initialState = {
    loading: false,
    cart:[],
    item: [],
    error: null
};

function reducer(state = initialState, action) {

    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                item: action.payload
            };
        case "FETCH_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                item: []
            };
        case "ADD_TO_CART":
            console.log('reducer ', action.payload.data.items)
            return {
                ...state,
                cartList: action.payload.data.items
            };
        case "GET_CART":
            return {
                ...state,
                cart: action.payload

            };
        case "VIEW_DETAILS":
            return {
                ...state,
                loading: true,
                item: {}
            };
        default:
            return state;
    }
}

export default reducer;
