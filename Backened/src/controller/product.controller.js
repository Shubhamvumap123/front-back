const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const Cardata = await Product.find().lean().exec();
  console.log("type", Cardata);
   return res.status(200).send({cardata:Cardata});
      
  } catch (error) {
    console.log("error", error);
  }
});

router.post("", async (req, res) => {
  try {
    const Cardata = await Product.create(req.body);
    console.log("type", Cardata);
    return res.status(200).send({ cardata: Cardata });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;