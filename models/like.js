const mongoose = require("mongoose");

const Like = mongoose.model("Like", { count: Number });

module.exports = Like;


