import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, trim: true, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  phoneNumber: {
    type: String,
    trim: true,
    index: true,
    min: 5,
    max: 15,
  },
  admin: { type: Boolean, default: false },
  password: { type: String },
  registrationDate: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default mongoose.model("user", userSchema);
