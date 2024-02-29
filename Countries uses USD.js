const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
  let arr1 = [];
    arr.forEach (val => {
    let symbolUsd = val.currencies;
      arr1.push(symbolUsd);
    });
  
  
    let world = (n) => {
   let value = n;
   if(value === "USD"){ 
   return value.currencies;
   }
}
let sym = arr1.filter(world);
  console.log(sym);
}





    