// Promise é uma forma de tratamento de sucesso ou falha de uma
// operação assíncrona e retorna algum valor.

new Promise((resolve, reject) => {

})

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver água')
            resolve()
        } else {
             console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')                                                   
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')