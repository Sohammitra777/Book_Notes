import { Request, Response} from "express";
import { deleteSelectedBook, insertBook, selectBookAtoZ, selectBookNumber, selectBookRating } from "../db/querie.js";

//GET ROUTES
export async function getUserDetailsAtoZ(req : Request, res : Response){
    const result = await selectBookAtoZ();
    //console.log(result); 

    res.status(200).json({
        users : result.rows
    }); 
}

export async function getUserDetailsRating(req : Request, res : Response){
    const result = await selectBookRating();
    console.log(result.rows); 

    res.status(200).json({
        users : result.rows
    }); 
}

export async function getBookDetail(req : Request<{id : string}>, res : Response){
    const searchId : number  = parseInt(req.params.id); 

    const note : number | undefined = await selectBookNumber(searchId);
    
    if(note === undefined) return res.status(404).json({ error : "Data not found"}); 
    // console.log(index); 
    res.status(200).json({
        value : note
    });
}


//POST ROUTES
export function postUser(req: Request<{}, {}, {bookName : string, note : string, rating : number}, {}>, res : Response){
    const {bookName, note, rating} = req.body; 
    
    insertBook(bookName, note, rating); 
    
    res.status(200).redirect('/'); 
}


//DELETE ROUTE
export function deleteBook(req : Request<{id : string}>, res : Response){
    const id : number = parseInt(req.params.id);

    deleteSelectedBook(id); 

    // const index = storage.findIndex(element => element.id === id); 
    // res.status(200).json({
    //     deleted : `Successfully deleted with index : ${index}`
    // })

    res.status(200).json("Deleted"); 
}