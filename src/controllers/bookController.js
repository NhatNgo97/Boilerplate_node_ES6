import Book from "../model/book";
import Author from "../model/author";
import book from "../model/book";

const bookController = {
  //ADD A BOOK
  addBook: async (req, res) => {
    try {
      const newBook = Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL BOOKS
  getAllBooks: async (req, res) => {
    try {
      const allbooks = await book.find();
      res.status(200).json(allbooks);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A BOOK
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("UPDATED SUCCESSFULLY");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A BOOK
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("DELETED SUCCESSFULLY");
    } catch (err) {}
  },
};

export default bookController;
