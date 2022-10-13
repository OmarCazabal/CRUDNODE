const conexion = require('../database/db');
const con = require('../database/db');

exports.save = (req, res)=>{
    const videojuego = req.body.videojuego; 
    const tipo= req.body.tipo; 
    conexion.query('INSERT INTO videogames SET ?',{videojuego:videojuego, tipo:tipo}, (error, results)=>{
        if(error){
            console.log(error); 
        }else{
            res.redirect('/'); 
        }

    }) 
};

exports.update = (req,res)=>{
    console.log("Hola")
    const id = req.body.id_videogames;
    const videojuego = req.body.videojuego; 
    const tipo= req.body.tipo;
    conexion.query('update videogames set ? where id_videogames = ?',[{videojuego:videojuego, tipo:tipo}, id], (error, results)=>{
        console.log(results)
        if(error){
            console.log(error); 
        }else{
            res.redirect('/'); 
        }
    });
};