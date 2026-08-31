function calcular() {

    let numero1 = Number(document.getElementById("campo1").value);
    let numero2 = Number(document.getElementById("campo2").value);
    let operacao = document.getElementById("operacao").value;

    let resultado;

    if (operacao == "+") {
        resultado = numero1 + numero2;
    }

    else if (operacao == "-") {
        resultado = numero1 - numero2;
    }

    else if (operacao == "*") {
        resultado = numero1 * numero2;
    }

    else if (operacao == "/") {

        if (numero2 == 0) {
            resultado = "Não é possível dividir por zero!";
        } else {
            resultado = numero1 / numero2;
        }

    }

    document.getElementById("resultado").innerText = resultado;
}