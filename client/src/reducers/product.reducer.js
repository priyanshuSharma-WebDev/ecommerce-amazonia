import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
 } from "../Constants/constants"

export const productReducers = (state = {products: []},action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false,products: action.payload}
        case PRODUCT_LIST_FAILURE:
            return {loading: false,error: action.payload}
        default:
           return state
    }
}
export const productDetailsReducers = (state = {loading: true,product: {}},action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false,product: action.payload}
        case PRODUCT_DETAILS_FAILURE:
            return {loading: false,error: action.payload}
        default:
           return state
    }
}
