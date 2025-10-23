
var dishes = ["pasta" , "soup", "crepes"];

console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);

console.log(dishes.length);

dishes.push("sushi");

console.log("I have " + Number(dishes.length) + " favorite dishes");

dishes.splice(1,1);

dishes.sort();

console.log(dishes);

console.log(dishes.length);