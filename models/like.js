const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  count: Number,
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
