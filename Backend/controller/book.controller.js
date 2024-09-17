import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error", error });
    }
};

export const getBookById = async (req, res) => {
    const bookId = req.params.id;

    try {
        const book = await Book.findById(bookId); // Use findById to fetch the book
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error", error });
    }
};