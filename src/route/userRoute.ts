import express, { IRouter } from "express"; 
import { getUserDetailsAtoZ, postUser, deleteBook, getUserDetailsRating, newNote, getNote, deleteNote} from "../controller/index.js";
const router : IRouter = express.Router(); 

//GET Routes
router.get('/atozDetails', getUserDetailsAtoZ)
router.get('/ratingDetails', getUserDetailsRating)
// router.get('/bookDetail/:id', getBookDetail); 
router.get('/noteDetail/:id', getNote)

//POST Routes
router.post('/submitbook', postUser)
router.post('/noteSubmit', newNote)
//DELETE ROUTES
router.delete('/deleteBook/:id', deleteBook);
router.delete('/deleteNote/:id', deleteNote); 

export default router; 