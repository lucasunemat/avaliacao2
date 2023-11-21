const constHamburguer = document.querySelector(".hamburguer");
const constNav = document.querySelector(".cabecalho-navegacao");
constHamburguer.addEventListener("click", () =>
    constNav.classList.toggle("active"),
);

function menu(link) {
    fetch('./pages/' + link + '.html')
        .then(response => response.text())
        .then(html => document.querySelector('#conteudo-pagina').innerHTML = html)
}

function voltarInicio(link) {
    fetch('../' + link + '.html')
        .then(response => response.text())
        .then(html => {
            const divTemporaria = document.createElement('div');
            divTemporaria.innerHTML = html;

            const conteudoMain = divTemporaria.querySelector('main');
            if (conteudoMain) {
                document.querySelector('#conteudo-pagina').innerHTML = conteudoMain.innerHTML;
                location.reload();
            } else {
                console.error('Elemento <main> não encontrado na página.');
            }
        })
}

