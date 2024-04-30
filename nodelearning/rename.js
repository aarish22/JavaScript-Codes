const fs=require('fs');
fs.rename("output2.txt","output1.txt",err=>{
    if(err){
        return console.log(err);
    }
    console.log("Renamed Successfully");
})