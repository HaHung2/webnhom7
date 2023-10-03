const productModal = require("../models/productModel");

exports.getAllProduct = async (req, res) => {
  try {
    const products = await productModal.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOneProduct = async (req, res) => {
  const { productName, productPrice, productImg } = req.body;
  try {
    console.log(req.body);
    const product = new productModal({ productName, productPrice, productImg });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOneProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, price, img } = req.body;
  try {
    const product = await productModal.findByIdAndUpdate(
      id,
      { productName, price, img },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModal.findByIdAndRemove(id);
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    res.json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
