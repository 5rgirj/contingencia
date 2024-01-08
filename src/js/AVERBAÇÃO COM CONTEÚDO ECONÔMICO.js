const ufir = [
  1.0641, 1.1283, 1.213, 1.3584, 1.4924, 1.6049, 1.6992, 1.7495, 1.8258, 1.9372,
  2.0183, 2.1352, 2.2752, 2.4066, 2.5473, 2.7119, 3.0023, 3.1999, 3.2939,
  3.4211, 3.555, 3.7053, 4.0915, 4.3329,
];
taxaJudiciariaMax = 73659.3/2;
valorPorFaixa = 95.17;

class Emolumento {
  constructor(valor,  dataFornecida) {
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
      valor = (valor / ufir[Math.floor(diferencaEmAnos)]) * ufir[23];
    }
    //tabela 05.2
      valor <= 15885
        ? (this.valor = 171.96)
        : valor <= 31770.01
        ? (this.valor = 216.71)
        : valor <= 47655.01
        ? (this.valor = 306.04)
        : valor <= 63540.02
        ? (this.valor = 350.92)
        : valor <= 84720.02
        ? (this.valor = 440.34)
        : valor <= 105900.03
        ? (this.valor = 536.91)
        : valor <= 211800.07
        ? (this.valor = 633.19)
        : valor <= 423600.14 
        ? (this.valor = 689.02)
        : (this.valor =
            (valor - 423600.14) % 105900.03 !== 0
              ? Math.floor(valor / 105900.03 + 1) * valorPorFaixa + 689.02
              : (valor / 105900.03) * valorPorFaixa + 689.02); //Calcula a regra descrita nas notas integrantes nº1 para valores acima de 423600,14

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
const emol = new Emolumento(15885,"2023-12-20");
emol.apresentar();

const emol3 = new Emolumento(31770.01,"2023-12-20");
emol3.apresentar();

const emol4 = new Emolumento(47655.01,"2023-12-20");
emol4.apresentar();

const emol5 = new Emolumento(63540.02,"2023-12-20");
emol5.apresentar();

const emol6 = new Emolumento(84720.02,"2023-12-20");
emol6.apresentar();

const emol7 = new Emolumento(105900.03,"2023-12-20");
emol7.apresentar();

const emol8 = new Emolumento(211800.07,"2023-12-20");
emol8.apresentar();

const emol9 = new Emolumento(423600.14,"2023-12-20");
emol9.apresentar();

const emol10 = new Emolumento(423600000.14,"2023-12-20");
emol10.apresentar();