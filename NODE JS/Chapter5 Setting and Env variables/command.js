// const { exec } = require('child_process');

// exec('node -v', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   console.log(`Node version: ${stdout}`);
// });







// const { spawn } = require('child_process');

// const child = spawn('ping', ['-n', '4', 'google.com']); // On Windows, use 'ping -n 4 google.com'

// child.stdout.on('data', (data) => {
//   console.log(`Output: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`Error: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`Process exited with code ${code}`);
// });

const { exec } = require('child_process');
const envvaraible = process.env; // Get the current environment variables


setInterval(()=>{
    console.log(envvaraible.name)
},1000)