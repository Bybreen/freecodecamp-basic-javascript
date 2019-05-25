// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Objecgt.create(Animal.prototype);
Dog.prototype = Object.creat(Animal.prototype);

let duck = new Bird();
let beagle = new Dog();
