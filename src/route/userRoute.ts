import express, { IRouter } from "express"; 
import { getUserDetails } from "../controller/userController.js";
const router : IRouter = express.Router(); 

router.get('/details', getUserDetails)

export default router; 