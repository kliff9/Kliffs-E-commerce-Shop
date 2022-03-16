import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProducScreen';
import CartScreen from './screens/CartScreen';
// import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SignInScreen';
import { signout } from './actions/UserActions';
import { useDispatch } from 'react-redux';
import  { useSelector } from 'react-redux';
import NotesScreen from './screens/NotesScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

const userSignin = useSelector(state => state.userSignin); 
// const userSignin = useSelector(state => state.userSignin) || {};
const { userInfo } = userSignin;


  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link  className="brand" to="/">
            Kliff's Store
          </Link>
        </div>
        <div>
        <Link to="/notes">Notes</Link>
          <Link to="/cart">Cart{
            cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )
          }</Link>
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
        </div>
      </header>
      <main>
        {/* having ? to show card with adding New item */}
      <Route path="/cart/:id?" component={CartScreen}></Route> 
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/notes" component={NotesScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>

      <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;