const Video = require("../models/video.model");
const Product = require("../models/product.model");
const Comment = require("../models/comment.model");

// Get all videos
const getVideoLists = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a video
const getVideoDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const products = await Video.findById(id).populate("products");
    return res.status(200).json({ video, products });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get product by video
const getProductsFromVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id).populate("products");
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json(video.products);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get comment by video
const getCommentsFromVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const comments = await Comment.find({ video: video._id });
    return res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Post a video
const postVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Post a comment from a video by id
const postCommentFromVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, comment } = req.body;
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    const newComment = await Comment.create({
      video: id,
      username,
      comment,
    });

    await newComment.save();
    return res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Edit a video
const editVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a video
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndDelete(id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res
      .status(200)
      .json({ message: "Video deleted successfully", video });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getVideoLists,
  getVideoDetails,
  postVideo,
  editVideo,
  deleteVideo,
  postCommentFromVideo,
  getProductsFromVideo,
  getCommentsFromVideo,
};
