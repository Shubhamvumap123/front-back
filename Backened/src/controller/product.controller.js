const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

router.get("", async (req, res) => {

  try {
const from = req.query.from || 0;
const to = req.query.to;
    const sort = req.query.sort;
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

      let pagedata = Math.ceil(Cardata.length/10)
  console.log("type", Cardata);
   return res.status(200).send({ pagedata: pagedata , Cardata: Cardata});

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