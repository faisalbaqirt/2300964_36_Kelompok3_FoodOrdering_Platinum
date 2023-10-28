const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const ProductController = require("../controllers/ProductController");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post(
  "/",
  isAuthenticated,
  upload.single("image"),
  ProductController.createProduct
);
router.put("/:id", upload.single("image"), ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
