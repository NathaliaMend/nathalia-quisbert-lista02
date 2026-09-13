function destacar() {
    const nome = document.getElementById("nome").value;
    const lista = document.getElementById("lista");

    const nomes = Array.from(lista.children);

    for (i = 0; i < nomes.length; i++) {
        if (nome == nomes[i].textContent) {
            nomes[i].style.color = 'red'
        }
        else {
            nomes[i].style.color = 'black'
        }
    }

}