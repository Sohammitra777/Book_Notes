import pool from "../db/db.js";


//Insertion
export async function insertBook(name : string, rating : number){
    // const result = await pool.query<{max : number}>(
    //     ("SELECT COALESCE(MAX(id), 0) AS max FROM books")
    // // ); 
    // const maxVal: number = (result.rows[0]?.max ?? 0) + 1;
    await pool.query(
        "INSERT INTO books (name, rating) VALUES ($1, $2)", [name, rating]
    ); 
}

export async function insertNote(id : number, note : string) {
    return await pool.query(
        "INSERT INTO notes (note_id, note) VALUES ($1, $2)", [id, note]
    );
}


//Selection
export async function selectBookAtoZ(){
    return await pool.query(
        "SELECT books.name, books.rating, books.id FROM books ORDER BY name ASC"
    ); 
}

export async function selectBookRating() {
    return await pool.query(
        "SELECT books.name, books.rating, books.id FROM books ORDER BY rating DESC"
    ); 
}


// export async function selectBookNumber(id : number) {
//     return await pool.query(
//         "SELECT notes.note FROM books JOIN notes ON books.id = notes.note_id WHERE books.id = $1", [id]
//     ); 
// }

export async function selectNote(id : number){
    return await pool.query(
        "SELECT notes.id, notes.note FROM notes WHERE notes.note_id = $1", [id]
    ); 
}


//Deletion
export async function deleteSelectedBook(id : number) {
    await pool.query(
        "DELETE FROM notes WHERE note_id = $1", [id]
    );
    await pool.query(
        "DELETE FROM books WHERE id = $1", [id]
    );  
}


export async function deleteNoteFromBook(id : number){
    await pool.query(
        "DELETE FROM notes WHERE id = $1", [id]
    ); 
}