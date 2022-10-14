// Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
// 2 x 0 = 0
// 2 x 1 = 2
// ....
// 2 x 10 = 20

// O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

// dica: de uma olhadinha no for.

// Realize o commit do exercício resolvido.
let numeroInformado = parseInt(prompt('Você deseja saber a tabuada de qual valor?'));
let tabuada = 0;

    for(i = 1; i <= 10; i++){
    tabuada = numeroInformado * i;
    console.log(`${numeroInformado} * ${i} = ${tabuada}`)
        }
    
