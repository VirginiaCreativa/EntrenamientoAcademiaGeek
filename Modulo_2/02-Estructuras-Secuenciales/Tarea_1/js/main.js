let total;
let numberGirl = 10;
let numberBoy = 20;

let addNumberGirl = document.querySelector('.card_inform_woman_number');
let addNumberBoy = document.querySelector('.card_inform_man_number');
let addNumberTotal = document.querySelector('.card_inform_total_number');

addNumberGirl.textContent = numberGirl;
addNumberBoy.textContent = numberBoy;
addNumberTotal.textContent = numberGirl + numberBoy;
