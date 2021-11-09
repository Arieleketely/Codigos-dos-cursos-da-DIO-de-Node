const promise= new Promise((resolve, reject)=>
    Math.randow()>0.5 ? resolve ('yay'):reject('Opps'))
coinFlip
.then((data)=>console.log(data, '1'))
.catch((data)=>console.log('Erro 1'))
.then(()=>{throw new Error('Error 2')})
.catch((err)=console.log(err.message))
//vai dar erro catch não pode estar cadeado no then ambos retornam promise