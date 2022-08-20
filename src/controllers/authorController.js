import Author from "../model/author";
import Book from "../model/book";

const authorController = {
  addAuthor: async (req, res) => {
    try {
      console.log(req.body);
      const newAuthor = new Author(req.body);
      const savedAuthor = newAuthor.save();
      res.status(200).json(newAuthor);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //GET ALL AUTHOR
  getAllAuthor: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET AN AUTHOR
  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AN AUTHOR
  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("UPDATED SUCCESSFULLY");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE AN AUTHOR
  deleteAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("DELETED SUCCESSFULLY");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

export default authorController;
