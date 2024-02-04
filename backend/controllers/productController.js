const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsuncErrors = require("../middleWare/catchAsyncError");

// create Product
exports.createProduct = catchAsuncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get all product
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ success: true, products });
};

// updateProduct

exports.updateProduct = catchAsuncErrors( async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
})

// delete

exports.deleteProduct = catchAsuncErrors( async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Delete",
  });
})

// product details
exports.getProductDetails = catchAsuncErrors( async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: product,
  });
})
