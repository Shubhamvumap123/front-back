const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  image: { type: String, required: true },
  price: { type: Number, required: false },
  brand: { type: String, required: true },
  color: { type: String, required: true },
});
 
const Product = new mongoose.model("fb", proSchema);

module.exports = Product
