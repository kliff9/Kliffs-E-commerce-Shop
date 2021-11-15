import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_ADDRESS, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload // dataselected items + qty
            const existItem = state.cartItems.find(x => x.product === item.product) //matches obect with object, when product is define elsewere?
            if (existItem) {
                return {

                  ...state, // passess in the the cart not changing other properties(previous version)
                  cartItems: state.cartItems.map((x) => // item is only added if state is true
                    x.product === existItem.product ? item : x, //takes the item in question and replaces the same item with new info if their the same


                  ),
                };
              } else {
                 return { ...state, cartItems: [...state.cartItems, item] }; //Keeps the Cartitems and adds the new item
            }
      case CART_REMOVE_ITEM:
              return {
                // Adds to to new list for watever doesnt have same ID of the id since action.paylod = ID in removefromcart
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
              };
    case CART_SAVE_SHIPPING_ADDRESS:
              return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_ADDRESS:
                return { ...state, paymentMethod: action.payload };
   case CART_EMPTY:
                return { ...state, cartItems: [] };
     default:
            return state;
          }
        };

