// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { buscar, casa } = require('../controllers/other');

router.get('/', casa); 
router.get('/buscar', buscar); 

module.exports = router;
