import axios from "axios";
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    ADD_TO_CART,
    UPDATE_CART,
    GET_CART,
    VIEW_DETAILS,

} from "./productsType";

export function fetchDataRequest() {
    return {
        type: FETCH_DATA_REQUEST,
    };
}

export function fetchDataSuccess(item) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: item,
    };
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: { error },
    };
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios
            .get("https://kamaraapi.weybee.in/api/products?hide=variants,categories,description,images,variants,superattributes&limit=8")
            .then((response) => {
                console.log("response", response.data);
                dispatch(fetchDataSuccess(response.data.data));
            })
            .catch((error) => {
                dispatch(fetchDataError(error));
            });
    };
}

export function addToCart(data) {
    console.log("cart data", data)
    return (dispatch) => {
        axios
            .post(`https://kamaraapi.weybee.in/api/checkout/cart/add/${data.productId}`,{...data})
            .then((response) => {
                console.log("cart response",response.data)
                dispatch({
                    type: ADD_TO_CART,
                    payload: response.data
                });
                dispatch(getCart())
                
            })

            .catch((error) => {
                console.log(error)
            });
    };
}
// export function updateCart() {
//     return (dispatch) => {
//         axios
//             .post(`https://kamaraapi.weybee.in/api/checkout/cart/update?token=true`)
//             .then((response) => {
//                 dispatch({
//                     type: UPDATE_CART,
//                     payload: response.data
//                 });
//             })

//             .catch((error) => {
//                 console.log(error)
//             });
//     };
// }


export function getCart(){
    return (dispatch) => {
        axios
            .get(`https://kamaraapi.weybee.in/api/checkout/cart?token=true`)
            .then((response) => {
              
                dispatch({
                    type: GET_CART,
                    payload: response.data
                });
                console.log("cart", response.data)
            })

            .catch((error) => {
                console.log(error)
            });
    };
}

export function ViewDetails(data) {
    console.log("details data", data)
    return (dispatch) => {
        axios
            .post(`https://kamaraapi.weybee.in/api/checkout/cart/add/${data.productId}`, { ...data })
            .then((response) => {
                console.log("deail response", response.data)
                dispatch({
                    type: VIEW_DETAILS,
                    payload: true
                });
            })

            .catch((error) => {
                console.log(error)
            });
    };
}