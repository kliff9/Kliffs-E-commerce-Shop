import express from 'express'
import mongoose from 'mongoose';
import userRouter from './Routers/UserRouter.js';
import productRouter from './Routers/ProductRouter.js';
import dotenv from 'dotenv';
import NotesRouter from './Routers/NotesRouter.js';
import orderRouter from './Routers/OrderRoute.js';
import path from 'path'

dotenv.config();

const app = express();
app.use(express.json()); // all request that contain data would be translated in node app
app.use(express.urlencoded({ extended: true }));
//connect to database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/E-com', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/notes', NotesRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb'); //sends paypal client Id to frontend
});  

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static["build"]);
//   app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })
// }
// app.get('/api/products', (req, res) => {
  //   res.send(data.products); // Only Show the Actual database with no variables
  // });

  // app.get('/api/products/:id', (req, res) => {
  //   const product = data.products.find((x) => x._id === req.params.id);
  //   if (product) {
  //     res.send(product);
  //   } else {
  //     res.status(404).send({ message: 'Product Not Found' });
  //   }
  // });
const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/build/index.html'))
// );
app.get('/', (req, res) => {
    res.send('Server is ready');
  });
// error catcher


  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// step 3
if (process.env.NODE_ENV === "production") { //if on merkudo
  app.use(express.static("build")); //  app.use(express.static("build"));
   app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
 })
 }