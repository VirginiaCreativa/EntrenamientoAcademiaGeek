"use strict";

var leyPulgada = 0.0254;
var conversion;
var addNumberPulgada = 3;
var inputPulgada = document.querySelector('.conversion_form_input');
var btnConversion = document.querySelector('.conversion_form_btnConversion');
var addNumberPulga = document.querySelector('.conversion_result_pulg');
var resultNumberMetro = document.querySelector('.conversion_result_metro');
btnConversion.addEventListener('click', function (e) {
  e.preventDefault();
  conversion = inputPulgada.value * leyPulgada;
  console.log("".concat(conversion.toFixed(4), " m"));
  addNumberPulga.textContent = inputPulgada.value;
  resultNumberMetro.textContent = "".concat(conversion.toFixed(3), " m");
  inputPulgada.value = 0;
});