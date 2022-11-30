import {createStore , combineReducers , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer,getProductsDetailsReducer } from './reducers/getProductsReducer';
import cartReducer from './reducers/cartReducer';


const middleware = [thunk];
const reducer = combineReducers({
    getProducts : getProductsReducer,
    getProductsDetails : getProductsDetailsReducer,
    cart : cartReducer
});    

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);



export default store;