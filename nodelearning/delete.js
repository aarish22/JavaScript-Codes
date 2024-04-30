const fs=require('fs');
fs.unlink("delete.txt", err=>{
    if(err){
        return console.log(err);
    }
    console.log("Deleted Successfully");
})