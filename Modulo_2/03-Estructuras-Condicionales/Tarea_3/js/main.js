let descuentoClave_1 = 0.1;
let descuentoClave_2 = 0.2;
let btnDescuento = document.querySelector('.btnDescuento');
let showResult = document.querySelector('.BoxMarker_Result');
let isBoxFormsBottom = document.querySelector('.BoxMarker_Forms');
let inputClave = document.querySelectorAll('input[name="form-radio"]');
let inputArticulo = document.querySelector('#Input_Articulo').value;
let inputPrecio = document.querySelector('#Input_Precio').value;
let addArticulo = document.querySelector('.BoxComprarResult_Articulo');
let addClave = document.querySelector('.BoxComprarResult_Clave');
let addPrecio = document.querySelector('.BoxComprarResult_Precio');
let addDescuento = document.querySelector('.BoxComprarResult_Descuento');

function BilleteCOP(precio) {
  let BilleteCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(precio);

  return BilleteCOP;
}

btnDescuento.addEventListener('click', (ev) => {
  ev.preventDefault;
  let selectedClave;
  let isDescuento;
  let multiplicar;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      selectedClave = inputClave[i].value;
      break;
    }
  }

  addArticulo.textContent = inputArticulo;
  addPrecio.textContent = BilleteCOP(inputPrecio);
  addClave.textContent = selectedClave === 'clave_1' ? 'Clave 1' : 'Clave 2';

  if (selectedClave !== 'clave_1') {
    multiplicar = inputPrecio * descuentoClave_2;
    isDescuento = inputPrecio - multiplicar;
    addDescuento.textContent = BilleteCOP(isDescuento);
  } else {
    multiplicar = inputPrecio * descuentoClave_1;
    isDescuento = inputPrecio - multiplicar;
    addDescuento.textContent = BilleteCOP(isDescuento);
  }

  isBoxFormsBottom.style.marginBottom = '60px';
  showResult.style.display = 'block';
});
