import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Blog = new Schema({
  title: { type: String },
  image: { type: String },
  tagline: { type: String },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "users" },
});

export default mongoose.model("blogs", Blog);
