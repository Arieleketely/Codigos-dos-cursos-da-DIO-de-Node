//diacordo a https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/ O que map() faz: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. 
var arraynumeros = [7, 2, 3];
var dobronumeros = arraynumeros.map(function(num) {
  return num * 2;
});

console.log(dobronumeros);