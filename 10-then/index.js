// then executa um bloco de código, caso o retorno de uma promise
// for resolvida

new Promise((resolve, reject) => {}).then(console.log('Olá!'))

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
             console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')                                                   
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: terminei de lavar a xícara')
        resolve(true)
    })
}

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
.then(() => {
    return passarOCafe();
})
.then(() => {
    return tomarCafe();
})
.then(() => {
    return lavarXicara();
})
.then(() => {
    return console.log('Finalizado ritual do café, bora trabalhar');
})
