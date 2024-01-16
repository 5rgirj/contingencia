const ufir = [
  1.0641, 1.1283, 1.213, 1.3584, 1.4924, 1.6049, 1.6992, 1.7495, 1.8258, 1.9372,
  2.0183, 2.1352, 2.2752, 2.4066, 2.5473, 2.7119, 3.0023, 3.1999, 3.2939,
  3.4211, 3.555, 3.7053, 4.0915, 4.3329, 4.5373,
];
const taxaJudiciariaMax = 73659.3;
const valorPorFaixa = 190.37;
const valorPorFaixaPmcmv = 3.8;


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
      valor = (valor / ufir[23 - Math.floor(diferencaEmAnos)]) * ufir[23];
      console.log(valor);
    }
    //tabela 05.1
    if (tipo > 0 && tipo < 8) {
      valor == 0
        ? (this.valor = 171.63)
        : valor <= 15885
        ? (this.valor = 246.78)
        : valor <= 31770.01
        ? (this.valor = 407.78)
        : valor <= 47655.01
        ? (this.valor = 568.83)
        : valor <= 63540.02
        ? (this.valor = 697.6)
        : valor <= 84720.02
        ? (this.valor = 1236.48)
        : valor <= 105900.03
        ? (this.valor = 1459.75)
        : valor <= 211800.07
        ? (this.valor = 1974.95)
        : valor <= 423600.14
        ? (this.valor = 2125.27)
        : (this.valor =
            (valor - 423600.14) % 105900.03 !== 0
              ? Math.floor(valor / 105900.03 + 1) * valorPorFaixa + 2125.27
              : (valor / 105900.03) * valorPorFaixa + 2125.27); //Calcula a regra descrita nas notas integrantes nº1 para valores acima de 423600,14

      if (this.valor > taxaJudiciariaMax) {
        this.valor = taxaJudiciariaMax;
      } //Nota Integrante 4 valor não pode superar taxa judiciaria maxima
    }

    if (tipo > 7 && tipo < 10){
      valor <= 105900.03
      ? (this.valor = 1600.66)
      : valor <= 529500.18
      ? (this.valor = 2567.71)
      : valor <= 847200.29
      ? (this.valor = 3572.42)
      : valor <= 1059000.36
      ? (this.valor = 4074.76)
      : (this.valor =
          (valor - 1059000.36) % 105900.03 !== 0
            ? Math.floor(valor / 105900.03 + 1) * valorPorFaixa + 4074.76
            : (valor / 105900.03) * valorPorFaixa + 4074.76); //Calcula a regra descrita nas notas integrantes nº1 para valores acima de 423600,14

    if (this.valor > taxaJudiciariaMax*4) {
      this.valor = taxaJudiciariaMax*4;
    } //Nota Integrante 4 valor não pode superar taxa judiciaria maxima

    }
    this.pmcmv =
      (valor - 1059000.36) % 105900.03 !== 0
      ? Math.floor(valor / 105900.03 + 1) * valorPorFaixaPmcmv + 42.5
      : (valor / 105900.03) * valorPorFaixaPmcmv + 42.5 //Calcula a regra descrita nas notas integrantes nº1 para Pmcmv em valores acima de 423600,14
    this.fetj =
      Math.floor((this.valor / 100) * 20 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.funperj =
      Math.floor((this.valor / 100) * 5 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.fundperj =
      Math.floor((this.valor / 100) * 5 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.funarpen =
      Math.floor((this.valor / 100) * 4 * Math.pow(10, 2)) / Math.pow(10, 2);
    this.selo = 4.96;

    //Nota Integrante 8 Primeira Aquisição
    if (tipo == 2) {
      this.valor = this.valor;
      this.pmcmv = 0;
      this.fetj = 0;
      this.funperj = 0;
      this.fundperj = 0;
      this.funarpen = 0;
    }

    //Nota Integrante 7 Primeira aquisição pelo sistema financeiro de habitação
    if (tipo == 3) {
      this.valor = this.valor / 2;
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
      `Este imóvel custa ${this.valor}\nPmcmv: ${this.pmcmv}\nfetj: ${this.fetj}\nfunperj: ${this.funperj}\nfundperj ${this.fundperj}\nfunarpen ${this.funarpen}\nselo ${this.selo}\nTotal: ${this.total}`
    );
  }
}

// Exportar a classe para que ela possa ser importada em outros arquivos
export default Emolumento;

/*
// Testes:
console.log("Verificar se os valores são calculados corretamente\n\n");
const emol = new Emolumento(0, "2023-12-20", "registro");
emol.apresentar();

const emol2 = new Emolumento(15885, "2023-12-20", "registro");
emol2.apresentar();

const emol3 = new Emolumento(31770.01, "2023-12-20", "registro");
emol3.apresentar();

const emol4 = new Emolumento(47655.01, "2023-12-20", "registro");
emol4.apresentar();

const emol5 = new Emolumento(63540.02, "2023-12-20", "registro");
emol5.apresentar();

const emol6 = new Emolumento(84720.02, "2023-12-20", "registro");
emol6.apresentar();

const emol7 = new Emolumento(105900.03, "2023-12-20", "registro");
emol7.apresentar();

const emol8 = new Emolumento(211800.07, "2023-12-20", "registro");
emol8.apresentar();

const emol9 = new Emolumento(423600.14, "2023-12-20", "registro");
emol9.apresentar();

const emol10 = new Emolumento(423600.15, "2023-12-20", "registro");
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
*/
