something in somethingsItems
var arvores=new Array("pau-brasil","loureiro","cedro",'carvalho','sincômoro');
0 in arvores;
3 in arvores;
6 in arvores;
"cedro" in arvores;//retorna falso por não ter o indice do array
"length" in arvores;
//pre definidos
"PI" in Math;
var minhaString=new String("coral");
"length" in minhaString;


//objetos com perzonalização

var meucarro={marca:Honda,modelo:"Accord",ano:1998};
"marca" in meucarro;
"modelo" in meucarro;
// Instaceof
objeto instanceof tipoobjeto
var dia=new Date(2018,12,17);
if(dia instanceof Data){

}