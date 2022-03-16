import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromcart } from '../actions/CartAction';
import MessageBox from '../componets/MessageBox';


export default function CartScreen (P) {
const productId = P.match.params.id;
const qty = P.location.search? Number(P.location.search.split('=')[1]): 1;

const cart = useSelector(state => state.cart);
const { cartItems } = cart;



const removeFromCartHandler = (id) => {
  dispatch(removeFromcart(id))  };
  
const checkoutHandler = () => {
     P.history.push('/signin?redirect=shipping');
     // P.history.push('/signin?redirect=notes');


    };
const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty]);
return (
    <div className="row top">
    <div className="col-2">
      <h1>Shopping Cart</h1>
                {/* the current Class ammount of objects? */}

      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty. <Link to="/">Go Shopping</Link>
        </MessageBox>
      ) : (
        <ul>
          {/*  */}
          {cartItems.map((item) => (
            <li key={item.product}>
              <div className="row">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="small"
                  ></img>
                </div>
                <div className="min-30">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div>
                  <select
                  // Shows Quanity and option to change, assuming e.target get input as new qanity
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {/* The Ammount of qty */}
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>${item.price}</div>
                <div>
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="col-1">
      <div className="card card-body">
        <ul>
          <li>
            <h2>
              {/* reduce((previousValue, currentValue) => { ... } ) */}
              {/* a = previous value(0) and c is cartitems so previous items + cartitems.qty */}
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h2>
          </li>
          <li>
            <button
              type="button"
              onClick={checkoutHandler}
              className="primary block"
              // build in disabled?
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
                    }