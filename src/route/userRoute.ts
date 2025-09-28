import express, { IRouter } from "express"; 
import { getUserDetails , getBookDetail, postUser, deleteBook} from "../controller/userController.js";
const router : IRouter = express.Router(); 

//GET Routes
router.get('/details', getUserDetails)
router.get('/bookDetail/:id', getBookDetail); 

//POST Routes
router.post('/submitbook', postUser)

//DELETE ROUTES
router.delete('/deleteBook/:id', deleteBook); 

export default router; 