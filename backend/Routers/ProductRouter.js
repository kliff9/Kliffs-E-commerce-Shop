import  express  from "express";
import data from "../data.js";
import expressAsyncHandler from 'express-async-handler'; //avoid refresh errors?
import ProducT from "../models/ProductModel.js";


const productRouter = express.Router()
// sending list of products to frontend
productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const products = await ProducT.find({});// The find() method returns all occurrences in the selection.

      res.send(products);
    })
  );

  //ID is automatically assigne

  //Creating products database
  productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { // async a function always returns a promise.
      await ProducT.remove({}); //// works only inside async functions
      const createdProducts = await ProducT.insertMany(data.products);
      res.send({ createdProducts });
    })
  );
// details to frond end
  productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const product = await ProducT.findById(req.params.id); //access ID
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );



export default productRouter