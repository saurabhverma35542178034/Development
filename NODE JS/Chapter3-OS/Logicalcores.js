// In node Js we cannot see Cores but we can see Logical cores only

const os = require('os');
const logicalCores = os.cpus().length;
console.log(`Logical CPU cores: ${logicalCores}`);



