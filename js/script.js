// ativar links do menu
const links = document.querySelectorAll(".header nav li a")

function ativarLink(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)

// Ativar items do orçamento

const parametro = new URLSearchParams(location.search)

function ativarProduto(param) {
    const element = document.getElementById(param)
    if (element) {
        element.checked = true
    }
}

parametro.forEach(ativarProduto)

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
    const pergunta = event.target
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)

    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)
    resposta.classList.toggle("ativa")
}

function eventoPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas)

// Galeria de bicicletas

const bicicletas = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")


function trocarImagem(event) {
    const img = event.currentTarget
    if (matchMedia("(min-width: 950px)").matches) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem)
}

bicicletas.forEach(eventosGaleria)

// Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}