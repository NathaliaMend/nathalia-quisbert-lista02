// function mudaTema() {

//     let temaAtual = document.body.style.backgroundColor;

//     if (temaAtual === "black") {
//         document.body.style.backgroundColor = "white";
//         document.getElementById("text title").style.color = "black";
//     } else {
//         document.body.style.backgroundColor = "black";
//         document.getElementById("text title").style.color = "white";
//     }
// }

/* UTILIZANDO OPERADOR TERNARIO */
function mudaTema() {
    const body = document.body;
    const titulo = document.getElementById("text title");

    const fundo = body.style.backgroundColor === "black" ? "white" : "black";

    const corTexto = fundo === "black" ? "white" : "black";

    body.style.backgroundColor = fundo;
    titulo.style.color = corTexto;
}