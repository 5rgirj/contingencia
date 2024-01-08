const ufir = [
  1.0641, 1.1283, 1.213, 1.3584, 1.4924, 1.6049, 1.6992, 1.7495, 1.8258, 1.9372,
  2.0183, 2.1352, 2.2752, 2.4066, 2.5473, 2.7119, 3.0023, 3.1999, 3.2939,
  3.4211, 3.555, 3.7053, 4.0915, 4.3329,
];
taxaJudiciariaMax = 73659.3*4;
valorPorFaixa = 190.37;

class Emolumento {
  constructor(valorTerreno, custoGlobal,  dataFornecida) {
    var dataAtual = new Date();
    var valor = valorTerreno + custoGlobal;

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
      valor = (valor / ufir[Math.floor(diferencaEmAnos)]) * ufir[23];
    }
    //tabela 05.2
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

      if (this.valor > taxaJudiciariaMax) {
        this.valor = taxaJudiciariaMax;
      } //Nota Integrante 4 valor não pode superar taxa judiciaria maxima

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

// Testes:
console.log("Verificar se os valores são calculados corretamente\n\n");
const emol = new Emolumento(0, 105900.03,"2023-12-20");
emol.apresentar();

const emol3 = new Emolumento(0, 529500.18,"2023-12-20");
emol3.apresentar();

const emol4 = new Emolumento(0, 847200.29,"2023-12-20");
emol4.apresentar();

const emol5 = new Emolumento(0, 1059000.36,"2023-12-20");
emol5.apresentar();

const emol6 = new Emolumento(0, 10059000.36,"2023-12-20");
emol6.apresentar();