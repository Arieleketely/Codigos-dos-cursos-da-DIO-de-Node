let n = parseInt(gets());

for( i = 0 ; i<n; i++){
  let texto = gets();
  let  lista = texto.split(' ').sort();//separendo os itens oloquei tudo em uma linha só
  var novaArr = lista.filter(function(este, i) {
    return lista.indexOf(este) === i;
});
  console.log(novaArr.join(" "));
}

