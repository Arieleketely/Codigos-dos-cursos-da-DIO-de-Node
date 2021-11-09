
var nome=function(){
    console.log("Alo Mundo!");
}
nome();
setTimeout(nome,5000);


function organizar(numero) {
    console.log(numero);
    entrega(function () {
        console.log("frase", numero);


    });
}
    function entrega(callback) {
        setTimeout(callback, 5000);


}
organizar(1);
organizar(2);
organizar(3);