"use strict";

var descuentoClave_1 = 10;
var descuentoClave_2 = 20;
var addArticulo;
var addPrecio;
var localArticulo = '.BoxComprarResult_Articulo';
var localPrecio = '.BoxComprarResult_Precio';
var localClave = 'input[name="form-radio"]';
var buttonDescuento = '.btnDescuento';
var showMarkerResult = '.BoxMarker_Result';
var inputClave = document.querySelectorAll(localClave);
var btnDescuento = document.querySelector('.btnDescuento');
var showResult = document.querySelector(showMarkerResult);
btnDescuento.addEventListener('click', function (ev) {
  var selectedClave;

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