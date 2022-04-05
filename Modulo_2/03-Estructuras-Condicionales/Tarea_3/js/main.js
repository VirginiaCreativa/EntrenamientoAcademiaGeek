let descuentoClave_1 = 10;
let descuentoClave_2 = 20;
let addArticulo;
let addPrecio;

const localArticulo = '.BoxComprarResult_Articulo';
const localPrecio = '.BoxComprarResult_Precio';
const localClave = 'input[name="form-radio"]';
const buttonDescuento = '.btnDescuento';
const showMarkerResult = '.BoxMarker_Result';

let inputClave = document.querySelectorAll(localClave);
let btnDescuento = document.querySelector('.btnDescuento');
let showResult = document.querySelector(showMarkerResult);

btnDescuento.addEventListener('click', (ev) => {
  let selectedClave;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      console.log(inputClave[i].value);
      selectedClave = inputClave[i].value;
      break;
    }
  }
  showResult.style.display = 'block';
});

console.log(inputClave);
console.log(btnDescuento);
