let queryCalcNum1 = prompt('Dame número');
let queryCalcNum2 = prompt('Dame otro número');

let addNum1 = document.querySelectorAll('.calc_box .calc_num1');
let addNum2 = document.querySelectorAll('.calc_box .calc_num2');
let resultSuma = document.querySelector('.calc_result_suma');
let resultReste = document.querySelector('.calc_result_reste');
let resultMultiple = document.querySelector('.calc_result_multiple');
let resultDivision = document.querySelector('.calc_result_division');

addNum1.forEach((i) => {
  i.innerHTML = queryCalcNum1 || 0;
});
addNum2.forEach((i) => {
  i.innerHTML = queryCalcNum2 || 0;
});

resultSuma.innerHTML = Number(queryCalcNum1) + Number(queryCalcNum2);
resultReste.innerHTML = Number(queryCalcNum1) - Number(queryCalcNum2);
resultMultiple.innerHTML = Number(queryCalcNum1) * Number(queryCalcNum2);
resultDivision.innerHTML = Number(queryCalcNum1) / Number(queryCalcNum2);
