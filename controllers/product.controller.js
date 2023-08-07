const Product = require("../models/product.model");

// Get all videos
const getProductLists = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a video
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Post a product
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Edit a product
const editProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ message: "Product edited successfully", product });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProductLists,
  getProduct,
  postProduct,
  editProduct,
  deleteProduct,
};
