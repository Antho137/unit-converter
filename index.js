const inputUnit = document.getElementById("input-unit");
const conversionBth = document.getElementById("conversion-btn");
const meterToFeet = 1 * 3.2808;
const literToGallon = 1 * 3.7853;
const kiloToPound = 1 * 2.2046;
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

conversionBth.addEventListener("click", function() {
    length.innerHTML = (inputUnit.value +  ' meters = ' + (inputUnit.value * meterToFeet).toFixed(3) + ' feet | ' + inputUnit.value + ' feet = ' + (inputUnit.value / meterToFeet).toFixed(3) + ' meters');

    volume.innerHTML =  (inputUnit.value +  ' liters = ' + (inputUnit.value / literToGallon).toFixed(3) +  ' gallons | ' + inputUnit.value + ' gallons = ' + (inputUnit.value * literToGallon).toFixed(3) + ' liters');
    
    mass.innerHTML = (inputUnit.value +  ' kilos = ' + (inputUnit.value * kiloToPound).toFixed(3) +  ' pounds | ' + inputUnit.value + ' pounds = ' + (inputUnit.value / kiloToPound).toFixed(3) + ' kilos');
})