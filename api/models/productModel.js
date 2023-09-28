const mongoose = require("../config/mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    img: String
});

// Tạo model dựa trên schema
const product = mongoose.model("Product", productSchema);

module.exports = product;
