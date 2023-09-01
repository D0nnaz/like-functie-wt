const likeSchema = new mongoose.Schema({
  count: Number,
});

likeSchema.index({ count: 1 });

const Like = mongoose.model("Like", likeSchema);
