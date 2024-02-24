const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
   let asia = (n) => {
   let value = n;
   // Get all the countries from Asia continent /region using Filter function
   // if(value.region === "Asia" || value.continents === "Asia" ){  
   //  return value.name.common;
   // }
   // Get all the countries with a population of less than 2 lakhs using Filter function
   // if(value.population < 200000){
   //    return value.name.common;
   // }      
   // }
// let fil = arr.filter(asia);
// console.log(fil);
// Print the total population of countries using reduce function
let totalPopulation = (pop1,pop2) =>{
   return value.pop1;
}
let pop = arr.reduce(totalPopulation,asia);
console.log(pop);

}
}


