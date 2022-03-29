const express=require('express');//importação do express
 const app=express();//executar do express
 app.set('view-engine','ejs');//configuração do ejs para as telas
 app.set('views','./app/views');//configuração do diretório da pasta views

 module.exports=app;
 