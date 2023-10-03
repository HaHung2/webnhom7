const mongoose = require("../config/mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    productPrice: String,
    productImg: String
});

// Tạo model dựa trên schema
const productModal = mongoose.model("Product", productSchema);

module.exports = productModal;
