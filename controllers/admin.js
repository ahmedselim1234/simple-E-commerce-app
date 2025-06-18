


const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title,req.body.imgurl,req.body.description,req.body.price);
  //const productimage = new Product(req.body.imgurl);
  product.save();
  //productimage.save();
  res.redirect('/');
};


exports.getproducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Products',
      path: '/admin/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
  // res.render('admin/products', {
  //    prods: products,
  //   pageTitle: 'Products',
  //   path: '/admin/products',
  //    hasProducts: products.length > 0,
  //   formsCSS: true,
  //   productCSS: true,
  //   activeAddProduct: true
  // });
};

