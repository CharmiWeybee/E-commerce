import * as actionTypes from "./detail-view-types";

const INITIAL_STATE = {};


const detailViewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.DETAIL_VIEW:
            return{
               state
            }
         default: return state;
            
    }}


export default detailViewReducer;
