// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde 
// cada chave é um cliente e o valor é a soma de todos os seus total. 

const vendas = [
    { cliente: "Alice", total: 100 },
    { cliente: "Bob", total: 50 },
    { cliente: "Alice", total: 200 }
];

function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
        return acumulador;
    }, {});
}

const totalPorCliente = agruparPorCliente(vendas);
console.log(totalPorCliente); 