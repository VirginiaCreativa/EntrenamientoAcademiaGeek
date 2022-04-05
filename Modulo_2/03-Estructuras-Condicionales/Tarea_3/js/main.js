let descuentoClave_1 = 10;
let descuentoClave_2 = 20;
let addArticulo;
let addPrecio;

const localArticulo = '.BoxComprarResult_Articulo';
const localPrecio = '.BoxComprarResult_Precio';
const localClave = 'input[name="form-radio"]';
const buttonDescuento = '.btnDescuento';

let inputClave = document.querySelectorAll(localClave);
let btnDescuento = document.querySelector('.btnDescuento');

btnDescuento.addEventListener('click', (ev) => {
  let selectedClave;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      console.log(inputClave[i].value);
      selectedClave = inputClave[i].value;
      break;
    }
  }
});

console.log(inputClave);
console.log(btnDescuento);
