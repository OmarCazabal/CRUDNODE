const mysql2 = require('mysql2');

const conexion = mysql2.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',  
    database: 'videojuegos'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('Conectado a la BD'); 
})  

module.exports = conexion;  
