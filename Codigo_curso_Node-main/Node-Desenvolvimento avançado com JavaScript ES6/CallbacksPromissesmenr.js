const pets=[
    {
name:'rex',
type:'dog',
age: 10
},
{
    name:'mial',
    type:'cat',
    age: 2
    },
    {
        name:'gulp',
        type:'fish',
        age: 1
        }
]
const newPets=pets.filter((pet)=>{
    return pet.age<5
})
console.log(pets);


const dogs=pets.filter((pet)=>{
    return pet.type==='dog'
})
console.log(dogs);


const totaldog=dogs.reduce((total, pet)=>{
    return total+pet.age
},0)
console.log(totaldog);
//reduce transforma todos os valores do array em vaor unico
//filter filtra informação de array
//map retorna um array com a mesma quantidade de elementos mas pode modificar o contéudo das posições deste array