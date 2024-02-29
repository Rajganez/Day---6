const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
     
  //Get all the population values
let arr1 = [];
arr.forEach(val => {
let population1 = val.population;
arr1.push(population1);
});


// Print the total population of countries using reduce function  
    let finalPop = (pop1,pop2) => {
        let totalPop = pop1 + pop2;
        return totalPop;
    }
    let finalPopulation = arr1.reduce(finalPop);
    console.log(finalPopulation);
}





 

