const fs=require('fs');
fs.readFile('input.txt','utf8',(err,content)=>{
    if(err){
        return console.log(err);
    }
    console.log("Read Content: "+content);
    let words=content.split(' ');
    let wordCount=words.length;
    console.log("Total number of words in the file: "+wordCount);
})