const numbers = [1, 2, 3, 4, 5];

let evenNumber = numbers.filter((e) => e % 2 == 0);
console.log(evenNumber);

let multiply = numbers.map((e) => e * 2);
let squre = numbers.map((e) => e ** 2);
let qube = numbers.map((e) => e ** 3);
console.log(multiply);

const full_name = ["Monkey", "D", "Luffy"];

const [firstname, middle_name, last_name] = full_name;
console.log(firstname);
console.log(middle_name);
console.log(last_name);

const person = {
  'name': "swadesh",
  age: 24,
  isPresent: true,
  subjects: ["Math", "Computer"],
};

console.log(person['name']);


function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("John");  


//* Spread Operators 

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];

console.log(moreNums); 


const newPerson = {
  ...person,
  role: "Backend Developer",
  salery: '6LPA'
}
console.log(newPerson);



//* Rest Operator 

function logAll(...values) {
  console.log(values);
}

logAll(1, 2, 3, 4);


