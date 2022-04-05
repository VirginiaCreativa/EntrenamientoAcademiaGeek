"use strict";

var descuentoClave_1 = 10;
var descuentoClave_2 = 20;
var btnDescuento = document.querySelector('.btnDescuento');
var showResult = document.querySelector('.BoxMarker_Result');
var inputClave = document.querySelectorAll('input[name="form-radio"]');
var inputArticulo = document.querySelector('#Input_Articulo');
var inputPrecio = document.querySelector('#Input_Precio');
var addArticulo = document.querySelector('.BoxComprarResult_Articulo');
var addClave = document.querySelector('.BoxComprarResult_Clave');
var addPrecio = document.querySelector('.BoxComprarResult_Precio');
var addDescuento = document.querySelector('.BoxComprarResult_Descuento');
btnDescuento.addEventListener('click', function (ev) {
  var selectedClave;

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