import  express  from "express";
import data from "../data.js";
import expressAsyncHandler from 'express-async-handler'; //avoid refresh errors?
import notee from "../models/NotesModel.js";


const NotesRouter = express.Router()
// sending list of products to frontend

// sending list of products to frontend




  NotesRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { // async a function always returns a promise.
       await notee.remove({}); 
      const noteseed = await notee.insertMany(data.NotesData);
      res.send({ noteseed });
    })
  );

  NotesRouter.get(
    '/notes',
    expressAsyncHandler(async (req, res) => {
      const sendnote = await notee.find({});// The find() method returns all occurrences in the selection.

      res.send(sendnote);
    })
  );
  // NotesRouter.get(
  //   '/:id',
  //   expressAsyncHandler(async (req, res) => {
  //     const NoteId = await notee.findById(req.params.id); //access ID
  //     if (NoteId) {
  //       res.send(NoteId);
  //     } else {
  //       res.status(404).send({ message: 'NoteId Not Found' });
  //     }
  //   })
  // );



export default NotesRouter