console.log("Hello Everyone!!")

function callback(){
    console.log("Hello from callback")
}

setTimeout(callback,2000);  //async

console.log("Hello from final line")