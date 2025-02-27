//Obtem os elementos do DOM

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

//Variavel resultado
const resultado = document.getElementById("resultado");

function limparCampos() {
    valor1.value = "";
    valor2.value = "";
}
//Função tempo
function tempo() {
    setTimeout(function () {
        resultado.innerHTML = 0;
    }, 2000);
}

//Criando Funcão SOMA
function somar(event) {
    event.preventDefault();
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);

    resultado.innerHTML = resultadoSoma;

    //Lmpar campos
    limparCampos();

}

//Função sub

function sub(event){
    event.preventDefault();
    let resultadoSub =Number(valor1.value) -Number (valor2.value);
    resultado.innerHTML= resultadoSub;

    //Lmpar campos
    limparCampos();

    //Função tempo
    tempo();
}