// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { lista, detalle } = require('../controllers/producs');

/*** GET ALL PRODUCTS ***/ 
router.get('/', lista); 

/*** GET ONE PRODUCT ***/ 
router.get('/detaille/:id/',detalle); 


module.exports = router;