let ordens = [
    { cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34' },
    { cliente: 'Raphael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34' },
]

// reduce executa uma função fornecida para cada elemento do array,
// resultando num único valor de retorno.

let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) {
    return somaOrdens + ordem.quantidade
}, 0)

console.log(quantidadeDeOrdens)