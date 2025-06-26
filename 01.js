// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
// formarem  uma  data  real  (meses  de  28–31  dias,  ano  bissexto  para 
// fevereiro) e false caso contrário. 

const prompt = require('prompt-sync')();

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mês: "));
const ano = parseInt(prompt("Digite o ano: "));

function ehDataValida(dia, mes, ano) {

    if (mes < 1 || mes > 12) {
        return false;
    }
    const diasPorMes = [
        31, ehBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }
    if (ano < 0) {
        return false;
    }
    return true;
}

function ehBissexto(ano) {
    return (ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0);
}
if (ehDataValida(dia, mes, ano)) {
    console.log("Data válida!");
} else {
    console.log("Data inválida!");
}