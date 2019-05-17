// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
// Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
// The area code is required. If the country code is provided, you must confirm that the country code is 1.
// Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {

var regex = / ^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

return regex.test(str);
}
telephoneCheck("555-555-55555");

// ^ denotes the beginning of the string.
// (1\s?)? allows for “1” or “1 ” if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, 
// or three digits by themselves with no parentheses.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex 
// to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
// Lastly, I use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.
