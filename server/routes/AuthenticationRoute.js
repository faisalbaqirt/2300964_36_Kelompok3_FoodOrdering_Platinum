const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthenticationController");
const isAuthenticated = require("../middleware/isAuthenticated");
const upload = require("../middleware/multer");

router.post("/register", authController.signUp);
router.post("/login", authController.login);
router.get("/profile", isAuthenticated, authController.profile);
router.put("/profile/:id", isAuthenticated, upload.single("photo"), authController.editProfile);
router.get("/user", authController.getAllUsers)
router.get("/user/:id", authController.getUserById)
router.delete("/user/:id", authController.deleteUser)

module.exports = router;
