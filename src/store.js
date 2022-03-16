import {createStore, compose, applyMiddleware, combineReducers } from 'redux'
import  { productDetailsReducer, productListReducer } from './reducers/productReducers'
import  thunk from 'redux-thunk'
import { cartReducer } from './reducers/CartReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/UserReducer';
import { NotesReducer } from './reducers/NotesReducer';
import { orderCreateReducer, orderDetailsReducer } from './reducers/OrderReducers';

// Create a Redux store
// local storage related to spefically cart (with Ex.Useselecter)
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],  
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'PayPal',
    },
  };
// const reducer = (state, action) => {
//     return {products: data.products} // returns list of products
// };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    NoteState: NotesReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
console.log('getstore: ', store.getState())

export default store