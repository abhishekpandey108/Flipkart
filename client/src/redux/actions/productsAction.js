import axios from "axios";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS , GET_PRODUCT_DETAILS_REQUEST , GET_PRODUCT_DETAILS_SUCCESS , GET_PRODUCT_DETAILS_FAIL  } from "../actionType/productActionType";

const URL = "https://magnificent-newt-housecoat.cyclic.app";

export const getProducts = () => async(dispatch) => {

    try {
        const {data}  = await axios.get(`${URL}/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAILED,
            payload: error.message
        })
    }

}

export const getProductsDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST })                            // To show loading
        const {data}  = await axios.get(`${URL}/product/${id}`);
        console.log(data);
        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS ,  payload: data })  
        
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload: error.message
        })
    }
}