// Interpolação de string é uma forma de combinar string com variáveis 
// expressões aritiméticas ou até mesmo funções, sem usar o sinal de +

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`;
}

console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));