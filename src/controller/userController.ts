import axios from "axios";
import { Request, Response} from "express";

export interface User{
    id : number, 
    values : string[]
}
const storage : User[] = [
    {
        id : 1, 
        values : ["ABC", "bcd", "dev"]
    }, 
    {
        id : 2, 
        values : ["a", "b"]
    }

];

export function getUserDetails(req : Request, res : Response){
    res.status(200).json({
        users : storage
    }); 
}