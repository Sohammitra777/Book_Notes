import pool from "../db/db.js";

export async function insertBook(name : string, note : string,  rating : number){
    const result = await pool.query<{max : number}>(
        ("SELECT COALESCE(MAX(id), 0) AS max FROM books")
    ); 
    const maxVal : number = result.rows[0].max+1; 
    await pool.query(
        "INSERT INTO books (id, name) VALUES ($1, $2)", [maxVal, name]
    ); 
    await pool.query(
        "INSERT INTO notes (id, note, rating) VALUES ($1, $2, $3)", [maxVal, note, rating]
    ); 
}