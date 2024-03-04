const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {

    let arr = JSON.parse(xhr.responseText);
 let usdCountry = arr.filter(val => {
    if(val.currencies && Object.keys(val.currencies).includes('USD')){
    return true;
    }
});
console.log(usdCountry.map(val => val.name.common).join('\n'));
}





    