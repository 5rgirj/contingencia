import Emolumento from "./emolumento2024.js";

const elementos = [
  "Selecione o item de cobrança",
  "Registro Simples",
  "1ª Aquisição",
  "1ª Aquisição com SFH",
  "Alienação ou Penhora",
  "Locação",
  "Nua Propriedade",
  "Doação c/ Reserva de Usufruto",
  "Memorial de Incorporação",
  "Instituição de Condominio",
  "Averbação c/ Valor Econômico",
  "Averbação",
  "Desmembramento / Remembramento",
  "Convenção de Condomínio",
  "Certidão",
];

var idElementos = 0;
// Obtém todos os elementos select na página
var selects = document.querySelectorAll("select");
adicionarElemento();
function adicionarElemento() {
  document.getElementById("adicionarElemento").disabled = true;

  var cardElement = document.createElement("div");
  cardElement.classList.add("card", "col-10", "col-md-6", "col-lg-3", "m-4");
  cardElement.id = "cardElement" + idElementos;

  var cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");
  cardBodyElement.id = "card-body" + idElementos;

  cardElement.appendChild(cardBodyElement);

  var selectElement = document.createElement("select");
  selectElement.classList.add("form-select", "form-select-sm");
  selectElement.id = "selectElement" + idElementos;
  idElementos++;

  cardBodyElement.appendChild(selectElement);

  for (var i = 0; i < elementos.length; i++) {
    selectElement.innerHTML +=
      "<option value='" + i + "'>" + elementos[i] + "</option>";
  }
  document
    .getElementById("containerElementos")
    .appendChild(document.createElement("br"));
  document.getElementById("containerElementos").appendChild(cardElement);

  selects = document.querySelectorAll("select");
  // Adiciona um ouvinte de evento 'change' para cada elemento select
  selects.forEach(function (select) {
    select.addEventListener("change", function () {
      selectElement.classList.add("d-none");
      // Obtém o valor da opção selecionada
      var selectedOption = select.value;

      // Chama a função desejada com o valor da opção selecionada
      geraItem(selectedOption, idElementos);
    });
  });
}

function removerElemento() {
  // Obtém o elemento pelo ID
  var remover = idElementos - 1;
  var elementoParaRemover = document.getElementById("cardElement" + remover);
  console.log(elementoParaRemover.id);
  elementoParaRemover.remove();
  idElementos--;
}

// Adiciona um evento de clique ao botão
document.getElementById("btnRecarregar").addEventListener("click", function () {
  // Recarrega a página
  location.reload();
});
document.getElementById("btnImprimir").addEventListener("click", function () {
  // Recarrega a página
  window.print();
});
document
  .getElementById("adicionarElemento")
  .addEventListener("click", adicionarElemento);
document
  .getElementById("removerElemento")
  .addEventListener("click", removerElemento);

