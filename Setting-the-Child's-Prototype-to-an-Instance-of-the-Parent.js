function Animal() {}

Animal.prototype = {
constructor: Animal,
eat.function() {
console.log("nom nom nom");
}
};
function Dog() {}

Dog.prototype = Object.prototype(Animal.prototype);

let beagle = new Dog();
beagle.eat(); // print "nom nom nom"
