// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando 
// um Error, e n === 0 retornando 1. 

const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite o fatorial: "));
function fatorial(n) {

    if (n < 0) {
        throw new Error("Erro");
    }

    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(`Resultado: ${fatorial(n)}`);