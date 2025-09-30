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

export async function selectBookAtoZ(){
    return await pool.query(
        "SELECT books.id, books.name, notes.note, notes.rating FROM books JOIN notes ON books.id = notes.id ORDER BY books.name ASC"
    ); 
}

export async function selectBookRating() {
    return await pool.query(
        "SELECT books.id, books.name, notes.note, notes.rating FROM books JOIN notes ON books.id = notes.id ORDER BY notes.rating DESC"
    ); 
}


export async function selectBookNumber(id : number) {
    return await pool.query(
        "SELECT notes.note FROM books JOIN notes ON books.id = notes.id WHERE books.id = $1", [id]
    )
}

export async function deleteSelectedBook(id : number) {
    await pool.query(
        "DELETE FROM notes WHERE id = $1", [id]
    );
    await pool.query(
        "DELETE FROM books WHERE id = $1", [id]
    );  
}