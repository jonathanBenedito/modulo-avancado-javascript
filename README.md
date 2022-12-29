# Índice das Aulas Javascript Avançado
📄 Link de acesso aos <a href="https://cord-delivery-7eb.notion.site/Javascript-Avan-ado-d6b32f765397458da254272a2397797d">resumos</a>. 

🖼 Link de acesso a <a href="https://jonathanbenedito.github.io/modulo-avancado-javascript/">página</a>.

<!-- TABLE OF CONTENTS -->
## Conteúdo
<ul>
    <li>
        <a href="#aula-01---filter">Aula 01 - Filter</a>
    </li>
    <li>
        <a href="#aula-02---map">Aula 02 - Map</a>
    </li>
    <li>
        <a href="#aula-03---reduce">Aula 03 - Reduce</a>
    </li>
    <li>
        <a href="#aula-04---interpolação-de-string">Aula 04 - Interpolação de String</a>
    </li>
    <li>
        <a href="#aula-05---desestruturação-de-objetos-e-arrays">Aula 05 - Desestruturação de Objetos e Arrays</a>
    </li>
    <li>
        <a href="#aula-06---operador-spread">Aula 06 - Operador Spread</a>
    </li>
    <li>
        <a href="#aula-07---parâmetro-rest">Aula 07 - Parâmetro REST</a>
    </li>
</ul>

## Aula 01 - Filter

```jsx
// filter serve para criar uma nova array com os valores que retornaram como
// verdadeiro na condição fornecida

let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
    return pessoa.idade === 33
})
```

## Aula 02 - Map

```jsx
// map transforma uma array em uma nova, para ser lidas ou chamadas
// de forma mais simplificada

**let nomeDasPessoas = pessoas.map(function(pessoa) {
    return pessoa.nome
})
```

## Aula 03 - Reduce

```jsx
// reduce executa uma função fornecida para cada elemento do array,
// resultando num único valor de retorno.

let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) {
    return somaOrdens + ordem.quantidade
}, 0)
```
## Aula 04 - Interpolação de String

```jsx
// Interpolação de string é uma forma de combinar string com variáveis 
// expressões aritiméticas ou até mesmo funções, sem usar o sinal de +

return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}`;
```

## Aula 05 - Desestruturação de Objetos e Arrays

```jsx
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
```

## Aula 06 - Operador Spread

```jsx
// Operador Spread permite concatenar arrays ou clonar objetos

// Concatenado arrays

let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']

const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

// Clonando objetos

const objeto1 = { nome: 'Roberto', idade: 33 }

const objetoClonado = { ...objeto1 }
console.log(objetoClonado)
```

## Aula 07 - Parâmetro REST

```jsx
// Parâmetro REST permite adicionar vários valores num parâmetro escolhido
// com 3 pontos, possibilitando repetir vários parâmetros ao chamar a função,
// desde que seja na última posição.

// OBS: O parâmetro passa a ser interpretado como uma array dentro da função.

function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabéns por ter chego ao módulo de Javascript avançado,", 'João', 'Roberto', 'Maria')
```
