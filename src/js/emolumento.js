const ufir = [
  1.0641, 1.1283, 1.213, 1.3584, 1.4924, 1.6049, 1.6992, 1.7495, 1.8258, 1.9372,
  2.0183, 2.1352, 2.2752, 2.4066, 2.5473, 2.7119, 3.0023, 3.1999, 3.2939,
  3.4211, 3.555, 3.7053, 4.0915, 4.3329,4.5373
];
taxaJudiciariaMax = 77134.1;
valorPorFaixa = 199.35;

class Emolumento {
  constructor(valor, dataFornecida, tipo, paquisicaoSFH, paquisicao) {
    var dataAtual = new Date();

    // Converter a data fornecida para um objeto Date
    var partesData = dataFornecida.split("-");
    var dataFornecidaObj = new Date(
      partesData[0],
      partesData[1] - 1,
      partesData[2]
    );

    // Calcular a diferença em milissegundos
    var diferencaEmMilissegundos = dataAtual - dataFornecidaObj;

    // Converter a diferença em anos
    var diferencaEmAnos =
      diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);

    // Nota integrante nº 6
    if (diferencaEmAnos > 1) {
      valor = (valor / ufir[Math.floor(diferencaEmAnos)]) * ufir[24];
    }
    //tabela 05.1
    if (tipo === "registro") {
      valor === 0
        ? (this.valor = 179.72)
        : valor <= 16634.35
        ? (this.valor = 258.42)
        : valor <= 33268.72
        ? (this.valor = 427.01)
        : valor <= 49903.08
        ? (this.valor = 595.66)
        : valor <= 66537.45
        ? (this.valor = 730.50)
        : valor <= 88716.59
        ? (this.valor = 1294.80)
        : valor <= 110895.75
        ? (this.valor = 1528.61)
        : valor <= 221791.51
        ? (this.valor = 2068.11)
        : valor <= 443583.03
        ? (this.valor = 2225.52)
        : (this.valor =
            (valor - 443583.03) % 110895.75 !== 0
              ? Math.floor((valor - 443583.03) / 110895.75 + 1) * valorPorFaixa + 2225.52
              : ((valor - 443583.03) / 110895.75) * valorPorFaixa + 2225.52); //Calcula a regra descrita nas notas integrantes nº1 para valores acima de 423600,14

      if (this.valor > taxaJudiciariaMax) {
        this.valor = taxaJudiciariaMax;
      } //Nota Integrante 4 valor não pode superar taxa judiciaria maxima
    }

    this.pmcmv =
      Math.floor((this.valor / 100) * 2 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.fetj =
      Math.floor((this.valor / 100) * 20 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.funperj =
      Math.floor((this.valor / 100) * 5 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.fundperj =
      Math.floor((this.valor / 100) * 5 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.funarpen =
      Math.floor((this.valor / 100) * 4 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.selo = 4.96;

    //Nota Integrante 7 Primeira aquisição pelo sistema financeiro de habitação
    if (paquisicaoSFH) {
      this.valor = this.valor / 2;
      this.pmcmv = 0;
      this.fetj = 0;
      this.funperj = 0;
      this.fundperj = 0;
      this.funarpen = 0;
    }
    //Nota Integrante 8 Primeira Aquisição
    if (paquisicao) {
      this.valor = this.valor;
      this.pmcmv = 0;
      this.fetj = 0;
      this.funperj = 0;
      this.fundperj = 0;
      this.funarpen = 0;
    }

    this.total = (
      this.valor +
      this.pmcmv +
      this.fetj +
      this.funperj +
      this.fundperj +
      this.funarpen
    ).toFixed(2);
  }

  apresentar() {
    console.log(
      `Este imóvel custa ${this.valor}\nPmcmv: ${this.pmcmv}\nfetj: ${this.fetj}\nfunperj: ${this.funperj}\nfundperj ${this.fundperj}\nfunarpen ${this.funarpen}\nTotal: ${this.total}`
    );
  }
}

// Testes:
console.log("Verificar se os valores são calculados corretamente\n\n");
const emol = new Emolumento(0, "2023-12-20", "registro");
emol.apresentar();

const emol2 = new Emolumento(16634.35, "2023-12-20", "registro");
emol2.apresentar();

const emol3 = new Emolumento(33268.72, "2023-12-20", "registro");
emol3.apresentar();

const emol4 = new Emolumento(49903.08, "2023-12-20", "registro");
emol4.apresentar();

const emol5 = new Emolumento(66537.45, "2023-12-20", "registro");
emol5.apresentar();

const emol6 = new Emolumento(88716.59, "2023-12-20", "registro");
emol6.apresentar();

const emol7 = new Emolumento(110895.75, "2023-12-20", "registro");
emol7.apresentar();

const emol8 = new Emolumento(221791.51, "2023-12-20", "registro");
emol8.apresentar();

const emol9 = new Emolumento(443583.03, "2023-12-20", "registro");
emol9.apresentar();

const emol10 = new Emolumento(443583.04, "2023-12-20", "registro");
emol10.apresentar();

const emol11 = new Emolumento(1000000000, "2023-12-20", "registro");
emol11.apresentar();

console.log("Verificar se a ufir está sendo aplicada");

const emol12 = new Emolumento(15885, "2015-12-20", "registro");
emol12.apresentar();

console.log("Verificar se a primeira aquisição está sendo aplicada");

const emol13 = new Emolumento(15885, "2023-12-20", "registro", true);
emol13.apresentar();

const emol14 = new Emolumento(15885, "2023-12-20", "registro", false, true);
emol14.apresentar();
