let totalNotas;
let n1 = 4.3;
let n2 = 3.5;
let n3 = 2.8;
let getShow = document.getElementsByClassName('notas_total');

let calcularNotas = (n1 + n2 + n3) / 3;
// calcularNotas.Number().slice(0, 2);
// console.log(calcularNotas.toFixed(2));

getShow[0].innerHTML = `Tus notas de ${n1}, ${n2} y ${n3}. Total son ${calcularNotas.toFixed(
  2
)}`;
