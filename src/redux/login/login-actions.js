import * as actionTypes from "./login-types";

export const submitLoginForm = () => {
    console.log( "4");
    return {
        type: actionTypes.SUBMIT_LOGIN_FORM,
        payload: ''
    };
};