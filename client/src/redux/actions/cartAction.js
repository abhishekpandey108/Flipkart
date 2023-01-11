import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, ADD_TO_CART_ERROR } from '../actionType/cartActionType';


export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`https://magnificent-newt-housecoat.cyclic.app/products/${id}`);

        dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
      
    } catch (error) {
        console.log('Error while calling cart API',id);
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })

};



