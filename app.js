const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

// Setup mongoose
const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database connected");
});

// Middleware to parse json
app.use(express.json());

// Import routes
const videoRoutes = require("./routes/video.routes"); // video routes
const productRoutes = require("./routes/product.routes"); // product routes

app.use("/videos", videoRoutes);
app.use("/products", productRoutes);

// Run server
app.listen(3000, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
