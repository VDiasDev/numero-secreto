let numeroLimite = 10
let numerosSorteados = [];
let numero_secreto = gerar_numero_aleatorio();
let tentativas = 1;



function exibirTextoNaTela( _tag, _texto)
{
    let campo = document.querySelector(_tag);
    campo.innerHTML = _texto;
    responsiveVoice.speak(_texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial()
{
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e " + numeroLimite);
}

exibirMensagemInicial();



function verificarChute()
{
    let chute = document.querySelector("input").value;
    if (chute == numero_secreto)
    {
        exibirTextoNaTela("h1", "ACERTOU!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você descobriu o número secreto com " + tentativas + " " + palavraTentativa + "!";
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    {
        if (chute > numero_secreto)
        {
            exibirTextoNaTela("p", "O numero secreto é menor!");
        }
        else
        {
            exibirTextoNaTela("p", "O numero secreto é maior!");
        }
        tentativas ++
        limparCampo();
    }
}

function gerar_numero_aleatorio() 
{
    //o return retorna algo para a função/ nesse caso ele atribui um numero aleatório
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);    
    let quantidadeDeElementosNaLista = numerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) 
    {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido))
    {
        return gerar_numero_aleatorio();
    }
    else
    {
        numerosSorteados.push(numeroEscolhido)
        console.log(numerosSorteados);
        return numeroEscolhido;

    }
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo()
{
    numero_secreto = gerar_numero_aleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}













