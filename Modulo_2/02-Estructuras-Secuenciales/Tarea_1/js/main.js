let total;
let porcentGirl;
let porcentBoy;
let numberGirl = 0;
let numberBoy = 0;

const localGirlNumber = '.card_inform_woman_number';
const localBoyNumber = '.card_inform_man_number';
const localTotalNumber = '.card_inform_total_number';
const localGirlPorcent = '.card_chart_porcent_woman';
const localBoylPorcent = '.card_chart_porcent_man';

let addNumberGirl = document.querySelector(localGirlNumber);
let addNumberBoy = document.querySelector(localBoyNumber);
let addNumberTotal = document.querySelector(localTotalNumber);

let addPorcentGirl = document.querySelector(localGirlPorcent);
let addPorcentBoy = document.querySelector(localBoylPorcent);

let queryGirlNumber = Number(prompt('Ingrese la cantidad de Chicas?'));
let queryBoyNumber = Number(prompt('Ingrese la cantidad de Chicos?'));

porcentGirl = (queryGirlNumber / (queryGirlNumber + queryBoyNumber)) * 100;
porcentBoy = (queryBoyNumber / (queryGirlNumber + queryBoyNumber)) * 100;

addNumberGirl.textContent = queryGirlNumber || numberGirl;
addNumberBoy.textContent = queryBoyNumber || numberBoy;
addNumberTotal.textContent = queryGirlNumber + queryBoyNumber;

console.log(porcentGirl);
console.log(porcentBoy);

addPorcentGirl.style.width = `${porcentGirl.toFixed(2)}%`;
addPorcentBoy.style.width = `${porcentBoy.toFixed(2)}%`;
