// Gera um componente input
var input = document.createElement("input");
input.type = "number";
input.className = "form-control";
input.placeholder = "R$";
input.name = "moeda";
input.step = "0.01";
input.min = "0.01";

// Gera um componente Label
var label = document.createElement("label");
label.className = "form-label";
label.textContent = "Valor Declarado";

// Gera um componente Small
var small = document.createElement("small");
small.classList.add("form-text", "text-muted");
small.textContent =
  "Quando o valor declarado para o ato for diverso do atribuído pelo Poder Público, para efeito de qualquer natureza, os emolumentos serão calculados pelo maior valor.";

//** ------------------------------------------------------------------------------------------- */

// Gera um componente input Para Data
var inputDate = document.createElement("input");
inputDate.type = "date";
inputDate.className = "form-control";
inputDate.name = "data";

// Gera um componente Label Para Data
var labelData = document.createElement("label");
labelData.className = "form-label";
labelData.textContent = "Data do Documento";

// Gera um componente Small para Data
var smallData = document.createElement("small");
smallData.classList.add("form-text", "text-muted");
smallData.textContent =
  "Caso o documento tenha mais de 1 ano na data de hoje, atualização da ufir será aplicada";
//** ------------------------------------------------------------------------------------------- */

// Obtém o elemento select
var selectElement = document.getElementById("selectElement" + idElementos);

// Adiciona um ouvinte de evento 'change' ao elemento select
selectElement.addEventListener('change', function() {
  // Obtém o valor da opção selecionada
  var selectedOption = selectElement.value;

  // Chama a função desejada com o valor da opção selecionada
  minhaFuncao(selectedOption);
});

// Função a ser executada quando a opção for alterada
function minhaFuncao(valorSelecionado) {
  console.log('Opção selecionada:', valorSelecionado);
  // Adicione aqui o código que você deseja executar com o valor selecionado
}

//** ------------------------------------------------------------------------------------------- */

// Obtém todos os elementos select na página
var selects = document.querySelectorAll('select');

// Adiciona um ouvinte de evento 'change' para cada elemento select
selects.forEach(function(select) {
  select.addEventListener('change', function() {
    // Obtém o valor da opção selecionada
    var selectedOption = select.value;

    // Chama a função desejada com o valor da opção selecionada
    minhaFuncao(selectedOption);
  });
});

// Função a ser executada quando a opção for alterada
function minhaFuncao(valorSelecionado) {
  console.log('Opção selecionada:', valorSelecionado);
  // Adicione aqui o código que você deseja executar com o valor selecionado
}
