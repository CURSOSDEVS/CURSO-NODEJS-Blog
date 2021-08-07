//importando o express
const express = require('express');
//utilizando o router para carregar as rotas
const router = express.Router();

//criando a rota de categorias
router.get('categories',(rec,res)=>{
    res.send("Rota de categorias");
});

//criando a rota para criar nova categoria
router.get('/admin/categories/new',(req,res)=>{
    res.send('Rota para criar nova categoria');
});

//exportando o router
module.exports = router;