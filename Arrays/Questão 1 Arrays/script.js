/* 1° Crie um novo projeto usando o template static do Code Sandbox e crie uma página que tenha 1 campo de texto e 1 botão com o rótulo "Achar". 
O usuário deve digitar um conjunto de números separados por vírgula e ao clicar no botão, deve ser mostrado em um elemento na tela o maior e 
o menor número digitado. Para essa questão, crie um ouvinte de evento no referido botão que busca os valores digitados e os separa usando o 
método split. */

const botao = document.querySelector("#button");
botao.addEventListener("click", () => {

    let name = document.querySelector("#insert"); 
    let value = name.value;

    let arrayN = value.split(",");
    let maior = arrayN[0];
    let menor = arrayN[0];

    length = arrayN.length;

    for(let i = 0; i<length; i++){

        if(parseInt(arrayN[i]) > maior)
            maior = arrayN[i];

        if(menor > parseInt(arrayN[i]))
            menor = arrayN[i];     
    }

    const inserirMaior = document.querySelector("#p2");
    const inserirMenor = document.querySelector("#p1");

    inserirMaior.textContent = "Maior = " + maior;
    inserirMenor.textContent = "Menor = " + menor;
});
