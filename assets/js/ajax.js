'use strict';

const constHamburguer = document.querySelector(".hamburguer");
const constNav = document.querySelector(".cabecalho-navegacao");
constHamburguer.addEventListener("click", () =>
    constNav.classList.toggle("active"),
);

document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    try {
        const href = elemento.getAttribute('href');
        const response = await fetch(href); //fetch é promise, vai retornar response se der certo

        if (response.status !== 200) throw new Error('Erroooo');

        const html = await response.text(); //text() é outra promise, vai retornar um html se der certo
        carregaConteudo(html); //carrega dados retornados
        constNav.classList.remove("active"); //fecha menu hamburguer
    } catch (e) {
        console.log(e);
    }
}

function carregaConteudo(response) {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = response;
}