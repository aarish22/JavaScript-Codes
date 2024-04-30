const fs=require('fs');
fs.copyFile('output.txt','input.txt',err=>{
    if(err){
        return console.log(err);
    }
    console.log("Copied Successfully");
});