let btnNumeros = document.getElementsByClassName('styleBts');
let visor = document.getElementById('Bts_Resultado');

let operacao = null;
let valor1 = null;

for (let botao of btnNumeros) {
    botao.addEventListener('click', clique_numero);

}
function clique_numero(event) {


    if (visor.innerHTML === '0' || isNaN(visor.innerHTML))
        visor.innerHTML = event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName("Btn_operador");




let btnAC = document.getElementById("Btns_AC");
btnAC.addEventListener('click', limpar_Visor);

function limpar_Visor(event) {
    visor.innerHTML = "0";
}

for (let botao of btnOperadores) {
    botao.addEventListener("click", clique_operador);
}

let ApgUm = document.getElementById("Apagar-Um");

function ApagarUm(event) {
    
}

function clique_operador(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor1 === null) {
            valor1 = Number(visor.innerHTML);

        }
        else {
            visor.innerHTML = realiza_operacao(operacao, valor1, Number(visor.innerHTML))
            valor1 = Number(visor.innerHTML);
        }
    }

    operacao = event.target.innerHTML

    visor.innerHTML = event.target.innerHTML

}

const Btn_Igual = document.getElementById(`Bts_Igual`)

Btn_Igual.addEventListener(`click`, calcula_resultado)

function calcula_resultado(event) {
    if (valor1 != null && operacao != null && isNaN(visor.innerHTML) === false) {

        visor.innerHTML = realiza_operacao(valor1, operacao, Number(visor.innerHTML));
        valor1 = null;
        operacao = null;
    }
}
function realiza_operacao(valor1, operacao, valor2) {
    if (operacao === "+") {
        return valor1 + valor2
    }
    else if (operacao === "-") {
        return valor1 - valor2
    }
    else if (operacao === "*") {
        return valor1 * valor2
    }
    else if (operacao === "÷") {
        return valor1 / valor2
    }
}

let body = document.getElementsByTagName("body")[0];

body.addEventListener("keydown", pressionouTecla);

function pressionouTecla(event){
    if(event.key === "*"){
        document.getElementsByClassName("botao_Mult")[0].click();
    }else if(event.key === "9"){
        document.getElementsByClassName("numero9")[0].click();
    }else if(event.key === "8"){
        document.getElementsByClassName("numero8")[0].click();
    }else if(event.key === "7"){
        document.getElementsByClassName("numero7")[0].click();
    }else if(event.key === "6"){
        document.getElementsByClassName("numero6")[0].click();
    }else if(event.key === "5"){
        document.getElementsByClassName("numero5")[0].click();
    }else if(event.key === "4"){
        document.getElementsByClassName("numero4")[0].click();
    }else if(event.key === "3"){
        document.getElementsByClassName("numero3")[0].click();
    }else if(event.key === "2"){
        document.getElementsByClassName("numero2")[0].click();
    }else if(event.key === "1"){
        document.getElementsByClassName("numero1")[0].click();
    }else if(event.key === "0"){
        document.getElementsByClassName("numero0")[0].click();
    }else if(event.key === "Backspace"){
        document.getElementById("Btns_AC").click();
    }else if(event.key === "/"){
        document.getElementsByClassName("botao_Div")[0].click();
    }else if(event.key === "+"){
        document.getElementsByClassName("botao_Add")[0].click();
    }else if(event.key === "-"){
        document.getElementsByClassName("botao_Sub")[0].click();
    }else if(event.key === "Enter"){
        document.getElementById("Bts_Igual").click();
    }
    else if(event.key === "."){
        document.getElementById("Btn-ponto").click();
    }

} 
let BtnApagaUm = document.getElementById("Apagar-Um");
BtnApagaUm.addEventListener("click", apagaUm)

function apagaUm(event) {
    visor.innerHTML = visor.innerHTML.substring(0, visor.innerHTML.length - 1);
}





let BtnPonto = document.getElementById("Btn-ponto");
BtnPonto.addEventListener("click", clique_ponto)


function clique_ponto(event) {
    
    if (isNaN(visor.innerHTML) === true) {
        visor.innerHTML = '.';
    }
    else if (isNaN(visor.innerHTML+'.') === false){
        visor.innerHTML = visor.innerHTML + '.';
    }
}