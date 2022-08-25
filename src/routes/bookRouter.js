import express from "express";
import bookController from "../controllers/bookController";

const bookRouter = express.Router();

//ADD Book Router
bookRouter.post("/", bookController.addBook);

//GET ALL BOOK
bookRouter.get("/", bookController.getAllBooks);

//GET A BOOK
bookRouter.get("/:id", bookController.getABook);

//UPDATE A BOOK
bookRouter.put("/:id", bookController.updateBook);

//DELETE A BOOK
bookRouter.delete("/:id", bookController.deleteBook);

export default bookRouter;
