const express = require("express");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();
const PostController = require("../controllers/postController");
const fileMiddleWare = require("../middleware/file");

router.post("", checkAuth, fileMiddleWare, PostController.createPost);

router.put("/:id", checkAuth, fileMiddleWare, PostController.upatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPostById);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;