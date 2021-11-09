
const db = require('./_database')
//conecta no banco e deleta AS TABELAS CRIADAS COLOQUE SEMPRE O CASCADE PARA DELETAR DEPEDENCIAS
async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE evento CASCADE`)
  await db.query(`DROP TABLE participante CASCADE`)
  await db.query(`DROP TABLE evento_participante CASCADE`)
  await db.end()
//ENCERRANDO
  console.log("Tabelas removidas");
}

dropTables()

