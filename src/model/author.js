import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});

export default mongoose.model("author", authorSchema);
