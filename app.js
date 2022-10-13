const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({extended:false})); 
 

app.use('/', require('./router.js')); 


app.listen(5000, ()=> {
    console.log('Servidor escuchando en http://localhost:5000');  
}); 

