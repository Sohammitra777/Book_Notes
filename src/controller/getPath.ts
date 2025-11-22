import { Request, Response } from "express";
import { selectBookAtoZ, selectBookRating, selectNote } from "../db/querie.js";

const handleError = (
    res: Response,
    error: unknown,
    message = "Internal Server Error"
) => {
    console.error(message, error);
    res.status(500).json({ error: message });
};

export async function getUserDetailsAtoZ(req: Request, res: Response) {
    try {
        const result = await selectBookAtoZ();
        if (!result?.rows?.length) {
            return res.status(404).json({ error: "No books found (A-Z)" });
        }
        res.status(200).json({ users: result.rows });
    } catch (error) {
        handleError(res, error, "Failed to fetch books A-Z");
    }
}

export async function getUserDetailsRating(req: Request, res: Response) {
    try {
        const result = await selectBookRating();
        if (!result?.rows?.length) {
            return res.status(404).json({ error: "No books found (Rating)" });
        }
        res.status(200).json({ users: result.rows });
    } catch (error) {
        handleError(res, error, "Failed to fetch books by rating");
    }
}

export async function getNote(req: Request<{ id: string }>, res: Response) {
    try {
        const searchId = parseInt(req.params.id, 10);
        if (isNaN(searchId)) {
            return res.status(400).json({ error: "Invalid ID parameter" });
        }

        const note = await selectNote(searchId);
        if (!note?.rows?.length) {
            return res
                .status(404)
                .json({ error: `No notes found for ID ${searchId}` });
        }

        res.status(200).json({ value: note });
    } catch (error) {
        handleError(res, error, "Failed to fetch note details");
    }
}
