// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const port = 3000;

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.static('public'));
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'src/views')); // Define la ubicación de la carpeta de las Vistas



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const otherRouter = require('./src/routes/other.routes'); 
const productosRouter = require('./src/routes/products.routes');
const adminRoutes = require('./src/routes/admin.routes');


app.use('/', otherRouter);
app.use('/productos', productosRouter);
app.use('/admin', adminRoutes)


// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
// app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((req,res,next) => {
  res.status(404).render('other/error')
})

// ************ exports app - dont'touch ************
module.exports = app;

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));


// 1:01:27