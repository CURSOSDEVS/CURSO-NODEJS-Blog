//importando o express
const express = require('express');
//criando instância
const app = express();


//criando rota principal
app.get('/',(req,res)=>{
    res.send("Bem vindo ao meu site");
});

//iniciando a aplicação
app.listen(8080,()=>{
    console.log("O servidor está rodando!");
});