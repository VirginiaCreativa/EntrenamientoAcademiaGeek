let leyPulgada = 0.0254;
let conversion;
let addNumberPulgada = 3;

let inputPulgada = document.querySelector('.conversion_form_input');
let btnConversion = document.querySelector('.conversion_form_btnConversion');
let addNumberPulga = document.querySelector('.conversion_result_pulg');
let resultNumberMetro = document.querySelector('.conversion_result_metro');

btnConversion.addEventListener('click', (e) => {
  e.preventDefault();
  conversion = inputPulgada.value * leyPulgada;
  console.log(`${conversion.toFixed(4)} m`);
  addNumberPulga.textContent = inputPulgada.value;
  resultNumberMetro.textContent = `${conversion.toFixed(3)} m`;
  inputPulgada.value = 0;
});
