let total;
let porcentGirl;
let porcentBoy;
let numberGirl = 0;
let numberBoy = 0;

const localGirlNumber = '.card_inform_woman_number';
const localBoyNumber = '.card_inform_man_number';
const localTotalNumber = '.card_inform_total_number';
const chartGirlPorcent = '.card_chart_porcent_woman';
const chartBoylPorcent = '.card_chart_porcent_man';
const resultGirllPorcent = '.card_porcent_woman span';
const resultBoylPorcent = '.card_porcent_man span';

let addNumberGirl = document.querySelector(localGirlNumber);
let addNumberBoy = document.querySelector(localBoyNumber);
let addNumberTotal = document.querySelector(localTotalNumber);

let addPorcentGirl = document.querySelector(chartGirlPorcent);
let addPorcentBoy = document.querySelector(chartBoylPorcent);

let addResultGirllPorcent = document.querySelector(resultGirllPorcent);
let addResultBoylPorcent = document.querySelector(resultBoylPorcent);

let queryGirlNumber = Number(prompt('Ingrese la cantidad de Chicas?'));
let queryBoyNumber = Number(prompt('Ingrese la cantidad de Chicos?'));

porcentGirl = (queryGirlNumber / (queryGirlNumber + queryBoyNumber)) * 100;
porcentBoy = (queryBoyNumber / (queryGirlNumber + queryBoyNumber)) * 100;

addNumberGirl.textContent = queryGirlNumber || numberGirl;
addNumberBoy.textContent = queryBoyNumber || numberBoy;
addNumberTotal.textContent = queryGirlNumber + queryBoyNumber;

addResultGirllPorcent.textContent = `${porcentGirl.toFixed(1)}%` || numberGirl;
addResultBoylPorcent.textContent = `${porcentBoy.toFixed(1)}%` || numberBoy;

// console.log(queryGirlNumber);
// console.log(porcentBoy);

if (queryGirlNumber === 0) {
  addPorcentGirl.style.width = '0%';
} else {
  addPorcentGirl.style.width = `${porcentGirl.toFixed(2)}%`;
}

if (queryBoyNumber === 0) {
  addPorcentBoy.style.width = '0%';
} else {
  addPorcentBoy.style.width = `${porcentBoy.toFixed(2)}%` || '0%';
}