//Função Gera Itens baseado na seleçãod o usuario
function geraItem(item, id) {
  document.getElementById("adicionarElemento").disabled = false;
  //Componentes
  //DATA
  // Gera um componente input Para Data
  var inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.className = "form-control";
  inputDate.name = "data";
  inputDate.tabIndex = 2;

  //Label
  var labelDate = document.createElement("label");
  labelDate.className = "form-label";
  labelDate.textContent = "Data do Documento";

  //Small
  var smallDate = document.createElement("small");
  smallDate.classList.add("form-text", "text-muted");
  smallDate.textContent =
    "Caso o documento tenha mais de 1 ano na data de hoje, atualização da ufir será aplicada";
  //** ------------------------------------------------------------------------------------------- */

  //Valor simples
  // Gera um componente input para valores monetarios
  var inputValor = document.createElement("input");
  inputValor.type = "number";
  inputValor.className = "form-control";
  inputValor.placeholder = "R$";
  inputValor.name = "moeda";
  inputValor.step = "0.01";
  inputValor.min = "0.01";
  inputValor.tabIndex = 1;

  var inputReserva = document.createElement("input");
  inputReserva.type = "number";
  inputReserva.className = "form-control";
  inputReserva.placeholder = "R$";
  inputReserva.name = "moeda";
  inputReserva.step = "0.01";
  inputReserva.min = "0.01";

  // Gera um componente input para unidades
  var inputUnidade = document.createElement("input");
  inputUnidade.type = "number";
  inputUnidade.className = "form-control";
  inputUnidade.step = "1";
  inputUnidade.min = "1";

  //Label e Small para Registros Simples, 1ª Aquisição, 1ª Aquicição com SFH, Alienação Fiduciária

  //Label
  var label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Valor Declarado";

  //Small
  var small = document.createElement("small");
  small.classList.add("form-text", "text-muted");
  small.textContent =
    "Quando o valor declarado para o ato for diverso do atribuído pelo Poder Público, para efeito de qualquer natureza, os emolumentos serão calculados pelo maior valor.";
  //** ------------------------------------------------------------------------------------------- */

  //label e small do Aluguel
  var labelLocacao = document.createElement("label");
  labelLocacao.className = "form-label";
  labelLocacao.textContent = "Valor da Mensalidade";

  var smallLocacao = document.createElement("small");
  smallLocacao.classList.add("form-text", "text-muted");
  smallLocacao.textContent = "Informe o valor da mensalidade";

  //label e small do Periodo

  var labelPeriodoLocacao = document.createElement("label");
  labelPeriodoLocacao.className = "form-label";
  labelPeriodoLocacao.textContent = "Periodo de Locação";

  var smallPeriodoLocacao = document.createElement("small");
  smallPeriodoLocacao.classList.add("form-text", "text-muted");
  smallPeriodoLocacao.textContent = "Informe o Periodo de locação do imóvel";
  //** ------------------------------------------------------------------------------------------- */

  //label e small do Aluguel
  var labelNua = document.createElement("label");
  labelNua.className = "form-label";
  labelNua.textContent = "Valor da Nua Propriedade";

  var smallNua = document.createElement("small");
  smallNua.classList.add("form-text", "text-muted");
  smallNua.textContent = "Informe o valor da Nua propriedade";

  //** ------------------------------------------------------------------------------------------- */

  //label e small do Aluguel
  var labelDoacao = document.createElement("label");
  labelDoacao.className = "form-label";
  labelDoacao.textContent = "Valor da Doação";

  var smallDoacao = document.createElement("small");
  smallDoacao.classList.add("form-text", "text-muted");
  smallDoacao.textContent = "Informe o valor da Doação";

  //label e small do Periodo

  var labelReserva = document.createElement("label");
  labelReserva.className = "form-label";
  labelReserva.textContent = "Valor da Reserva de Usufruto";

  var smallReserva = document.createElement("small");
  smallReserva.classList.add("form-text", "text-muted");
  smallReserva.textContent = "Informe o valor da Reserva de Usufruto";
  //** ------------------------------------------------------------------------------------------- */

  //label e small do Terreno
  var labelTerreno = document.createElement("label");
  labelTerreno.className = "form-label";
  labelTerreno.textContent = "Valor do Terreno";

  var smallTerreno = document.createElement("small");
  smallTerreno.classList.add("form-text", "text-muted");
  smallTerreno.textContent = "Informe o valor do Terreno";

  //label e small da Obra

  var labelObra = document.createElement("label");
  labelObra.className = "form-label";
  labelObra.textContent = "Valor total da Obra";

  var smallObra = document.createElement("small");
  smallObra.classList.add("form-text", "text-muted");
  smallObra.textContent = "Informe o valor total da Obra";
  //** ------------------------------------------------------------------------------------------- */

  //label da Averbação com conteudo economico
  var labelAvAdValorem = document.createElement("label");
  labelAvAdValorem.className = "form-label";
  labelAvAdValorem.textContent = "Valor da Averbação Com Conteudo Economico";

  var smallAvAdValorem = document.createElement("small");
  smallAvAdValorem.classList.add("form-text", "text-muted");
  smallAvAdValorem.textContent = "Informe o valor da Av Ad Valorem";

  //** ------------------------------------------------------------------------------------------- */

  //label da Averbação
  var labelAverbacao = document.createElement("label");
  labelAverbacao.className = "form-label";
  labelAverbacao.textContent = "Quantidade de Averbações";

  var smallAverbacao = document.createElement("small");
  smallAverbacao.classList.add("form-text", "text-muted");
  smallAverbacao.textContent = "Informe a quantidade de Averbações";

  //** ------------------------------------------------------------------------------------------- */

  //label da Averbação
  var labelConvencao = document.createElement("label");
  labelConvencao.className = "form-label";
  labelConvencao.textContent = "Quantidade de unidades";

  var smallConvencao = document.createElement("small");
  smallConvencao.classList.add("form-text", "text-muted");
  smallConvencao.textContent =
    "Informe a quantidade de Unidades da convenção de Condominio";

  //** ------------------------------------------------------------------------------------------- */

  var titulo = document.createElement("h3");
  titulo.textContent = elementos[item];
  titulo.className = "text-center";
  //fimComponentes

  console.log("Gera item: " + item + " do elemento: " + (id - 1));
  //Busca o elemento ao qual devemos adicionar os campos do item
  var elemento = document.getElementById("card-body" + (id - 1));
  //Insere no elemento os campos necessários para o item selecionado
  if (item >= 1 && item <= 4) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(label);
    elemento.appendChild(inputValor);
    elemento.appendChild(small);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item == 5) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelLocacao);
    elemento.appendChild(inputValor);
    elemento.appendChild(smallLocacao);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelPeriodoLocacao);
    elemento.appendChild(inputUnidade);
    elemento.appendChild(smallPeriodoLocacao);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item == 6) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelNua);
    elemento.appendChild(inputValor);
    elemento.appendChild(smallNua);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item == 7) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDoacao);
    elemento.appendChild(inputValor);
    elemento.appendChild(smallDoacao);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelReserva);
    elemento.appendChild(inputReserva);
    elemento.appendChild(smallReserva);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item > 7 && item < 10) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelTerreno);
    elemento.appendChild(inputValor);
    elemento.appendChild(smallTerreno);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelObra);
    elemento.appendChild(inputReserva);
    elemento.appendChild(smallObra);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item == 10) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelAvAdValorem);
    elemento.appendChild(inputValor);
    elemento.appendChild(smallAvAdValorem);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelDate);
    elemento.appendChild(inputDate);
    elemento.appendChild(smallDate);
  }
  if (item == 11) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelAverbacao);
    elemento.appendChild(inputUnidade);
    elemento.appendChild(smallAverbacao);
    elemento.appendChild(document.createElement("br"));
  }
  if (item > 11) {
    elemento.appendChild(titulo);
    elemento.appendChild(document.createElement("br"));
    elemento.appendChild(labelConvencao);
    elemento.appendChild(inputUnidade);
    elemento.appendChild(smallConvencao);
    elemento.appendChild(document.createElement("br"));
  }
}

