import express from "express";
import { getBook, getBookById, getBooksByCategory } from "../controller/book.controller.js"; // Adjust based on your controller setup

const router = express.Router();

// Route to get all books
router.get("/", getBook);

// Route to get a specific book by ID
router.get("/:id", getBookById);

// Route to get books by category (Add this)
router.get("/category/:category", getBooksByCategory);

export default router;
