const fs=require('fs');

fs.appendFile('hello.txt','\nHey there!',err=>{
    if (err){
        return console.log(err);
    }
    else{
        return console.log("Successfull")
    }
});