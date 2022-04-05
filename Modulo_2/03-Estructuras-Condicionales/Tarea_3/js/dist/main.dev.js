"use strict";

var descuentoClave_1 = 10;
var descuentoClave_2 = 20;
var btnDescuento = document.querySelector('.btnDescuento');
var showResult = document.querySelector('.BoxMarker_Result');
var inputClave = document.querySelectorAll('input[name="form-radio"]');
var inputArticulo = document.querySelector('#Input_Articulo').value;
var inputPrecio = document.querySelector('#Input_Precio').value;
var addArticulo = document.querySelector('.BoxComprarResult_Articulo');
var addClave = document.querySelector('.BoxComprarResult_Clave');
var addPrecio = document.querySelector('.BoxComprarResult_Precio');
var addDescuento = document.querySelector('.BoxComprarResult_Descuento');
var isBoxFormsBottom = document.querySelector('.BoxMarker_Forms');
btnDescuento.addEventListener('click', function (ev) {
  var selectedClave;

  for (var i = 0; i < inputClave.length; i++) {
    if (inputClave[i].checked) {
      selectedClave = inputClave[i].value;
      break;
    }
  }

  var BilleteCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(inputPrecio);
  addArticulo.textContent = inputArticulo;
  addPrecio.textContent = BilleteCOP;
  addClave.textContent = selectedClave === 'clave_1' ? 'Clave 1' : 'Clave 2';
  isBoxFormsBottom.style.marginBottom = '60px';
  showResult.style.display = 'block';
});