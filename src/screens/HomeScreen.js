import {useEffect} from "react"
import Product from "../componets/Product"
import LoadingBox from "../componets/LoadingBox";
import MessageBox from "../componets/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
export default function HomeScreen() {
// const [products, setProducts] = useState([]); // products will  use the data file
// const [loading, setLoading] = useState(false)
// const [error, setError] = useState(false)
// ----- fetch data from back end and dispatch
const productList = useSelector( state => state.productList) //useSelector is a function that takes the current state as an argument and returns whatever data you want from it
const { loading, products, error } = productList
const dispatch = useDispatch()
// B) An empty array []: the side-effect runs once after the initial rendering.

console.log('prod:', products)

useEffect(() => { 
  dispatch(listProducts())
}, [])
  
  // By using this Hook, you tell React that your component needs to do something after render.
//   const fetchData = async () => {
//     try {
//     setLoading(true)

    
//   const {data} = await axios.get('api/products') //used data in this tab
//   setLoading(false)
//   setProducts(data) 
//  }catch(err) {
//    setError(err.message)
//    setLoading(false)
//  }
// }
//   fetchData()
//  }, [])
    return (
        <div>
          {loading? <LoadingBox></LoadingBox> : error? <MessageBox variant="danger">{error}</MessageBox> : (
         <div className="row center">
          {/* The Map object holds key-value pairs and remembers the original insertion order of the keys */}
          
          {products.map((product) => (
            //  In React, it is used to identify which items have changed, updated, or deleted from the Lists.
            // product eqates as a place holder for the key in a "object"
            
           <Product key={product._id} product={product} iss={{the: "the"}}> </Product>
          ))};
        </div>
          
)}
      </div>
    )
    
}