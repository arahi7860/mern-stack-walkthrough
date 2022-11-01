import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Student = new Schema({
  name: { type: String },
  school: { type: String },
  age: { type: Number },
  image: { type: String },
});

export default mongoose.model("students", Student);
