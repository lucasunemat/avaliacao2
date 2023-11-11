
document.addEventListener('DOMContentLoaded', e => {
    const botao = document.querySelector('#formulario-botao');
    console.log(botao);
    botao.addEventListener('submit', () => {
        console.log('Clicou no botão');
    });
});

