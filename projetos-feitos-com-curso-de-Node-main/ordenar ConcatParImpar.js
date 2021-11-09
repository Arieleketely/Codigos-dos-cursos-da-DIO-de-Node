const n = parseInt(gets());
let vetor = [];
let i;
for(i = 0; i < n ; i++){
    vetor[i] = parseInt(gets());
}

var pares = vetor.filter(x => {
    if(x%2 == 0)
        return x
}).sort((a,b) => a-b)
const impares = vetor.filter(x => {
    if(x%2 != 0)
        return x
}).sort((a,b) => b-a)

var arr = pares.concat(impares);

console.log(arr.join("\n"))