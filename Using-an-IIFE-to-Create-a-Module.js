// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
// funModule should return an object.

let isCuteMixin = function(obj) {
obj.isCute = function() {
return true;
};
};

let singMixin = function(obj) {
obj.sing = function() {
console.log("Sing, always");
};
};

let funModule = (function () {
return {
isCuteMisxin: function(obj) {
obj,isCute = function() {
return true;
};
};

singMixin: function(obj) {
obj.sing = function() {
console.log("Sing, always");
};
}
}
}) (); // The two parentheses cause the function to be immediately invoked.
