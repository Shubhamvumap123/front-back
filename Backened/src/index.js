const express = require("express");
const app = express();
const Procontroller = require("./controller/product.controller")


app.use(express.json());

app.use("/carpro", Procontroller);



module.exports=app;