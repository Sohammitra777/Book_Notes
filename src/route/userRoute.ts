import express, { IRouter } from "express";
import {
    getUserDetailsAtoZ,
    postUser,
    deleteBook,
    getUserDetailsRating,
    newNote,
    getNote,
    deleteNote,
    sanitized,
} from "../controller/index.js";
import { initilized } from "../controller/postPath.js";
const router: IRouter = express.Router();

//GET Routes
router.get("/atozDetails", getUserDetailsAtoZ);
router.get("/ratingDetails", getUserDetailsRating);
router.get("/noteDetail/:id", getNote);

//POST Routes
router.post("/submitbook", postUser);
router.post("/noteSubmit", newNote);

//DELETE ROUTES
router.delete("/deleteBook/:id", deleteBook);
router.delete("/deleteNote/:id", deleteNote);

setInterval(async () => {
    await sanitized(); 
    console.log("sanatized"); 
    await initilized(); 
    console.log("working"); 
}, .5 * 60 * 1000);

export default router;
