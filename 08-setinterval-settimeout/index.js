// SetTimeout executa um bloco de código depois de um determinado tempo
// em milisegundos. Funciona de forma assíncrona

const timer = 2000

setTimeout(function() {
    alert("Olá")
}, timer)

const test = setTimeout(function() {
    alert("Teste")
}, timer)

// Remove uma função de setTimeout
clearTimeout(test)

// SetInterval executa um bloco de código a cada x milisegundos.
// Funciona de forma assíncrona

const interval = 2000

setInterval(function() {
    console.log("Executando a cada 2 segundos")
}, interval)

const nomeDaFuncao = setInterval(function() {
    console.log("Fugindo...")
}, interval)

// Remove uma função de setInterval
clearInterval(nomeDaFuncao)
