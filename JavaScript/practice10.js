marks = [44,56,88,66,99];
let newArr = marks.filter((val)=>{
    if (val >= 90){
        return val;
    } 
});
console.log(newArr)

// 2nd Question

input = prompt("Enter n:");
arr =[];
for (let i =1 ; i <= input ; i++){
    arr.push(i);
};
reduceSum = arr.reduce((val1,val2)=>{
    return val1 + val2;
})
reduceMult = arr.reduce((val1,val2)=>{
    return val1 * val2;
})
console.log(arr);
console.log(reduceMult);
console.log(reduceSum);