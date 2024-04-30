const http=require('http');

const server=http.createServer((req,res)=>{
      if(req.url=='/hello'){
        res.end("Hello World");
      }else if(req.url=='/welcome'){
        res.end("Welcome Hehe");
      }else{
        res.writeHead(404);
        res.end("You are trying to hit awrong url");
      }
});

server.listen(8000, ()=>{
    console.log("Server Started");
});