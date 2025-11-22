import { Request, Response } from "express";
import {
    deleteSelectedBook,
    deleteNoteFromBook,
    querySanitize,
} from "../db/querie.js";

const handleError = (
    res: Response,
    error: unknown,
    message = "Internal Server Error"
) => {
    console.error(message, error);
    res.status(500).json({ success: false, error: message });
};

export function deleteBook(req: Request<{ id: string }>, res: Response) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res
                .status(400)
                .json({ success: false, error: "Invalid book ID" });
        }

        deleteSelectedBook(id); // still returns void
        res.status(200).json({ success: true, message: "Book deleted" });
    } catch (error) {
        handleError(res, error, "Failed to delete book");
    }
}

export function deleteNote(req: Request<{ id: string }>, res: Response) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res
                .status(400)
                .json({ success: false, error: "Invalid note ID" });
        }

        deleteNoteFromBook(id);
        res.status(200).json({ success: true, message: "Note deleted" });
    } catch (error) {
        handleError(res, error, "Failed to delete note");
    }
}

export function sanitized(req: Request, res: Response) {
    try {
        querySanitize();
        res.status(200).json({ message: "turnicated successfully" });
    } catch (err) {
        res.status(404).json({ message: `problem occured : ${err}` });
    }
}
