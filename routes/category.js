const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const categoryController = require("../controllers/category.js");


router.get("/:category",wrapAsync(categoryController.category));

module.exports = router;