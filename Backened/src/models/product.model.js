const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  image: { type: String, required: false },
  price: { type: Number, required: false },
  brand: { type: String, required: false },
  color: { type: String, required: false },
});
 
const Product = new mongoose.model("fb", proSchema);

module.exports = Product
