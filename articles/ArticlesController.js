//importando o express
const express = require('express');
//utilizando o router para carregar as rotas
const router = express.Router();

//criando a rota de categorias
router.get('/articles',(rec,res)=>{
    res.send("Rota de artigos");
});

//criando a rota para criar nova categoria
router.get('/admin/articles/new',(req,res)=>{
    res.send('Rota para criar um novo artigo');
});

//exportando o router
module.exports = router;