import { Request, Response} from "express";
import { insertBook, selectBook, selectBookNumber } from "../db/querie.js";


export interface User{
    id : number, 
    bookName : string,
    values : string[], 
    Rating : number
}
const storage : User[] = [
    {
        id : 1, 
        bookName : "INR1",
        values : ["ABC", "bcd", "dev"], 
        Rating : 5
    }, 
    {
        id : 2, 
        bookName : "DOLLAR2",
        values : ["a", "b"], 
        Rating : 3
    }

];

//GET ROUTES
export async function getUserDetails(req : Request, res : Response){
    const result = await selectBook();
    // console.log(result.rows); 

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


//DELETE ROUTES
export function deleteBook(req : Request<{id : string}>, res : Response){
    const id : number = parseInt(req.params.id);
    const index = storage.findIndex(element => element.id === id); 
    res.status(200).json({
        deleted : `Successfully deleted with index : ${index}`
    })
}