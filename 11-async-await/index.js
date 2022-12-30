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

// async faz com que uma função seja executada de forma assíncrona.

async function iniciarProcessoDeFazerCafe() {

    // await espera uma função ser finalizada antes de executar o restante
    // do bloco de código

    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizando o ritual de tomar o café, bora trabalhar')
}

iniciarProcessoDeFazerCafe()