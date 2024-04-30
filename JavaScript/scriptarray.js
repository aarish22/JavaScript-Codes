let marks = [22,44,66,88,99];
console.log(marks);
console.log(marks.length);

let heroes = ["Thor","Loki"];
console.log(heroes);


console.log(typeof heroes);
console.log(heroes[1]);
heroes[2] = "Iron Man"
console.log(heroes);

for ( let idx=0; idx < heroes.length ; idx++){
    console.log(heroes[idx]);
}

for (let etl of heroes){
    console.log(etl);
}

console.log(heroes.toString());
