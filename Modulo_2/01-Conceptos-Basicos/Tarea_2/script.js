let CalcularSalario;
let TotalSalario = 0;
let addNombre = document.querySelector('.formSalary_addNombre');
let addHoraPago = document.querySelector('.formSalary_addHoraPago');
let addHorasTrabajadas = document.querySelector(
  '.formSalary_addHorasTrabajadas'
);
let addTotalSalario = document.querySelector('.formSalary_addTotalSalario');

let queryNombre = prompt('Cuál es nombre del empleado?');
let queryPago = prompt('Cuantos hora pago?');
let queryHorasTrabajadas = prompt('Cuantas horas trabajadas?');

CalcularSalario = Number(queryPago) * Number(queryHorasTrabajadas);
addNombre.innerHTML = queryNombre || 'desconocido';
addHoraPago.innerHTML = `$ ${queryPago || 0}`;
addHorasTrabajadas.innerHTML = queryHorasTrabajadas || 0;

let BilleteCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
}).format(CalcularSalario);
console.log(BilleteCOP);

addTotalSalario.innerHTML = BilleteCOP;

console.log(CalcularSalario);
