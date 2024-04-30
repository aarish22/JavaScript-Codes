const fs = require('fs');

// Code to read the content from a file
fs.readFile('input.txt', (err, content) => {
    if (err) {
        return console.log(err);
    }
    console.log("Read content is: " + content);
});
console.log("Hello from last!!")


// Code to write a file

fs.writeFile('output.txt',"Hello Students", err=> {
    if (err){
    return console.log(err);}
    console.log("Written Succesfully");
})

console.log("Last line");
