const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const type = await Product.find({}).lean().exec();
    console.log("type", type);
    res.status(200).send();
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;