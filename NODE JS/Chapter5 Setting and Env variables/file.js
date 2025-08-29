
const fs=require('fs');


const filedata=fs.readFileSync('./.env').toString();
filedata.split('\n').forEach(line=>{
    const [key,value]=line.split('=');
    process.env[key]=value;
    console.log(`${key} : ${value}`);
})


