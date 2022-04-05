"use strict";

var descuentoClave_1 = 0.1;
var descuentoClave_2 = 0.2;
var btnDescuento = document.querySelector('.btnDescuento');
var showResult = document.querySelector('.BoxMarker_Result');
var isBoxFormsBottom = document.querySelector('.BoxMarker_Forms');
var inputClave = document.querySelectorAll('input[name="form-radio"]');
var inputArticulo = document.querySelector('#Input_Articulo').value;
var inputPrecio = document.querySelector('#Input_Precio').value;
var addArticulo = document.querySelector('.BoxComprarResult_Articulo');
var addClave = document.querySelector('.BoxComprarResult_Clave');
var addPrecio = document.querySelector('.BoxComprarResult_Precio');
var addDescuento = document.querySelector('.BoxComprarResult_Descuento');

function BilleteCOP(precio) {
  var BilleteCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(precio);
  return BilleteCOP;
}

btnDescuento.addEventListener('click', function (ev) {
  ev.preventDefault;
  var selectedClave;
  var isDescuento;
  var multiplicar;

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