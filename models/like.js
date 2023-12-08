const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  page: { type: String, required: true, unique: true },
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = Like;
