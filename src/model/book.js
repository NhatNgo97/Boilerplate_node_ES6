import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  name: { type: String },
  publishedDate: {
    type: String,
  },
  description: { type: String, trim: true },
  genres: [
    {
      type: String,
    },
  ],
  author: {
    type: mongoose.Types.ObjectId,
    ref: "author",
  },
});

export default mongoose.model("book", bookSchema);
