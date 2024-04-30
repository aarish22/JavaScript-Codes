let arr = [85,97,44,37,76,60];
let sum = 0;
for (let i in arr){
    sum = sum + arr[i];
}
let average = (sum/arr.length) ;
console.log(average);

// 2nd Question

items = [250,645,300,900,50];

for (let i in items){
    discountPrice = items[i] - (10/100)*items[i];
    console.log(discountPrice);
}