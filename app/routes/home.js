module.exports=function(app){
		app.get('/',function(req,res){
			res.render('home/index.ejs');
		});
}//renderizar a tela de home com uma função de res