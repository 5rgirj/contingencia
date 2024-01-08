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

function adicionarElemento() {
  // Gera um componente input
  var input = document.createElement("input");
  input.type = "number";
  input.className = "form-control";
  input.id = "emolumento";
  input.placeholder = "R$";
  input.name = "quantidaed";
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
  cardBodyElement.appendChild(document.createElement("br"));
  cardBodyElement.appendChild(label);
  cardBodyElement.appendChild(input);
  cardBodyElement.appendChild(small);

  for (var i = 0; i < elementos.length; i++) {
    selectElement.innerHTML +=
      "<option value='" + i + "'>" + elementos[i] + "</option>";
  }
  document.getElementById("containerElementos").appendChild(document.createElement("br"))
  document.getElementById("containerElementos").appendChild(cardElement);
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
