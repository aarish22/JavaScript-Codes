const fs=require('fs');
fs.appendFile('input.txt',"Hey! How are you?",err=>{
     if(err){
        return console.log(err);
     }
     console.log("Appended Succesfully");
})
