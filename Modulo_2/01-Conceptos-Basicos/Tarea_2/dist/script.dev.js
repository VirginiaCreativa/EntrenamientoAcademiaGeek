"use strict";

var CalcularSalario;
var TotalSalario = 0;
var addNombre = document.querySelector('.formSalary_addNombre');
var addHoraPago = document.querySelector('.formSalary_addHoraPago');
var addHorasTrabajadas = document.querySelector('.formSalary_addHorasTrabajadas');
var addTotalSalario = document.querySelector('.formSalary_addTotalSalario');
var queryNombre = prompt('Cuál es nombre del empleado?');
var queryPago = prompt('Cuantos hora pago?');
var queryHorasTrabajadas = prompt('Cuantas horas trabajadas?');
CalcularSalario = Number(queryPago) * Number(queryHorasTrabajadas);
addNombre.innerHTML = queryNombre;
addHoraPago.innerHTML = queryPago;
addHorasTrabajadas.innerHTML = queryHorasTrabajadas;
addTotalSalario.innerHTML = CalcularSalario;
console.log(CalcularSalario);