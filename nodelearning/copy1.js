const fs=require('fs');
fs.copyFile('hello.txt','output.txt',err=>{
    if(err){
        return console.log(err);
    }
    else{
        return console.log('Done!');
    }
});