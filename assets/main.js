const constHamburguer = document.querySelector(".hamburguer");
const constNav = document.querySelector(".cabecalho-navegacao");
const constAudio = document.querySelector(".audio");
constHamburguer.addEventListener("click", () =>
    constNav.classList.toggle("active")
);