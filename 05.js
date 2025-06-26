// Crie function debounce(fn, delay) que receba uma função fn e um delay 
// em  ms,  retornando  uma  nova  função  que  só  executa  fn  se  não  for 
// chamada novamente dentro do intervalo.

const prompt = require('prompt-sync')();

// Função debounce exatamente como no enunciado
function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
function acaoDoUsuario() {
    console.log('Ação executada após o delay!');
}

// Usuário define o tempo de delay
const tempoDelay = parseInt(prompt('Digite o tempo de delay em milissegundos: '));