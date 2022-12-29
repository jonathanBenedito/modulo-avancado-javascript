let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 },
]

// map transforma uma array em uma nova, para ser lidas ou chamadas
// de forma mais simplificada

let nomeDasPessoas = pessoas.map(function(pessoa) {
    return pessoa.nome
})

console.log(nomeDasPessoas)