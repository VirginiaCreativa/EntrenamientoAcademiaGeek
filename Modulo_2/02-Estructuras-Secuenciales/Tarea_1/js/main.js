let total;
let numberGirl = 10;
let numberBoy = 20;

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

addNumberGirl.textContent = numberGirl;
addNumberBoy.textContent = numberBoy;
addNumberTotal.textContent = numberGirl + numberBoy;

addPorcentGirl.style.width = '80%';
addPorcentBoy.style.width = '50%';
