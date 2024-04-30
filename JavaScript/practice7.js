companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.push("Amazon");
companies.splice(2,1,"Ola");
companies.shift();
console.log(companies);