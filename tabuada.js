function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const numeroTabuada = document.getElementById("numeroTabuada");

    numeroTabuada.innerHTML = numero;
    if (numero) {
        for (let i = 0; i <= 10; i++) {
            document.getElementById("resultado").innerHTML += numero + "x" + i + "=" + numero * i + "<br>";

        }
    } else {
        numeroTabuada.innerHTML = "";
    }


}