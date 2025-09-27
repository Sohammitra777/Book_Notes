import express, { IRouter } from "express"; 
import { getUserDetails , getBookDetail, deleteBook} from "../controller/userController.js";
const router : IRouter = express.Router(); 

//GET Routes
router.get('/details', getUserDetails)
router.get('/bookDetail/:id', getBookDetail); 

//DELETE ROUTES
router.delete('/deleteBook/:id', deleteBook); 

export default router; 