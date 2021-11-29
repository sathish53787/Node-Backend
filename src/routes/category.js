const express = require('express');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, userMiddleware , adminMiddleware } = require("../common-middleware");
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, addCategory );
router.get('/category/getcategory', getCategories );

module.exports = router;