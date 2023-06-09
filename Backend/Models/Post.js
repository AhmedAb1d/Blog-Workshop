const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
