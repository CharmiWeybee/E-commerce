import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./authType";
import axios from 'axios'; 

export const register = (data) => {
    
    return (dispatch) => {
        axios
            .post("https://kamaraapi.weybee.in/api/customer/register",{...data})
            .then((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload:true
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });

            })

            .catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: error.response.data.message,
                });
            });
    };
};

export const login = (data) => {
    console.log("data", data)
    return (dispatch) => {
        axios
            .post("https://kamaraapi.weybee.in/api/customer/login?token=true", { ...data })
            .then((response) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: true
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });
                localStorage.setItem("token", response.data.token);

            })

            .catch((error) => {
                console.log("error", error)
                dispatch({
                    type: LOGIN_FAIL,
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: error.response.data.message,
                });
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        axios
            .get("https://kamaraapi.weybee.in/api/customer/logout?token=true")
            .then((response) => {
                dispatch({
                    type: LOGOUT,
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
