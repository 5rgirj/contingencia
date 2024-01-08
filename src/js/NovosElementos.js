const elementos = [
  "Registro Simples",
  "1ª Aquisição",
  "1ª Aquisição com SFH",
  "Alienação ou Mutuo",
  "Locação",
  "Nua Propriedade",
  "Doação c/ Reserva de Usufruto",
  "Memorial de Incorporação",
  "Instituição de Condominio",
  "Averbação c/ Valor Econômico",
  "Averbação",
  "Desmembramento/Remembramento",
  "Convenção e Condomínio",
  "Certidão",
  "Intimação Devedor",
  "Intimação em Geral",
  "Exame de Legalidade",
  "Reconhecimento de Usucapião",
  "Publicidade Eletrônica",
];

var idElementos = 0;
adicionarElemento();
function adicionarElemento() {
  var cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.id = "cardElement" + idElementos;

  var cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");

  cardElement.appendChild(cardBodyElement);

  var selectElement = document.createElement("select");
  selectElement.classList.add("form-select", "form-select-sm");
  selectElement.id = "selectElement" + idElementos;
  idElementos++;

  cardBodyElement.appendChild(selectElement);
  selects = document.querySelectorAll("select");
  
  for (var i = 0; i < elementos.length; i++) {
    selectElement.innerHTML +=
      "<option value='" + i + "'>" + elementos[i] + "</option>";
  }
  document
    .getElementById("containerElementos")
    .appendChild(document.createElement("br"));
  document
    .getElementById("containerElementos")
    .appendChild(cardElement);
}

function removerElemento() {
  // Obtém o elemento pelo ID
  var remover = idElementos - 1;
  var elementoParaRemover = document.getElementById("cardElement" + remover);
  console.log(elementoParaRemover.id);
  elementoParaRemover.remove();
  idElementos--;
}
document
  .getElementById("adicionarElemento")
  .addEventListener("click", adicionarElemento);
document
  .getElementById("removerElemento")
  .addEventListener("click", removerElemento);

// Obtém todos os elementos select na página
var selects = document.querySelectorAll("select");

// Adiciona um ouvinte de evento 'change' para cada elemento select
selects.forEach(function (select) {
  select.addEventListener("change", function () {
    // Obtém o valor da opção selecionada
    var selectedOption = select.value;

    // Chama a função desejada com o valor da opção selecionada
    minhaFuncao(selectedOption);
  });
});

// Função a ser executada quando a opção for alterada
function minhaFuncao(valorSelecionado) {
  console.log("Opção selecionada:", valorSelecionado);
  // Adicione aqui o código que você deseja executar com o valor selecionado
}
