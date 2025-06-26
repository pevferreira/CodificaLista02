// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
// todas as palavras únicas e exibi-las em um array

const prompt = require('prompt-sync')();
const frase = prompt("Digite uma frase: ");

function palavrasUnicas(str) {

    const palavras = str.split(' ');
    const contagem = {};
    for (const palavra of palavras) {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
    }
    const unicas = [];
    for (const palavra in contagem) {
        if (contagem[palavra] === 1) {
            unicas.push(palavra);
        }
    }

    return unicas;
}

const resultado = palavrasUnicas(frase);
console.log(`Total de palavras únicas: ${resultado.length} : ${resultado.join(', ')}`);
