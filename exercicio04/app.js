// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function botãoPrompt(){
    let cidadeDoBrasil = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidadeDoBrasil} e lembrei de voce`);
}