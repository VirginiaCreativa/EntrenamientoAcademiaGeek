"use strict";

var total;
var porcentGirl;
var porcentBoy;
var numberGirl = 0;
var numberBoy = 0;
var localGirlNumber = '.card_inform_woman_number';
var localBoyNumber = '.card_inform_man_number';
var localTotalNumber = '.card_inform_total_number';
var chartGirlPorcent = '.card_chart_porcent_woman';
var chartBoylPorcent = '.card_chart_porcent_man';
var resultGirllPorcent = '.card_porcent_woman span';
var resultBoylPorcent = '.card_porcent_man span';
var addNumberGirl = document.querySelector(localGirlNumber);
var addNumberBoy = document.querySelector(localBoyNumber);
var addNumberTotal = document.querySelector(localTotalNumber);
var addPorcentGirl = document.querySelector(chartGirlPorcent);
var addPorcentBoy = document.querySelector(chartBoylPorcent);
var addResultGirllPorcent = document.querySelector(resultGirllPorcent);
var addResultBoylPorcent = document.querySelector(resultBoylPorcent);
var queryGirlNumber = Number(prompt('Ingrese la cantidad de Chicas?'));
var queryBoyNumber = Number(prompt('Ingrese la cantidad de Chicos?'));
porcentGirl = queryGirlNumber / (queryGirlNumber + queryBoyNumber) * 100;
porcentBoy = queryBoyNumber / (queryGirlNumber + queryBoyNumber) * 100;
addNumberGirl.textContent = queryGirlNumber || numberGirl;
addNumberBoy.textContent = queryBoyNumber || numberBoy;
addNumberTotal.textContent = queryGirlNumber + queryBoyNumber;
addResultGirllPorcent.textContent = "".concat(porcentGirl.toFixed(1), "%") || numberGirl;
addResultBoylPorcent.textContent = "".concat(porcentBoy.toFixed(1), "%") || numberBoy; // console.log(queryGirlNumber);
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