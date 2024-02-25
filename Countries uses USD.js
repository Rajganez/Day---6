const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let arr = JSON.parse(xhr.responseText);
  let world = (n,i) => {
   let value = i;
   if(value === "$"){ 
   return n.common;
   }
}
let sym = arr.filter(world);
  console.log(sym);
}





    