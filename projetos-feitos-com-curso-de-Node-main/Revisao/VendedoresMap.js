var vencedores = [
    {
        nome : "João",
        pontos : 10
    },
    
    {
        nome : "Pedro",
        pontos : 9
    },
    {
        nome : "Pedro",
        pontos : 7
    },
    {
        nome : "Carlos",
        pontos : 9
    },
    {
        nome : "Linda",
        pontos : 7
    }
 ];
 
 var podioPorPontuacao= vencedores.map(function(item, indice){
    return item.pontos>7;
 });
 console.log(podioPorPontuacao);