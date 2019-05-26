
// Prepare 27 cups of green tea and 13 cups of black tea and store them in 
// tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 

/**
* A long process to prepare green tea.
* @return {string} A cup of green tea.
**/
const prepareGreenTea = () => 'greenTea';

/**
* Get given number of cups of tea.
* @param {function():string} prepareTea The type of tea preparing function.
* @param {number} numOfCups Number of required cups of tea.
* @return {Array<string>} Given amount of tea cups.
**/
const getTea = (prepareTea, numOfCups) => {
 const teaCups = [];

 for(let cups = 1; cups <= numOfCups; cups += 1) {
   const teaCup = prepareTea();
   teaCups.push(teaCup);
 }

 return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // :)
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); // :)

console.log(
 tea4GreenTeamFCC,
 tea4BlackTeamFCC
);
