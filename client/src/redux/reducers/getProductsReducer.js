
import { GET_PRODUCTS_FAILED, GET_PRODUCTS, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL  } from "../actionType/productActionType";

export const getProductsReducer = ( state={ products: [] }  , action ) => {
  switch(action.type) {
    case GET_PRODUCTS : return { products : action.payload }
    
    case GET_PRODUCTS_FAILED :  return { error : action.payload }

    default : return state;
  } 
};



export const getProductsDetailsReducer = ( state={ product: {} }  , action ) => {
  switch(action.type){
    case GET_PRODUCT_DETAILS_REQUEST:
        return { loading: true }
    case GET_PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
    case GET_PRODUCT_DETAILS_FAIL:
        return {
            loading: false,
            error: action.payload
        }
    default:
        return state
  }

}  