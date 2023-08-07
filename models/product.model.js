const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      required: true,
      type: String,
    },
    productUrl: {
      type: String,
      required: true,
    },
    price: {
      required: true,
      type: Number,
    },
    qty: {
      required: true,
      type: Number,
    },
    description: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
