import * as actionTypes from "./detail-view-types";


export const detailView = (item) => {
    console.log(item, "4");
    return {
        type: actionTypes.DETAIL_VIEW,
        payload: item,
    };
};