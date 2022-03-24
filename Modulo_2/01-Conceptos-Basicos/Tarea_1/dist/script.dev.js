"use strict";

var queryCalcNum1 = prompt('Dame número');
var queryCalcNum2 = prompt('Dame otro número');
var addNum1 = document.querySelectorAll('.calc_box .calc_num1');
var addNum2 = document.querySelectorAll('.calc_box .calc_num2');
var resultSuma = document.querySelector('.calc_result_suma');
var resultReste = document.querySelector('.calc_result_reste');
var resultMultiple = document.querySelector('.calc_result_multiple');
var resultDivision = document.querySelector('.calc_result_division');
addNum1.forEach(function (i) {
  i.innerHTML = queryCalcNum1 || 0;
});
addNum2.forEach(function (i) {
  i.innerHTML = queryCalcNum2 || 0;
});
resultSuma.innerHTML = Number(queryCalcNum1) + Number(queryCalcNum2);
resultReste.innerHTML = Number(queryCalcNum1) - Number(queryCalcNum2);
resultMultiple.innerHTML = Number(queryCalcNum1) * Number(queryCalcNum2);
resultDivision.innerHTML = Number(queryCalcNum1) / Number(queryCalcNum2);