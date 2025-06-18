const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
//const cartController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.detindex);

//cart
router.get("/cart", shopController.getCart);

//products
router.get("/products", shopController.getProducts);
router.get("/checkout", shopController.getCheckOut);

module.exports = router;
