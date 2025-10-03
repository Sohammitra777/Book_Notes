import { Request, Response} from "express";
import { deleteSelectedBook, deleteNoteFromBook } from "../db/querie.js";

export function deleteBook(req : Request<{id : string}>, res : Response){
    const id : number = parseInt(req.params.id);

    deleteSelectedBook(id); 

    // const index = storage.findIndex(element => element.id === id); 
    // res.status(200).json({
    //     deleted : `Successfully deleted with index : ${index}`
    // })

    res.status(200).json("Deleted"); 
}

export function deleteNote(req : Request<{id : string}>, res : Response){
    const id : number = parseInt(req.params.id); 

    deleteNoteFromBook(id); 

    res.status(200).json("Note Deleted"); 
}