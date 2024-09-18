import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js"; // Adjust your import based on your controller setup

const router = express.Router();

// Route to get all books
router.get("/", getBook);

// Route to get a specific book by ID
router.get("/:id", getBookById); // Add this line to handle requests like /book/1

export default router;