import { Request, Response} from "express";
import { insertBook, insertNote } from "../db/querie.js";

export function postUser(req: Request<{}, {}, {bookName : string, rating : number}, {}>, res : Response){
    const {bookName,rating} = req.body; 
    console.log(req.body); 
    insertBook(bookName, rating); 
    
    res.status(200).redirect('/'); 
}

export function newNote(req : Request<{}, {}, {id : number, note : string}>, res : Response){
    const {id , note} = req.body; 
    //console.log(req.body); 
    insertNote(id, note); 

    res.status(200).json("Note Added"); 
}