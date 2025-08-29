const fs = require('fs')


fs.writeFileSync('./1.What is Backend.txt', 'I am Over ride the Content')
fs.appendFileSync('./1.What is Backend.txt', 'I am Appending new Content')

const data=fs.readFileSync('./1.What is Backend.txt').toString();
console.log(data);



// WRITE FILE SYNC - IS SYNCHRONUS - BLOCKING
// WRITEFILE - IS ASYNC - NON BLOCKING



