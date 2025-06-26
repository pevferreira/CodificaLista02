// Implemente  function  memoize(fn)  que  armazene  em  cache  chamadas 
// anteriores de fn (por argumentos), retornando resultados instantâneos em 
// repetidas invocações. 


function soma(a, b) {
    return a + b;
}
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const chave = JSON.stringify(args);
        if (cache[chave] !== undefined) {
            console.log("Retornando do cache:", chave);
            return cache[chave];
        }

        console.log("Calculando novo resultado para:", chave);
        const resultado = fn.apply(this, args);
        cache[chave] = resultado;

        return resultado;
    };
}

const somaMemo = memoize(soma);
console.log(somaMemo(1, 2));
console.log(somaMemo(1, 2));