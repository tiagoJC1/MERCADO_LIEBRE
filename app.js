const express = require('express');
const app = express();
const path = require('path');

const port = 3031;

app.use(express.static('public'));


app.get('/', (req,res) =>
res.sendFile(path.join(__dirname,'/views/home.html')));

app.get('/register', (req,res) =>
res.sendFile(path.join(__dirname,'/views/register.html'))); 

app.get('/login', (req,res) => 
res.sendFile(path.join(__dirname,'/views/login.html')));


app.get("/register", (req, res) => {
  res.redirect('/register');
});
app.get("/home", (req, res) => {
    res.redirect('/');
  });



// app.get("/login", (req, res) => {
//     res.redirect('/login');
//   });  

app.listen(port , () =>
console.log(`http://localhost:${port}`));