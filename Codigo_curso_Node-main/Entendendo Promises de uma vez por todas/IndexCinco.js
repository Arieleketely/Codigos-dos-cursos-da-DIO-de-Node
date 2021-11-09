const fs=require('fs')
const path=require('path')
const basePath='./Entendendo Promises de uma vez por todas/Img/'
const { promisify}=require('util')
const readFileAsync=promisify(fs.readFile)
console.log('Begin')
// Take all files in the directory
readFileAsync(path.resolve(basePath, '1.txt'), { encoding: 'utf-8' })
.then(console.log)
.catch(console.error)
.then(()=>console.log('xpto'))
console.log('End')