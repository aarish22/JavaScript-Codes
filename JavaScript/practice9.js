arr = [8,6,7,45,5,7,6];
arr.forEach((val)=>{
    newVal = val**2;
    console.log(newVal);
});

arr2 = [6,7,5,8,5,8];
let newArr2 = arr2.map((val) =>{
     console.log(val**2);
});


let evenArr = arr.filter((val)=>{
    return val%2===0;
});

console.log(evenArr);
let reduceArr = arr.reduce((val1,val2)=>{
         return val1+val2;
});

console.log(reduceArr);