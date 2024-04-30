for (let i = 0 ;i <= 5 ; i++){
    console.log("Hello World");
}

// num = prompt("Enter a number:");
// let sum = 0;
// for(let i = 1 ; i <= num ; i++){
//     sum = sum + i;
// }
// let i;
// console.log(i)
// console.log("Sum of first",num,"is",sum);

// for of loop

// let str= "Aarish";
// let size = 0;
// for (let i of str){
//     console.log(i);
//     size++;
// }
// console.log("Sting Size:",size);

let student = {
    name:"Rahul",
    roll:23
};
for ( let key in student){
    console.log(key , student[key]);
}