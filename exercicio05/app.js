// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somar(){
    let numero1 = parseInt(prompt('Digite um número inteiro'));
    let numero2 = parseInt(prompt('Digite outro número inteiro'));
    let resultado = numero1 + numero2;

    alert(`O resultado de ${numero1} + ${numero2} é ${resultado}`);
}