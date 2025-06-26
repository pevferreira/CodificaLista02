// Escreva duas funções: 
// ○  paresParaObjeto(pares) recebe um array de pares [ [chave, 
// valor], ... ] e retorna o objeto equivalente. 
// ○  objetoParaPares(obj)  faz  o  inverso,  retornando  um  array  de 
// pares. 

const pares = [
    { chave: "nome", valor: "Alice" },
    { chave: "idade", valor: 25 }
];

function paresParaObjeto(pares) {
    return pares.reduce((obj, par) => {
        obj[par.chave] = par.valor;
        return obj;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj).map(([chave, valor]) => ({
        chave,
        valor
    }));
}


const objeto = paresParaObjeto(pares);
console.log(objeto);

const paresConvertidos = objetoParaPares(objeto);
console.log(paresConvertidos); 