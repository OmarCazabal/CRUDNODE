const express = require('express');
const router = express.Router(); 

const conexion = require('./database/db'); 

router.get('/', (req, res)=>{
    conexion.query('select * from videogames',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results}); 
        }
    })
}); 

//Ruta para crear registros 
router.get('/create', (req, res)=>{
    res.render('create.ejs')
});


//Ruta para editar registros
router.get('/edit/:id_videogames', (req, res)=>{
    const id = req.params.id_videogames; 
    conexion.query('SELECT * FROM videogames WHERE id_videogames=?',[id],(error, results)=>{
        if(error){
            throw error; 
        }else{
            res.render('edit', {videogames:results[0]}); 
        } 
    })

});

//Ruta para eliminar el registro
router.get('/delete/:id_videogames', (req, res)=>{
    const id = req.params.id_videogames; 
    conexion.query('delete from videogames where id_videogames = ?', [id], (error, results)=>{
        if(error){
            throw error; 
        }else{
            res.redirect('/'); 
        } 
    })
});


const crud = require('./controllers/crud');
router.post('/save', crud.save); 
router.post('/update', crud.update);




module.exports = router; 
