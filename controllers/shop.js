

const Product = require('../models/product');

exports.getCart= (req, res, next) => {
   res.render('shop/cart', {
    pageTitle: 'cart Page',
    path: '/cart',
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.getCheckOut= (req, res, next) => {
   res.render('shop/checkout', {
    pageTitle: 'shop products',
    path: '/checkout',
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

//--
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
exports.detindex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

