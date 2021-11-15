import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
//fetch products from backend, state shouldnt be null
//Based on actions
export const productListReducer = (state = {loading: true , products: [] }, action) => {
    switch(action.type){ // 
        case PRODUCT_LIST_REQUEST:
            return{ loading: true }
        case PRODUCT_LIST_SUCCESS:
          console.log('Pdata: ',  action.payload)
            return {loading: false, products: action.payload }          


        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state;
    } // the Request

}

export const productDetailsReducer = (
    state = { product: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };