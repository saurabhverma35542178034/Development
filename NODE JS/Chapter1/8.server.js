const http =require('http');

const server= http.createServer((req,res)=>{
   console.log(res);
   res.end("Server is built");
   
});

server.listen(3000);