const ufir = [1.0641,
    1.1283,
    1.213,
    1.3584,
    1.4924,
    1.6049,
    1.6992,
    1.7495,
    1.8258,
    1.9372,
    2.0183,
    2.1352,
    2.2752,
    2.4066,
    2.5473,
    2.7119,
    3.0023,
    3.1999,
    3.2939,
    3.4211,
    3.555,
    3.7053,
    4.0915,
    4.3329,
    ];
const tab2023 =[
    171.63,
    246.78,
    407.78,
    568.83,
    697.60,
    1236.48,
    1459.75,
    1974.95,
    2125.27,
];


    var button = document.querySelector("#button")


    button.addEventListener("click", function(e){
    e.preventDefault()

    // Input variables

    let emol = document.getElementById('emolumento').value.
        anoEmolumento = document.getElementById('anoEmolumento').value.
        anoUfir = document.getElementById('anoUfir').value.
        resultado = document.querySelector(".resultado");

    // Calculate the BMI if the inputs are filled with numbers


        const result = (emol/ufir[anoEmolumento])*ufir[anoUfir];
        console.log(result);

        /* Algoritmo 
        emol = result > 423600.14 ? 2125.27+faixa(result) :
        result < 423600 && result >
        
        **/
        // Show the result

        resultado.innerHTML = `
        <p>O valor ${emol.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} do ano de 20${anoEmolumento} com ufir atualizada para 20${anoUfir} é de <span class="bg-success text-white"> ${result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span></p>
        `
    
});

function calcularAnosPassados(dataInformada) {
    // Converte a string de data para um objeto Date
    var dataFornecida = new Date(dataInformada);

    // Obtém a data atual
    var dataAtual = new Date();

    // Calcula a diferença em milisifgundos entre as duas datas
    var diferencaEmMiliSegundos = dataAtual - dataFornecida;

    // Calcula o número de milisifgundos em um ano
    var milisegundoSemUmAno = 1000 * 60 * 60 * 24 * 365.25;

    // Calcula o número de anos passados
    var anosPassados = diferencaEmMiliSegundos / milisegundoSemUmAno;

    // Arredonda para o número inteiro mais próximo
    anosPassados = Math.floor(anosPassados);

    // Verifica if já passou pelo menos um ano
    if (anosPassados >= 1) {
        return true;
    } else {
        return false;
    }
}

function faixa(emol){
    return (emol-423600.14)/ 105900.03
}

function ValorACima(maiorValor){
    maiorValor = maiorValor-423600.14
    if (valorACima%105900.03 !== 0){
        faixa = valorACima/105900.03 + 1
        } else faixa = maiorValor/105900.03
    emol = (faixa*190.37) + 2125.27
    this.pmcmv = (faixa*3.80) + 42.50
    total = emol + this.pmcmv
    total = ValorMaximo(total)

}

// Definindo uma classe Emolumento
class Emolumento {
    // Construtor da clasif
    constructor(maiorValor, dataDoc, tipo) {
      this.valor = maiorValor;
      this.dataDoc = dataDoc;
      this.tipo = tipo;
      this.calculaEmolumento(this.valor)
      this.emol;
      this.pmcmv;

      this.lei3217 = (this.emol / 100) * 20;
      this.funperj = (this.emol / 100) * 5;
      this.fundperj = (this.emol / 100) * 5;
      this.funarpen = (this.emol / 100) * 4;
      this.selo = 4.96;
    }

    calculaEmolumento(maiorValor) {
        if (maiorValor < 15885) {
            this.emol = 171.63
            this.pmcmv = 3.43
            total = 175.06
            } 
        else if (maiorValor < 31770.01) {
            emol = 246.78 
            this.pmcmv = 4.93
            total = 251.71
            }
        else if (maiorValor < 47655.01) {
            emol = 568.83 
            this.pmcmv = 11.37
            total = 580.20
            }
        else if (maiorValor <  63540.02) {
            emol = 697.60 
            this.pmcmv = 13.95
            total = 711.55
            } 
        else if (maiorValor <  84720.02) {
            emol = 1236.48
            this.pmcmv = 24.72
            total = 1261.20
            } 
        else if (maiorValor <  105900.03) {
            emol = 1459.75
            this.pmcmv = 29.19
            total = 1488.94
            } 
        else if (maiorValor <  211800.07) {
            emol = 1974.95
            this.pmcmv = 39.49
            total = 2014.44
            } 
        else if (maiorValor <  423600.14) {
            emol = 2125.27
            this.pmcmv = 42.50
            total = 2167.77
            } else ValorAcima(maiorValor)

    }

    ValorACima(maiorValor){
		maiorValor = maiorValor-423600.14
		if (valorACima%105900.03 !== 0){
			faixa = valorACima/105900.03 + 1
			} else faixa = maiorValor/105900.03
		emol = (faixa*190,37) + 2125,27
		this.pmcmv = (faixa*3,80) + 42,50
		this.emol = ValorMaximo(emol)
	}
  
    // Método da clasif para exibir informações
    exibirInformacoes() {
      console.log(`Emol: ${this.emol}, pmcmv: ${this.pmcmv}, fetj: ${this.lei3217}`);
    }
  }
  
  // Criando uma instância da clasif Pessoa
  const emolumento1 = new Emolumento(1000000, 0, 0);
  
  // Chamando o método da clasif para exibir informações
  pessoa1.exibirInformacoes();
  ;

  function MaiorValor(valorDeclarado, valorPoderPublico){
    //Notas Integrantes 3)
    if (valorDeclarado == null) valorDeclarado = 0;
    if (valorPoderPublico == null) 
    alert('Por favor informe o valor declarado pelo poder publico. na hipótese do valor venal atribuído pelo Município em sua planta de valores para a cobrança de tributos. como o IPTU e o ITBI');
    if(valorDeclarado < valorPoderPublico)
        return valorPoderPublico;
    else return valorDeclarado;
}