// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************

const {  tienda, editar, destruir, actualizar, crear } = require('../controllers/admin');
const { uploadProducts } = require('../middlewares/uploadFiles');

/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', crear); 
router.post('/crear-producto', uploadProducts.single("img"), tienda); 


/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', editar); 
router.put('/editar-producto/:id', uploadProducts.single("img"), actualizar); 


/*** DELETE ONE PRODUCT***/ 
// router.post('/eliminar-producto/:id', destruir); 
router.delete('/eliminar-producto/:id', destruir); 


module.exports = router;
