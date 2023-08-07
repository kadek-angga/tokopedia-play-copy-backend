const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/post", productController.postProduct);
router.get("/", productController.getProductLists);
router.get("/:id", productController.getProduct);
router.put("/edit/:id", productController.editProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
