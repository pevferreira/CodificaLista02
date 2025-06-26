// Dado  um  array  produtos  =  [{  nome,  preco  },  ...],  crie  uma  função  que 
// retorne  um  novo  array  apenas  com  os  nomes,  ordenados  por  preço 
// crescente, usando map, sort. 

const produtos = [
    { nome: "Caneta", preco: 2.50 },
    { nome: "Borracha", preco: 0.50 },
    { nome: "Lápis", preco: 1.00 },
];

function ordenarPorPreco(produtos) {
    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
    return produtosOrdenados.map(produto => produto.nome);
}

const nomesOrdenados = ordenarPorPreco(produtos);
console.log(nomesOrdenados); 