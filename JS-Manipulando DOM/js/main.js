const controle = document.querySelectorAll("[data-controle]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatistica = document.querySelectorAll("[data-estatistica]");
const cor = document.querySelectorAll("[data-cor]");

cor.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaCores(evento.target.dataset.cor);
    })
})

function manipulaCores(selecao){
    const imagem = document.getElementById("robotron");

    if(selecao === "Amarelo"){
        imagem.src = "Robotron 2000/Robotron 2000 - Amarelo/robotron.png"
    }

    if(selecao === "Azul"){
        imagem.src = "Robotron 2000/Robotron 2000 - Azul/robotron.png"
    }

    if(selecao === "Branco"){
        imagem.src = "Robotron 2000/Robotron 2000 - Branco/robotron.png"
    }

    if(selecao === "Preto"){
        imagem.src = "Robotron 2000/Robotron 2000 - Preto/robotron.png"
    }

    if(selecao === "Rosa"){
        imagem.src = "Robotron 2000/Robotron 2000 - Rosa/robotron.png"
    }

    if(selecao === "Vermelho"){
        imagem.src = "Robotron 2000/Robotron 2000 - Vermelho/robotron.png"
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
})

function manipulaDados(operação, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operação === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca){
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}