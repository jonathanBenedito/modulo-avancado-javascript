// Parâmetro REST permite adicionar vários valores num parâmetro escolhido
// com 3 pontos, possibilitando repetir vários parâmetros ao chamar a função,
// desde que seja na última posição.

// OBS: O parâmetro passa a ser interpretado como uma array dentro da função.

function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabéns por ter chego ao módulo de Javascript avançado,", 'João', 'Roberto', 'Maria')