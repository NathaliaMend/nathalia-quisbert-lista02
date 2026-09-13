function filtrar() {
    const nome = document.getElementById("nome").value;
    const lista = document.getElementById("lista");

    const nomes = Array.from(lista.children);

    for (let i = 0; i < nomes.length; i++) {

        if (nomes[i].textContent.toLowerCase().includes(nome.toLowerCase())) {

            nomes[i].style.display = "list-item";

        } else {

            nomes[i].style.display = "none";

        }
    }

}
