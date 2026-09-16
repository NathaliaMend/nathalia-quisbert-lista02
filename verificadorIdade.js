const catalogo = {
    bebe: {
        mulher: "https://upload.wikimedia.org/wikipedia/pt/9/9d/Maggie_Simpson.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        homem: "https://static.wikia.nocookie.net/simpsons/images/0/0d/Baby_Gerald_Tapped_Out.png/revision/latest?cb=20151217014917",
    },
    crianca: {
        mulher: "https://upload.wikimedia.org/wikipedia/pt/6/67/Lisa_Simpson_personagem.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        homem: "https://upload.wikimedia.org/wikipedia/pt/a/aa/Bart_Simpson_200px.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",

    },
    adolescente: {
        mulher: "https://static.wikia.nocookie.net/simpsons/images/9/98/Lauraruthlaura.png/revision/latest?cb=20150617222807&path-prefix=pt",
        homem: "https://static.wikia.nocookie.net/simpsons/images/a/ad/250px-Simp_Jimbo.png/revision/latest?cb=20110215181331&path-prefix=pt",

    },
    adulto: {
        mulher: "https://upload.wikimedia.org/wikipedia/pt/0/0b/Marge_Simpson.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        homem: "https://upload.wikimedia.org/wikipedia/pt/0/02/Homer_Simpson_2006.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",

    },
    idoso: {
        mulher: "https://static.simpsonswiki.com/images/thumb/b/bc/Crazy_Cat_Lady.png/230px-Crazy_Cat_Lady.png",
        homem: "https://static.wikia.nocookie.net/simpsons/images/a/a3/426px-Hans_Moleman.png/revision/latest/smart/width/250/height/250?cb=20061024101135&path-prefix=pt",

    }
};

function verificaIdade() {
    let nascimento = document.getElementById("ano").value;
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - nascimento;
    let FE = faixaEtaria(idade);
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let sexoSelecionado = sexo.value
    let imgResultado = catalogo[FE][sexoSelecionado];
    let anos = singularOuPlural(idade);
    document.getElementById("resultado").src = imgResultado;
    document.getElementById("dados").innerText = `Detectamos ${sexoSelecionado} com ${idade} ${anos}`;

}
function faixaEtaria(idade) {
    if (idade > 0 && idade <= 2) {
        return "bebe";
    } if (idade > 2 && idade <= 12) {
        return "crianca";
    } if (idade > 12 && idade <= 17) {
        return "adolescente";
    } if (idade > 17 && idade <= 59) {
        return "adulto";
    } if (idade >= 60) {
        return "idoso";
    }
}
function singularOuPlural(idade) {
  return idade < 2 ? "ano" : "anos"; 
}

