// Desestruturação é uma forma de declararar várias variáveis de uma vez,
// se baseando nos valores de um objeto ou array

// Desestruturação de objeto

let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade: 33 }

let { nome: nome, idade: idade, sobrenome: sobrenome } = pessoa

console.log(nome)
console.log(idade)
console.log(sobrenome)

// Desestruturação de array

const numeros = [1, 2, 3];

const [um, dois, tres] = numeros;

console.log(um)
console.log(dois)
console.log(tres)