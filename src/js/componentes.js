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

// Gera o componente Select com os elementos
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

var selectElement = document.createElement("select");
selectElement.classList.add("form-select", "form-select-sm");
selectElement.id = "selectElement" + idElementos;
idElementos++;

for (var i = 0; i < elementos.length; i++) {
  selectElement.innerHTML +=
    "<option value='" + i + "'>" + elementos[i] + "</option>";
}
