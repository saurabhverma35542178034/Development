// cd "workerProcess"- need to do this to run a code

const {Worker}=require('worker_threads')
new Worker('./a.js')
new Worker('./b.js')
new Worker('./c.js')