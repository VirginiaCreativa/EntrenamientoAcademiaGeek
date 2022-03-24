let queryCalcNum1 = prompt('Dame número');
let queryCalcNum2 = prompt('Dame otro número');

let addNum1 = document.querySelectorAll('.calc_box .calc_num1');
let addNum2 = document.querySelectorAll('.calc_box .calc_num2');

addNum1.forEach((i) => {
  i.innerHTML = queryCalcNum1 || 0;
});
addNum2.forEach((i) => {
  i.innerHTML = queryCalcNum2 || 0;
});
