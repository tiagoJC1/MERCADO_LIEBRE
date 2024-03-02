// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************

const { crear, tienda, editar, destruir, actualizar } = require('../controllers/admin');

/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', crear); 
router.post('/crear-producto', tienda); 


/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', editar); 
router.put('/editar-producto/:id', actualizar); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/eliminar-producto/:id', destruir); 


module.exports = router;
