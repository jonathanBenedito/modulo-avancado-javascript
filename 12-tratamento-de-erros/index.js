let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) => {

        // 'throw' serve para definir uma mensagem personalizada quando alguma 
        // condição for falsa.
        
        if (typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo booleano é aceito'

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
             const mensagemDeErro = 'É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água'                                                   
            reject(mensagemDeErro)
        }
    })
}

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

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// 'try' serve para dar uma resposta quando alguma promise for bem sucedida.

// 'catch' da uma resposta quando alguma promise cair no bloco else, ela é usada
// como forma de tratar erros com uma mensagem ou dar um comportamento personalizado
// que evita o erro fatal do sistema.

// 'finally' executa sempre após passar do try e catch.

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    } catch(err) {
        console.log(err)
    } finally {
        console.log('Finalizando o ritual de tomar o café, bora trabalhar')
    }
}

iniciarProcessoDeFazerCafe()