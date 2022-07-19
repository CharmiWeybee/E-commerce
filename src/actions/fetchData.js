import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
            .get(
                "https://kamaraapi.weybee.in/api/products"
            )
            .then(response => {
                console.log('response',response.data)
                dispatch(fetchDataSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            });
    };
}
