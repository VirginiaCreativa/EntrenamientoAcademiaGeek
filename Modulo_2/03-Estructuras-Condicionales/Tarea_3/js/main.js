let descuentoClave_1 = 10;
let descuentoClave_2 = 20;

let btnDescuento = document.querySelector('.btnDescuento');
let showResult = document.querySelector('.BoxMarker_Result');
let inputClave = document.querySelectorAll('input[name="form-radio"]');
let inputArticulo = document.querySelector('#Input_Articulo');
let inputPrecio = document.querySelector('#Input_Precio');
let addArticulo = document.querySelector('.BoxComprarResult_Articulo');
let addClave = document.querySelector('.BoxComprarResult_Clave');
let addPrecio = document.querySelector('.BoxComprarResult_Precio');
let addDescuento = document.querySelector('.BoxComprarResult_Descuento');

btnDescuento.addEventListener('click', (ev) => {
  let selectedClave;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      console.log(inputClave[i].value);
      selectedClave = inputClave[i].value;
      break;
    }
  }
  addClave.textContent = selectedClave === 'clave_1' ? 'Clave 1' : 'Clave 2';
  showResult.style.display = 'block';
});

console.log(inputClave);
console.log(btnDescuento);
