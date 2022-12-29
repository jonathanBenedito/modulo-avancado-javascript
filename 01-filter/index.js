let pessoas = [
    { nome: 'Roberto', idade: 33 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Raphael', idade: 27 },
]

// filter serve para criar uma nova array com os valores que retornaram como
// verdadeiro na condição fornecida

let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
    return pessoa.idade === 33
})

console.log(pessoasComIdadeDe33Anos)