const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
exports.getAllProduct = catchAsyncError(async (req, res) => {
  const apiFeatures=new ApiFeatures(Product.find(), req.query.keyword)
    const products = await Product.find();
    res.status(200).json({ success: true, products })
}
);
// create product

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
res.status(200).json({ success: true, product });
next();
});

//  Update Product -Admine
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return res
      .status(505)
      .json({ success: false, message: "Product not found" });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAnsModify:false
  });
  res.status(200).json({ success: true, product });
  next();
});

// Delete Product -Admine
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  try{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ success:false,message: 'Product not found' });
    }

    return res.status(200).json({success:true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
  
});

exports.singleProduct= catchAsyncError(async (req, res, next) => {
 
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(product);
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving product' });
    });
});

// module.exports={
//     getAllProduct,
//     createProduct,
// }
