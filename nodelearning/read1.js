const fs=require('fs');
fs.readFile('hello.txt',(err,content)=>{
   if(err){
    return console.log(err);
   }
   console.log("Content:"+content);
})

fs.writeFile('hello.txt','So Sorry',err=>{
    if(err){
        return console.log(err);
    }
    else{
        return console.log("Written");
    }
})
