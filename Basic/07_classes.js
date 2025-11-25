class User {
  constructor(name = "Unknown", age = 0, profession = "Unemployed") {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  static introduce() {
    return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`;
  }
  
}


console.log(User.introduce());


const person = new User('swadesh',24,'Software Engineer')
console.log(person);
