//conexão
const Sequelize=require('sequelize')
const sequelize=new Sequelize('test','root','',{
    host:"localhost",
    dialect:'mysql'
})
//sequelize.authenticate().then(function(){
  //  console.log("Conectado com sucesso");
//}).catch(function(erro){
   // console.log("erro ao conectar verifique seus dados do Mysql"+erro)
//})
const Postagem=sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    CONTEUDO:{
        type:Sequelize.TEXT
    },
})
//Postagem.sync({force:true})
const Usuario=sequelize.define('usuario',{
    nome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
telefone:{
        type:Sequelize.STRING
    },
})
//Usuario.sync({force:true})
const Evento=sequelize.define('evento',{
    nome:{
        type:Sequelize.STRING
    },
    data:{
        type:Sequelize.DATE
    },

})
Evento.sync({force:true})
const Coordenador=sequelize.define('Coordenador',{
    nome:{
        type:Sequelize.STRING
    },
    telefone:{
        type:Sequelize.STRING
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    },
})
//INSERT INTO `coordenadors` (`id`, `nome`, `telefone`, `cidade`, `estado`) VALUES (1,'1', '1', '1', '2020-11-16');
Coordenador.sync({force:true})
Coordenador.create({
nome:"Ariele",
telefone:"2332343",
cidade:"sdgshgdsh",
estado:"fds"
})