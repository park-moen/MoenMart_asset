const express = require('express');
const { Product } = require('../models');

const router = express.Router();

router.get('./shop', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {}
});

module.exports = router;
