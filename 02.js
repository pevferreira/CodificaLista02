// Escreva  um  script  que  gere um número aleatório de 1 a 100 e peça ao 
// usuário,  para  adivinhar.  Use  while  para  repetir  até  acertar,  contando 
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado

const prompt = require('prompt-sync')();

const num = Math.floor(Math.random() * 100) + 1;
let tentativas = 1;
let palpite = parseInt(prompt("Digite um número entre 1 e 100: "));

while (palpite !== num) {
    if (palpite < num) {
        console.log("O número é maior");
    } else if (palpite > num) {
        console.log("O número é menor");
    }

    tentativas++;
    palpite = parseInt(prompt("Tente novamente: "));
}

console.log(`Você ACERTOU em ${tentativas} tentativas!`);