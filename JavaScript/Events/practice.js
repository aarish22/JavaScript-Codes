let modebtn = document.querySelector("#mode1");
let curMode ="Light";
let body = document.querySelector("body");

modebtn.addEventListener("click",() =>{
    if(curMode ==="Light"){
       curMode = "dark";
      body.classList.add("dark");
      body.classList.remove("Light");
    }else{
        curMode ="Light";
       body.classList.add("Light");
       body.classList.remove("dark");
    }

console.log(curMode);
});