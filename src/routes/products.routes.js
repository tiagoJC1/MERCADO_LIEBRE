// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { lista, detalle } = require('../controllers/products');

/*** GET ALL PRODUCTS ***/ 
router.get('/', lista); 

/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id/',detalle); 


module.exports = router;