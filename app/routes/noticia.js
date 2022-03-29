module.exports=function(app){
	app.get('/noticias',function(req,res){
 	const dbConnection=require('../../config/dbConnection');//importação módulo mysql
 	const connection=dbConnection();		 	
connection.query('select * from noticias ', function(error,result){
      if(error){
           console.log(error);
       }//Comando caso dê erro
       //res.send(result);
       
       res.render('noticias/noticias.ejs', {noticias:result});
       //renderização da tela noticia.ejs
       }); 	
 
 });
}
