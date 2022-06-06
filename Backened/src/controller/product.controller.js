const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cardata = await Product.find({}).lean().exec();
    console.log("type", cardata);
    res.status(200).send();
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;