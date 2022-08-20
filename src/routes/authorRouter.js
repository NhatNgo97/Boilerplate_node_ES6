import express from "express";
import authorController from "../controllers/authorController";

const authorRouter = express.Router();

//ADD AUTHOR Router
authorRouter.post("/", authorController.addAuthor);

//GET ALL AUTHOR
authorRouter.get("/", authorController.getAllAuthor);

//GET AN AUTHOR
authorRouter.get("/:id", authorController.getAnAuthor);

//UPDATE AN AUTHOR
authorRouter.put("/:id", authorController.updateAuthor);

//DELETE AN AUTHOR
authorRouter.delete("/:id", authorController.deleteAuthor);
export default authorRouter;
