import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, ADD_TO_CART_ERROR } from '../actionType/cartActionType';
const URL = "http://localhost:8080";

export const addToCart = (id,quantity) => async(dispatch)=> {
    try {
        const {data} = await axios.get(`${URL}/product/${id}`)
        dispatch({
            type: ADD_TO_CART,
            payload: {...data, quantity}
        })
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_ERROR,
            payload: error.message
        })
    }
}




export const removeFromCart = (id) =>(dispatch) => {
    dispatch({ 
        type: REMOVE_FROM_CART,
        payload: id
    })    
}