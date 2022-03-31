"use strict";

var total;
var porcentGirl;
var porcentBoy;
var numberGirl = 0;
var numberBoy = 0;
var localGirlNumber = '.card_inform_woman_number';
var localBoyNumber = '.card_inform_man_number';
var localTotalNumber = '.card_inform_total_number';
var localGirlPorcent = '.card_chart_porcent_woman';
var localBoylPorcent = '.card_chart_porcent_man';
var addNumberGirl = document.querySelector(localGirlNumber);
var addNumberBoy = document.querySelector(localBoyNumber);
var addNumberTotal = document.querySelector(localTotalNumber);
var addPorcentGirl = document.querySelector(localGirlPorcent);
var addPorcentBoy = document.querySelector(localBoylPorcent);
var queryGirlNumber = Number(prompt('Ingrese la cantidad de Chicas?'));
var queryBoyNumber = Number(prompt('Ingrese la cantidad de Chicos?'));
porcentGirl = queryGirlNumber / (queryGirlNumber + queryBoyNumber) * 100;
porcentBoy = queryBoyNumber / (queryGirlNumber + queryBoyNumber) * 100;
addNumberGirl.textContent = queryGirlNumber || numberGirl;
addNumberBoy.textContent = queryBoyNumber || numberBoy;
addNumberTotal.textContent = queryGirlNumber + queryBoyNumber; // console.log(queryGirlNumber);
// console.log(porcentBoy);

if (queryGirlNumber === 0) {
  addPorcentGirl.style.width = '0%';
} else {
  addPorcentGirl.style.width = "".concat(porcentGirl.toFixed(2), "%");
}

if (queryBoyNumber === 0) {
  addPorcentBoy.style.width = '0%';
} else {
  addPorcentBoy.style.width = "".concat(porcentBoy.toFixed(2), "%") || '0%';
}