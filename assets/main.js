const constHamburguer = document.querySelector(".hamburguer");
const constNav = document.querySelector(".cabecalho-navegacao");
constHamburguer.addEventListener("click", () =>
    constNav.classList.toggle("active"),
);