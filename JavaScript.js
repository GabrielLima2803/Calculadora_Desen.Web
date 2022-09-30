let btnNumeros = document.getElementsByClassName('styleBts');
let visor = document.getElementById('Bts_Resultado');


let operacao = null;
let valor1 = null;

for (let botao of btnNumeros){
    botao.addEventListener('click', clique_numero );
    
}
function clique_numero(event) {
   
    if (visor.innerHTML === '0') 
        visor.innerHTML = event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}
let btnAC = document.getElementById("Btns_AC");
btnAC.addEventListener('click', limpar_Visor);

function limpar_Visor(event) {
    visor.innerHTML = "0";
}
function realiza_operacao(operacao, valor1, valor2) {
    if (operacao === "+") {
        return valor1+valor2
    }
}

function clique_operador(event) {
    
    if (valor1 === null){
        valor1 = Number(visor.innerHTML);
        operacao = event.target.innerHTML;
        visor.innerHTML = operacao;
    }
    else{
       let valor2 = Number(visor.innerHTML);
        visor.innerHTML = realiza_operacao(operacao, valor1, valor2)
        valor1 = Number(visor.innerHTML);  
    }
    
}


/*let Btn_Adicao = document.getElementById('Btn_Adicao');
let Btn_Subtracao = document.getElementById('Btn_Subtracao');
let Btn_Multiplicacao = document.getElementById('Btn_Multiplicacao');
let Btn_Divisao = document.getElementById('Btn_Divisao')*/