function greet(){
    return function(){
        console.log("Hello World");
    }
}

const result=greet();
result();