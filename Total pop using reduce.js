const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
     
  //Filter the population values
let pop = (n) => {
let value = n.population;
return value;
}
let totalPopulation = arr.filter(pop);
console.log(totalPopulation);
// Print the total population of countries using reduce function  
    let finalPop = (pop1,pop2) => {
        let totalPop = pop1 + pop2;
        return totalPop;
    }
    let finalPopulation = totalPopulation.reduce(finalPop);
    console.log(finalPopulation);
}





 

