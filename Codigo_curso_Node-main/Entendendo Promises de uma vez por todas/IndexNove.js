const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath='./Entendendo Promises de uma vez por todas/Img/'

const readFileAsync = promisify(fs.readFile)

function read (index) {
  return readFileAsync(path.resolve(basePath, `s${1}.txt`), { encoding: 'utf-8' })
}

function start (index, max) {
  if (index > max) return
  read(index).then((data) => {
    console.log(data, '\n')
    start(index + 1, max)
  })
}

start(1, 4)