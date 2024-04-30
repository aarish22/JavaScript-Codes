let btn1=document.querySelector("#btn1");

btn1.onclick=() =>{
    console.log("Button was Clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You hovered over div");
}

btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked- Handler 1");
});

btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked- Handler 2");
});


const handler3 = ()=>{
    console.log("Button 1 was clicked- Handler 3");
};


btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked - Handler 4");
});

btn1.removeEventListener("click",handler3);