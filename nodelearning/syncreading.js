const fs= require('fs') 
const content =fs.readFileSync('input.txt');
console.log("Read Content:"+content);

console.log("Hello");


fs.writeFileSync('output2.txt',"Hello Students Again");
console.log("Hehe");