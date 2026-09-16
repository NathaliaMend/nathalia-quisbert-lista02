function confirmaPresenca() {

    let marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    let nomesMarcados = Array.from(marcados).map(caixinha => caixinha.value);

    let naoMarcados = document.querySelectorAll('input[type="checkbox"]:not(:checked)')
    let nomesNaoMarcados = Array.from(naoMarcados).map(caixinha => caixinha.value);

    let presentes = nomesMarcados.join(", ");
    let ausentes = nomesNaoMarcados.join(", ");

    let resultado = document.getElementById("presentes")
    resultado.innerText = (presentes || "Nenhum");
    resultado.style.color = "green";

    let resultado2 = document.getElementById("ausentes")
    resultado2.innerText = (ausentes || "Nenhum");
    resultado2.style.color = "red";
}

/* FUNCAO MAIS SIMPLIFICADA */
// function confirmaPresenca() {
//     // 1. Busca e extrai os nomes dos Presentes diretamente
//     const presentes = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value).join(", ");
    
//     // 2. Busca e extrai os nomes os Ausentes diretamente
//     const ausentes = [...document.querySelectorAll('input[type="checkbox"]:not(:checked)')].map(c => c.value).join(", ");

//     // 3. Atualiza o elemento dos presentes (Texto e Cor)
//     const elPresentes = document.getElementById("presentes");
//     elPresentes.innerText = presentes || "Nenhum";
//     elPresentes.style.color = "green";

//     // 4. Atualiza o elemento do ausentes (Texto e Cor)
//     const elAusentes = document.getElementById("ausentes");
//     elAusentes.innerText = ausentes || "Nenhum";
//     elAusentes.style.color = "red";
// }
