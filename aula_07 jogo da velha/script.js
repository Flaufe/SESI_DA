let nome1;
let nome2;

let simbolo1;
let simbolo2;

let jogador;
let simbolo;

let casas = ["", "", "", "", "", "", "", "", ""];


function iniciar() {

    nome1 = document.getElementById("nome1").value;
    nome2 = document.getElementById("nome2").value;

    simbolo1 = document.getElementById("simbolo1").value;
    simbolo2 = document.getElementById("simbolo2").value;

    jogador = nome1;
    simbolo = simbolo1;

    document.getElementById("vez").innerText =
        "Vez de: " + jogador;
}


function jogar(posicao) {

    if (casas[posicao] != "") {
        return;
    }

    casas[posicao] = simbolo;

    document.getElementById("casa" + posicao).innerText = simbolo;


    if (verificarVitoria()) {

        document.getElementById("resultado").innerText =
            jogador + " venceu!";

        return;
    }


    if (jogador == nome1) {

        jogador = nome2;
        simbolo = simbolo2;

    } else {

        jogador = nome1;
        simbolo = simbolo1;
    }


    document.getElementById("vez").innerText =
        "Vez de: " + jogador;
}


function verificarVitoria() {

    let combinacoes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let c of combinacoes) {

        if (
            casas[c[0]] != "" &&
            casas[c[0]] == casas[c[1]] &&
            casas[c[0]] == casas[c[2]]
        ) {
            return true;
        }
    }

    return false;
}


function reiniciar() {

    casas = ["", "", "", "", "", "", "", "", ""];

    for (let i = 0; i < 9; i++) {
        document.getElementById("casa" + i).innerText = "";
    }

    document.getElementById("resultado").innerText = "";

    jogador = nome1;
    simbolo = simbolo1;

    document.getElementById("vez").innerText =
        "Vez de: " + jogador;
}