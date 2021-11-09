var soma=function(a,b){
    return a+b;
};
//Nova forma Arrow
console.log("soma");
const sum = (a, b) => a + b;

console.log("Soma"+sum(2,2));

//passando valores não funciona com ArrowFunctions
oi('oi');
function oi(value){
    console.log(value);
}
function multiplicar(a,b){
if(typeof b==='undefined'){
    b=1;
}
    return a*b;
}
console.log(multiplicar(5));



function multiplicardois(a,b=1){
    return a*b;
}
console.log(multiplicardois(2));


//lazy evaluation
function randomNumber(){
    return Math.randow()*10;
}

function multiply(a,b=randomNumber()){
    return a*b;
}
console.log(multiply(5));
var prop1='este curso esta sendo feito na Digital one';
var obj={
    prop:prop1
};
console.log(obj);
//rest operator
function somar(...args){
    return args.reduce((acc,value)=>acc+value, 0);
}
console.log("Resultado:"+somar(1,1,1,1,1));
const objeto1={
    test:123,
    subObj:{
        test:12
    }
};
const obj2={...obj,subObj:{...obj.subObj}};
obj.subObj.test=456;
console.log("resultado"+obj);