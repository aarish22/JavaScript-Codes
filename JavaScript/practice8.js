function isVowel(str){
    str=str.toLowerCase();
    let count = 0;
    for (const vow of str){
        if(vow==="a" || vow==="e" || vow==="i" || vow==="o" || vow==="u"){
            count++;
        }
    }
  return count;
};

let str = prompt("Enter a string:");
console.log(isVowel(str));

//arrow function

isvowel = (str) =>{
    str=str.toLowerCase();
    let count = 0;
    for (const vow of str){
        if(vow==="a" || vow==="e" || vow==="i" || vow==="o" || vow==="u"){
            count++;
        }
    }
  return count;
};
