let newEl = document.createElement("button");

newEl.innerText = "Click Me!!";
newEl.style.color ="white";
newEl.style.backgroundColor ="red"
document.querySelector("body").prepend(newEl);


let para = document.querySelector("p");
para.classList.add("newClass")  // in set attribute it overwrites the previous class