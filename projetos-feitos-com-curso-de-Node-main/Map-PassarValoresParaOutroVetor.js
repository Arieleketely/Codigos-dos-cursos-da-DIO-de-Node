var arraynumeros = [1,2,3,4,5,6,7,8,9,10];
var par=0;

var dobronumeros = arraynumeros.map(function(num) {
par=par+1;
    if(num % 2 == 0){

console.log(par);
    
    }
});

console.log(par);