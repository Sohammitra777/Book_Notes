import express, { IRouter } from "express"; 
import { getUserDetailsAtoZ , getBookDetail, postUser, deleteBook, getUserDetailsRating} from "../controller/userController.js";
const router : IRouter = express.Router(); 

//GET Routes
router.get('/atozDetails', getUserDetailsAtoZ)
router.get('/ratingDetails', getUserDetailsRating)
router.get('/bookDetail/:id', getBookDetail); 

//POST Routes
router.post('/submitbook', postUser)

//DELETE ROUTES
router.delete('/deleteBook/:id', deleteBook); 

export default router; 