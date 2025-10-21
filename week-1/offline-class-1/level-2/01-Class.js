
class Animal {
  constructor(name, legCount, age) {
    this.name = name
    this.legCount = legCount
    this.age = age
  }
  describe() {
    return `${this.name} has ${this.legCount} legs with age ${this.age || 'unknown'}.`;
  }
}
let cat = new Animal("Cat", 4,2);
console.log(cat.describe());

class Dog extends Animal {
  constructor(name, breed,age) {
    super(name, 4,age); // Dogs have 4 legs -> if name or age or other parameters aren't passed to super(), it will be undefined for any Dog instance
    this.breed = breed;
  }
  bark() {
    return `${this.name} says Woof! and the breed is ${this.breed} with age ${this.age}.`;
  }
};
let dog = new Dog("Buddy", "Golden Retriever",3);
let dog2 = new Dog("Max", "Beagle");
console.log(dog.describe());
console.log(dog.bark());
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true 
console.log(cat instanceof Dog); // false
console.log(cat instanceof Animal); // true
console.log(dog2.describe());
console.log(dog2.bark());