document
  .getElementById("calcularEmolumentos")
  .addEventListener("click", function () {
    var total = 0;
    var totalEmol = 0;
    var totalPmcmv = 0;
    var quantGuiaCom = 0;
    var pAquisicao = 0;

    for (var i = 0; i < idElementos; i++) {
      //obter o elemento
      var elemento = document.getElementById("card-body" + i);
      var campos = elemento.getElementsByClassName("form-control");
      var valor;
      var data;
      var qtItem = 1;
      var qtSelo = 1;

      // Obter valores dos campos
      var tipo = elemento.querySelector("select").value;
      if (tipo > 0 && tipo < 5) {
        valor = campos[0].value;
        data = campos[1].value;
        tipo != 4 ? (quantGuiaCom += 1) : (quantGuiaCom += 0);
        tipo == 2 || tipo ==3 ? (pAquisicao = 1) : (pAquisicao = 0);
      }
      if (tipo == 5) {
        if (campos[1].value == 0) campos[1].value = 12;
        valor = campos[0].value * campos[1].value;
        data = campos[2].value;
      }
      if (tipo > 5 && tipo < 8) {
        valor = campos[0].value / 2;
        data = campos[1].value;
      }
      if (tipo > 7 && tipo < 10) {
        valor = Number(campos[0].value) + Number(campos[1].value);
        data = campos[2].value;
      }
      if (tipo == 10) {
        valor = campos[0].value;
        data = campos[1].value;
      }
      if (tipo == 11) {
        qtItem = campos[0].value;
        valor = campos[0].value;
        qtSelo += Number(campos[0].value) - 1;
        data = Date();
      }
      if (tipo == 12) {
        qtItem = campos[0].value;
        valor = campos[0].value;
        qtSelo += Number(campos[0].value) - 1;
        data = Date();
      }
      if (tipo == 13) {
        qtItem = campos[0].value;
        qtSelo += Number(campos[0].value);
        valor = qtItem;
        data = Date();
      }
      if (tipo == 14) {
        qtItem = campos[0].value;
        valor = campos[0].value;
        data = Date();
      }

      console.log(tipo, valor, data);

      var imprimeValor = document.createElement("tr");

      var emolumento = new Emolumento(valor, data, tipo);
      emolumento.apresentar();
      //apresentar o valor
      if (valor == 0) {
        valor = "Mínimo";
      } else {
        valor = parseFloat(valor).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      }
      total += emolumento.total;
      totalEmol += emolumento.valor;
      totalPmcmv += emolumento.pmcmv;
      var result = document.getElementById("result");
      imprimeValor.innerHTML +=
        "<th scope='row'>" +
        elementos[tipo] +
        "<br><small class='text-secondary fw-normal'>Valor: " +
        valor +
        "</small>" +
        "</th> <td>" +
        qtItem +
        "</td><td>" +
        emolumento.total +
        "</td>";
      result.appendChild(imprimeValor);
    }
    var imprimeValorTotal = document.createElement("tr");
    var imprimeValorSelo = document.createElement("tr");
    var imprimeValorPrenotacao = document.createElement("tr");
    var imprimeValorBib = document.createElement("tr");
    var imprimeValorGuiaCom = document.createElement("tr");
    var imprimeValorIss = document.createElement("tr");

    console.log(qtSelo);
    qtSelo = qtSelo + i;
    var valorSelo = qtSelo * 2.59; //Corrigir o calculo de selos, para averbações, convenções e tudo que tenha unidades
    var valorPrenotacao = 29.14;
    var valorPrenotacaoPmcmv = 0.58;
    var prenotacao;
    var valorGuiaCom = 41.91 * (quantGuiaCom * 2);
    var guiaComPmcmv = 0.83 * (quantGuiaCom * 2);
    var totalGuiaCom;
    if (pAquisicao == 1) {
      totalGuiaCom = valorGuiaCom + guiaComPmcmv;
      prenotacao = valorPrenotacao + valorPrenotacaoPmcmv;
    } else {
      totalGuiaCom = 56.97 * (quantGuiaCom * 2);
      prenotacao = 39.6;
    }
    var valorBib = Number(document.getElementById("bib").value) * 29.39;

    var valorIss =
      (totalEmol +
        totalPmcmv +
        valorPrenotacao +
        valorPrenotacaoPmcmv +
        valorGuiaCom +
        guiaComPmcmv) *
      0.05263157;
    var valorTotal =
      valorSelo + valorBib + prenotacao + total + valorIss + totalGuiaCom;

    imprimeValorSelo.innerHTML +=
      "<th scope='row'> Selos </th> <td>" +
      qtSelo +
      "</td><td>" +
      valorSelo +
      "</td>";
    imprimeValorPrenotacao.innerHTML +=
      "<th scope='row'> Prenotação </th> <td>" +
      1 +
      "</td><td>" +
      prenotacao +
      "</td>";
    imprimeValorBib.innerHTML +=
      "<th scope='row'> Bib </th> <td>" +
      document.getElementById("bib").value +
      "</td><td>" +
      valorBib +
      "</td>";
    imprimeValorGuiaCom.innerHTML +=
      "<th scope='row'> Not/Int... </th> <td>" +
      quantGuiaCom * 2 +
      "</td><td>" +
      totalGuiaCom.toFixed(2) +
      "</td>";

    imprimeValorIss.innerHTML +=
      "<th scope='row'> ISS </th> <td ></td><td>" +
      valorIss.toFixed(2) +
      "</td>";
    imprimeValorTotal.innerHTML +=
      "<th scope='row'> TOTAL </th> <td ></td><td><strong>" +
      valorTotal.toFixed(2) +
      "</strong></td>";
    result.appendChild(imprimeValorSelo);
    result.appendChild(imprimeValorPrenotacao);
    if (document.getElementById("bib").value != 0) {
      result.appendChild(imprimeValorBib);
    }
    if (valorGuiaCom != 0) {
      result.appendChild(imprimeValorGuiaCom);
    }
    result.appendChild(imprimeValorIss);
    result.appendChild(imprimeValorTotal);
  });
