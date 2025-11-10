//* Stack vs heap memory 

//* Stack Memory use -> Primitive Type
let x = 5;
let y = x; 
y = 10;

console.log(x); // 5
console.log(y); // 10


//* Heap Memory Use-> Non primitive Type

let obj1 = { name: "Rohit" };
let obj2 = obj1;

obj2.name = "Aman";

console.log(obj1.name); // "Aman" (changed!)

