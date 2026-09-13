function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const numeroTabuada = document.getElementById("numeroTabuada");

    numeroTabuada.innerHTML = numero;
    resultado.innerHTML = ""; //limpa a div

    if (numero) {
        for (let i = 0; i <= 10; i++) {
            resultado.innerHTML += numero + "x" + i + "=" + numero * i + "<br>";

        }
    } else {
        numeroTabuada.innerHTML = "";
    }


}