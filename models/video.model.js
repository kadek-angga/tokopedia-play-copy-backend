const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoTitle: {
      required: true,
      type: String,
    },
    videoUrl: {
      required: true,
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
