//importando o express
const express = require('express');
//criando instância
const app = express();

//importando as rotas dos controllers
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

/**BANCO DE DADOS *************************/
//importando a conexão com o banco de dados
const connection = require('./database/database');

//realizando a autenticação com o banco de dados
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão realizada com sucesso!");
    }).catch((error)=>{
        console.log(error);
    });
/***************************************** */
//dizer para a aplicação utilizar o controller que foi importado
//e poder acessar as rotas que estão definidas no controller
app.use('/',categoriesController);
app.use('/',articlesController);

/***************************************** */
//configurando a view engine
app.set('view engine', 'ejs');

//define que o aplicativo usará arquivos estaticos, informando 
//em que pasta eles se estão localizados. Deve-se criar a pasta
app.use(express.static('public'));
 

//criando rota principal
app.get('/',(req,res)=>{
    res.render('index');
});

//iniciando a aplicação
app.listen(8080,()=>{
    console.log("O servidor está rodando!");
});