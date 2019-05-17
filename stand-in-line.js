// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
arr.push(item);
var removed = arr.shift();
return removed;
