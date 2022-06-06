const express = require('express');
const { router } = require('..');
const product = require('../models/product.model');

router.get("/carpro", async (req, res) => {
   try {
       const type = req.params;
       
     res.status(200).send();
   } catch (error) {
     console.log("error", error);
   } 
})