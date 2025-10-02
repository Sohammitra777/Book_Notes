import { Request, Response} from "express";
import { deleteNoteFromBook, deleteSelectedBook, insertBook, insertNote, selectBookAtoZ, selectBookRating, selectNote } from "../db/querie.js";

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
    //console.log(result.rows); 

    res.status(200).json({
        users : result.rows
    }); 
}

// export async function getBookDetail(req: Request<{ id: string }>, res: Response) {
//     const searchId: number = parseInt(req.params.id);

//     const note = await selectBookNumber(searchId);

//     if (note === undefined) {
//         return res.status(404).json({ error: "Data not found" });
//     }

//     res.status(200).json({
//         value: note
//     });
// }

export async function getNote(req : Request<{id : string}>, res : Response){
    const searchId: number = parseInt(req.params.id);

    const note  = await selectNote(searchId); 
    console.log(note.rows)

    if (note === undefined) {
        return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({
        value: note
    });
}

//POST ROUTES
export function postUser(req: Request<{}, {}, {bookName : string, rating : number}, {}>, res : Response){
    const {bookName, rating} = req.body; 
    console.log(req.body); 
    insertBook(bookName, rating); 
    
    res.status(200).redirect('/'); 
}

export function newNote(req : Request<{}, {}, {id : number, note : string}>, res : Response){
    const {id , note} = req.body; 
    
    insertNote(id, note); 

    res.status(200); 
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

export function deleteNote(req : Request<{id : string}>, res : Response){
    const id : number = parseInt(req.params.id); 

    deleteNoteFromBook(id); 

    res.status(200).json("Note Deleted"); 
}