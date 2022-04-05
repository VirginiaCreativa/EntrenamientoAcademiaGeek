let descuentoClave_1 = 10;
let descuentoClave_2 = 20;

let btnDescuento = document.querySelector('.btnDescuento');
let showResult = document.querySelector('.BoxMarker_Result');
let inputClave = document.querySelectorAll('input[name="form-radio"]');
let inputArticulo = document.querySelector('#Input_Articulo').value;
let inputPrecio = document.querySelector('#Input_Precio').value;
let addArticulo = document.querySelector('.BoxComprarResult_Articulo');
let addClave = document.querySelector('.BoxComprarResult_Clave');
let addPrecio = document.querySelector('.BoxComprarResult_Precio');
let addDescuento = document.querySelector('.BoxComprarResult_Descuento');
let isBoxFormsBottom = document.querySelector('.BoxMarker_Forms');

btnDescuento.addEventListener('click', (ev) => {
  let selectedClave;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      selectedClave = inputClave[i].value;
      break;
    }
  }

  let BilleteCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(inputPrecio);

  addArticulo.textContent = inputArticulo;
  addPrecio.textContent = BilleteCOP;
  addClave.textContent = selectedClave === 'clave_1' ? 'Clave 1' : 'Clave 2';
  isBoxFormsBottom.style.marginBottom = '60px';
  showResult.style.display = 'block';
});
