const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
   let asia = (n) => {
   let value = n;
   //  Get all the countries with a population of less than 2 lakhs using Filter function
   if(value.population < 200000){
    return value.name.common;
 }
}
let countries = arr.filter(asia);
console.log(countries);
}





    