"use strict";

var queryCalcNum1 = prompt('Dame número');
var queryCalcNum2 = prompt('Dame otro número');
var addNum1 = document.querySelectorAll('.calc_box .calc_num1');
var addNum2 = document.querySelectorAll('.calc_box .calc_num2');
addNum1.forEach(function (i) {
  i.innerHTML = queryCalcNum1 || 0;
});
addNum2.forEach(function (i) {
  i.innerHTML = queryCalcNum2 || 0;
});