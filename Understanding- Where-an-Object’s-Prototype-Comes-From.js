// Use isPrototypeOf to check the prototype of beagle

function Dog(name) {
this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(dog); // returns true.
