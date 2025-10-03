import { Request, Response} from "express";
import { selectBookAtoZ, selectBookRating, selectNote } from "../db/querie.js";

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