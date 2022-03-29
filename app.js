const app=require('./config/server.js');
const rotaHome=require('./app/routes/home')(app); //Constantes de rotas para cada aba da pasta app
const rotaAdmin=require('./app/routes/admin')(app);//Constantes de rotas para cada aba da pasta app
const rotaNoticias=require('./app/routes/noticia')(app);//Constantes de rotas para cada aba da pasta app

 
 //Rodando o servidor na porta 3000
 app.listen('3000',function(){
 	console.log('Servidor rodando na porta 3000');
 });