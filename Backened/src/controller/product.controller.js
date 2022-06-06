const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get("", async (req, res) => {

  try {
const {from} = req.query || 0;
const {to} = req.query;

    const {sort} = req.query;
    let price ;
    if(sort){
if(sort === "price_asc"){
  price = 1;
}else if(sort === "price_desc"){
  price = -1;
}
    }

    const Cardata = await Product.find({
      $and: [{ price: { $gte: from } }, { price: { $lte: to } }],
    })
      .sort({ price: price })
      .lean()
      .exec();

       const PAGE_SIZE = 10;
  const page = (req.query.page || "0");
  const total = await Product.countDocuments({});
  const posts = await Product.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    posts,
  });
  console.log("type", Cardata);
   return res.status(200).send({Cardata: Cardata});

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