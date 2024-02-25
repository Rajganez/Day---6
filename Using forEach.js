const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
   let asia = (n) => {
   let value = n;
   // Print the following details name, capital, flag, using forEach function
   arr.forEach(val => {
    console.log(val.name);
    console.log(val.capital);
    console.log(val.flag);
    });
}
let countries = arr.filter(asia);
console.log(countries);
}






 

