function calcula_multa(){
    var num1 = Number(document.getElementById("quilometragem").value);

    var resultado = document.getElementById("resultado");
    var multa = document.getElementById("multa");

    resultado.innerHTML = `Sua velocidade atual é de ${num1} km/h.`;

    const textoMulta = num1 > 100?
    "Velocidade acima do permitido. MULTADO!" : "Tudo certo.";

    multa.innerHTML = textoMulta;

}