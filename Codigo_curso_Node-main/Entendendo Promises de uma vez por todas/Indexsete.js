
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath='./Entendendo Promises de uma vez por todas/Img/'

const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath, '1.txt'), { encoding: 'utf-8' })
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log('End'))