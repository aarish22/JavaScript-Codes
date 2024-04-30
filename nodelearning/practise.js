const http=require("http");
const server =  http.createServer((req,res) => {
    if(req.url == '/hello'){
        res.end("Hello World");
    } 
    else if (req.url=='/welcome'){
        res.end("Welcome Back");
    }
    else{
        res.writeHead("Error 404");
        res.end("You are typing the wrong url");
    }
});

server.listen(8000,()=>{
    console.log("Server Started");
});
server.close(() =>{
    console.log("Server Closed");
});


