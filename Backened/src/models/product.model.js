const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
    
  "id": { type: Number, required: false },
  "img":  { type: String, required: true },
  "type": { type: String, required: true },
  "color":{ type: String, required: true },
  "year": { type: Number, required: true }
});
 
const Product = mongoose.model("product", proSchema);

module.exports = Product