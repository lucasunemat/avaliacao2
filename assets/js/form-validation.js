/*
   * Código abaixo retorna: form-validation.js:6 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
     at form-validation.js:6:7
*/

const botao = document.querySelector('#formulario-botao');
botao.addEventListener('click', function(evento) {
    console.log('Clicou no botão')
});
