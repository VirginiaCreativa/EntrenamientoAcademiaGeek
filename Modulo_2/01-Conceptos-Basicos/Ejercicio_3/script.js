const yearNow = new Date().getFullYear();
let queryAge = prompt('Cuantos tienes años?');
let $result = document.getElementsByClassName('nacimiento');
let calculeYearBirth;

calculeYearBirth = yearNow - queryAge;
$result[0].innerHTML = `Tienes ${queryAge} años, así que naciste de año es ${calculeYearBirth}`;
console.log(calculeYearBirth);
