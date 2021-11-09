
var n = [1, 2, 3, 4, 5,6,7,8,9,10]; //vetor que é original

var elevado = n.map(function(valor){
   return Math.pow(valor, 2); //retorna o valor elevado ao quadrado
});
//o map faz surgir um vetor novo com o texte do Math
console.log(elevado); 