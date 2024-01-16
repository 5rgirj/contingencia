import Emolumento from "./emolumento2023";

document
  .getElementById("calcularEmolumentos")
  .addEventListener("click", function () {
    for (var i = 0; i < idElementos; i++) {
      //obter o elemento
      var elemento = document.getElementById("card-body" + i);
      var campos = elemento.getElementsByClassName("form-control");

      // Obter valores dos campos
      var tipo = elemento.querySelector("select").value;
      var valor = campos[0].value;
      var data = campos[1].value;

      console.log(tipo, valor, data);

      var emolumento = new Emolumento(valor, data, tipo);
      emolumento.apresentar();
    }
  });
