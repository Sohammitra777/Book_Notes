import { Request, Response } from "express";
import { insertBook, insertNote } from "../db/querie.js";
import notes from "../resources/infoNote.js";
import books from "../resources/infoBook.js";

const handleError = (
    res: Response,
    error: unknown,
    message = "Internal Server Error"
) => {
    console.error(message, error);
    res.status(500).json({ success: false, error: message });
};

export async function postUser(
    req: Request<{}, {}, { bookName: string; rating: number }, {}>,
    res: Response
) {
    try {
        const { bookName, rating } = req.body;

        if (!bookName?.trim() || isNaN(rating)) {
            return res.status(400).json({
                success: false,
                error: "Invalid input: bookName and rating are required.",
            });
        }

        await insertBook(bookName.trim(), rating);

        res.redirect("/");
    } catch (error) {
        handleError(res, error, "Failed to insert book");
    }
}

export async function newNote(
    req: Request<{}, {}, { id: number; note: string }>,
    res: Response
) {
    try {
        const { id, note } = req.body;

        if (!id || isNaN(id) || !note?.trim()) {
            return res.status(400).json({
                success: false,
                error: "Invalid input: id and note are required.",
            });
        }

        await insertNote(id, note.trim());

        res.status(201).json({
            success: true,
            message: "Note added successfully",
        });
    } catch (error) {
        handleError(res, error, "Failed to insert note");
    }
}

export async function initilized() {
        await Promise.all(
            books.map((element) => insertBook(element.name, element.rating))
        );

        await Promise.all(
            notes.map((element) => insertNote(element.note_id, element.note))
        );
}
