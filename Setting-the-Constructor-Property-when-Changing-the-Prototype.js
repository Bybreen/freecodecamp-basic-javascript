// Define the constructor property on the Dog prototype.

function Dog(name) {
this.name = name;
}

Dog.prototype = {
constructor: Dog // this defines the constructor property
numLegs: 4,
eat: function() {
console.log("nom nom nom");
},
describe: function() {
console.log("This is my name " + this.name);
}
};
