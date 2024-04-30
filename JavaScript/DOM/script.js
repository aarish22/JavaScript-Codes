// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + "Wohooo!!!";
let divs = document.querySelectorAll(".box");
// divs[0].innerText ="Unique Value 1";
// divs[1].innerText ="Unique Value 2";
// divs[2].innerText ="Unique Value 3";
let idx=1;
for (let div of divs){
    div.innerText = `Unique Value ${idx}`;
    idx++;
}

let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("class");
console.log(id);


let divy = document.querySelector("div");
div.style.backgroundColor = "green";

let newBtn = document.createElement("button");
newBtn.innerText = "Daba Mujhe!!";
console.log(newBtn);

let diva = document.querySelector("div");
 diva.append(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi,I am under the water</i>";

document.querySelector("body").prepend(newHeading);