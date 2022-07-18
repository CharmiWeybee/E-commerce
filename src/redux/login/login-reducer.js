import * as actionTypes from "./login-types";

const INITIAL_STATE = {
    login: [],
};
// console.log(INITIAL_STATE)
const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_LOGIN_FORM:return{

        }
            
         
        default:
            return state;
    }
};

export default loginReducer;