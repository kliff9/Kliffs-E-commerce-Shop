import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../componets/LoadingBox';
import MessageBox from '../componets/MessageBox';
import Rating from '../componets/Rating';
export default function ProductScreen(P) { // The P uses itself as a Object since no Spefic variable is attactched
    // getting finding the ID in the array with the items in thee database
    // x._id === P.match.params.id The ID in the Route Config, def #2 Pass the value of match.params.id to the id by using id:
const dispatch = useDispatch();
const productId = P.match.params.id;
const [qty, setQty] = useState(1); //hook to get qty to add to cart

const productDetails = useSelector((state) => state.productDetails);



const {loading, error, product} = productDetails 
useEffect(() => {
  dispatch(detailsProduct(productId));

}, [dispatch, productId]);

const addToCartHandler = () => { 
  // The history. push() function is used to move from the current page to another one
  P.history.push(`/cart/${productId}?qty=${qty}`);
}
console.log('qty: ', qty)
 
  return (
    <div>
    {loading? <LoadingBox></LoadingBox> : error? <MessageBox variant="danger">{error}</MessageBox> : (
 <div>
 <Link to="/">Back to result</Link>
 <div className="row top">
   <div className="col-2">
     <img className="large" src={product.image} alt={product.name}></img>
   </div>
   <div className="col-1">
     <ul>
       <li>
         <h1>{product.name}</h1>
       </li>
       <li>
         <Rating
           rating={product.rating}
           numReviews={product.numReviews}
         ></Rating>
       </li>
       <li>Pirce : ${product.price}</li>
       <li>
         Description:
         <p>{product.description}</p>
       </li>
     </ul>
   </div>
   <div className="col-1">
     <div className="card card-body">
       <ul>
         <li>
           <div className="row">
             <div>Price</div>
             <div className="price">${product.price}</div>
           </div>
         </li>
         <li>
           <div className="row">
             <div>Status</div>
             <div>
               {
                //  If items arent in stock they show a html of "unavaable"
               product.countInStock > 0 ? (
                 <span className="success">In Stock</span>
               ) : (
                 <span className="danger">Unavailable</span>
               )}
             </div>
           </div>
         </li>
         {
          //  The qty Will Onlt Show if product in stock because of "and" operator and the 2nd statement always being true
           product.countInStock > 0 && (
            <>
            <li>
              <div className="row">
                <div>Qty</div>
                <div>
                  <select
                  // defeault value i belive
                    value={qty}
                    // Tracks value for user is selecting
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {/* function bellow will
                    1.Make 10 commas
                    2..key() will count the indexes
                    3. the indexes will be added to the array
                    4..map kinda Loops until it reaches the end
                    5. Each number will be "looped" which will be added to 1 */}
                    {[...Array(product.countInStock).keys()].map(
                      (x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={addToCartHandler}
                className="primary block"
              >
                Add to Cart
              </button>
            </li>
          </>
        )}
       </ul>
     </div>
   </div>
   </div>
        </div>
      )}
    </div>
  );
}

