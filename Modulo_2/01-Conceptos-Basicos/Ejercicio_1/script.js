let n1, n2;
let suma = 0;
let $result = document.getElementsByClassName('suma');

n1 = prompt('Ingrese numero 1');
n2 = prompt('Ingrese numero 2');

suma = Number(n1) + Number(n2);

$result[0].innerHTML = `La suma de ${n1 || 0}  + ${n2 || 0} es ${suma}`;
console.log(`La suma de ${n1} + ${n2} es ${suma}`);
