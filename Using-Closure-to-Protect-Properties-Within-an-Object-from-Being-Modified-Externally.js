// Change how weight is declared in the Bird function so it is a private variable. 
// Then, create a method getWeight that returns the value of weight.

function Bird() {
let weight = 15; // private property

this.getWeight = function() {// publicly available method that a bird can use
return weight;
};
}