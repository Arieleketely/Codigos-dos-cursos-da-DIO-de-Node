const uniqueId=Symbol('oi');
const uniqueId2=Symbol('oi');
console.log(uniqueId===uniqueId2);
function* hello(){
    console.log('oi 1');
    yield;
    console.log('oi 2');
    yield;
    console.log('Function');
}