const express=require("express");
const app=express();

//app.get("/",function(req,res){
   // res.send("Bem vindo");
//});

app.get("/",function(req,res){
   res.sendFile(__dirname +"/html/index.html");
});
app.get("/sobre",function(req,res){
    res.sendFile(__dirname +"/html/sobre.html");
 });
 
 

app.get("Sobre",function(req,res){
    res.send("Sobre");
})
app.get("Blog",function(req,res){
    res.send("oi Blog ");
})
app.get('/ola/:cargo/:nome',function(req,res){
    res.send(req.params);
})
app.listen(3001,function(){
    console.log("Servidor rodando!")
});