// alert('Boas vindas ao jogo do nomero secreto');
// let numerosecreto = 29;
// let chute = prompt('Escolha um numero entre 1 e 30');

// if (numerosecreto == chute) {
//     console.log('Isso ai voce acertou o numero secreto')
// } 

// let mensagemDeBoasVindas = 'Boas vindas ao App';
// alert(mensagemDeBoasVindas);

// alert('Boas-vindas ao jogo do número secreto')
// let chute = prompt('Escolha um número de 1 e 10')

// let numeroSecreto = 4

// if (chute == numeroSecreto) {
//    alert('Acertou')
// }

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// let chute = prompt('Escolha um número entre 1 e 10');

// if (chute == numeroSecreto) {
//     console.log('Isso ai! Você descobriu o número secreto (5)');
// }

// alert('Bem-vindo ao jogo do número secreto')
// let chute = prompt('Escolha um número entre 1 e 10')

// let numeroSecreto = 4

// console.log(chute == numeroSecreto)
// if (chute == numeroSecreto) {
//     alert('Acertou')
// } else {
//     alert('O número secreto era ' + numeroSecreto)
// }

// let idade = prompt("Digite sua idade:");

// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade.");
// }


// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 9;
// console.log(numeroSecreto)
// let chute = prompt('Escolha um número entre 1 e 10');

// // se chute for igual ao número secreto
// if (chute == numeroSecreto) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
// } else {
//     alert('Você errou :(')
// }

// let contador = 1;

// while (contador < 4) {
//   console.log('Executando a iteração ' + contador);
//   contador = contador + 1;
// }


// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador--){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
// }

// let media = soma / qtdNumeros;

// console.log(media);

// let contador = 1;
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = parseInt(Math.random() * 10 + 1);
// console.log(numeroSecreto)
// let chute;
// let tentativas = 1;

// // enquanto chute não for igual ao n.s.
// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');
//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//        break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`)
//         } else {
//             alert(`O número secreto é maior que ${chute}`)
//         }
//         // tentativas = tentativas + 1
//         tentativas++
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }