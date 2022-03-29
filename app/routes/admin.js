module.exports=function(app){
		app.get('/formularioinclusaonoticia',(req,res)=>{
			res.render('admin/form_add_noticia.ejs');
		});
}//renderizar os dados da pasta admin na tela do formulário noticias