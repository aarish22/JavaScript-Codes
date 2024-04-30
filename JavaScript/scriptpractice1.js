marks = prompt("Enter your marks:");
if (marks < 100 && marks >= 80){
    console.log("Grade A");
}
else if (marks < 80 && marks >= 70){
    console.log("Grade B");
}
else if (marks < 70 && marks >= 60){
    console.log("Grade C");
}
else if (marks < 60 && marks >= 50){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}