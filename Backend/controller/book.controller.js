import Book from "../model/book.model.js";

// Fetch all books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// Fetch a book by ID
export const getBookById = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// Fetch books by category (new function)
export const getBooksByCategory = async (req, res) => {
    const { category } = req.params; // Get the category from the URL parameters
    try {
        const books = await Book.find({ category }); // Find books matching the category
        if (!books.length) {
            return res.status(404).json({ message: "No books found in this category" });
        }
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error", error });
    }
};
