const mysql=require('mysql');//requisitar o MYsql
module.exports=function(){
	return mysql.createConnection({
 		host:'localhost' ,
 		user: 'root' ,
 		password: 'ifms' ,
 		database: 'portal_noticias'
 	});
}//Dados para acesso ao Banco de dados