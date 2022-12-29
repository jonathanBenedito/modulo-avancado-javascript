// Operador Spread permite concatenar arrays ou clonar objetos

// Concatenado arrays

let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']

const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

// Clonando objetos

const objeto1 = { nome: 'Roberto', idade: 33 }

const objetoClonado = { ...objeto1 }
console.log(objetoClonado)