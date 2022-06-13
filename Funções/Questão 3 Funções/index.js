/*3° Faça um fork desse exemplo de código no Code Sandbox ou copie o código para sua máquina. Nele, você irá 
encontrar um campo de texto onde o usuário vai digitar a temperatura em escala Celsius. O que deve ser feito:
Crie duas funções, uma para converter a temperatura para Fahrenheit e outra para converter para Kelvin.
Crie um ouvinte de evento 'keyup' no campo de texto para atualizar os elementos #temp-fahrenheit e #temp-kelvin 
com as temperaturas nas respectivas escalas a medida que o usuário digita um valor numérico.
Caso o usuário não tenha digitado nada, o valor das temperaturas após a conversão deve ser uma mensagem pedindo 
para o usuário digitar um valor. */

const tempC = document.querySelector("div.box #input_celsius");
const tempF = document.querySelector("div.box #temp-fahrenheit");
const tempK = document.querySelector("div.box #temp-kelvin");

const tempFah = (tempC) => (tempC * (9/5)) + 32;
const tempKel = (tempC) => (tempC * 1 + (273.15));
/*multipliquei tempC *1 pois o resultado final lá embaixo quando eu enviava para o html estava
  concatenando o valor do tempC com 273.15, não sei o porque, ainda vou descobrir. */
tempC.addEventListener("keyup", () => {
    //estou convertendo o valor que vem do html imput_celsius para value, valor numérico.
    let convert = input_celsius.value;

    /* se tempC.value for diferente de true, ! , então envie a solicitação para inserir valor*/
    /* e se for true então execute o código lá em else */
    if(!tempC.value){
        tempF.innerHTML = "Insira um Valor";
        tempK.innerHTML = "Insira um Valor";
    }
    else{
        /* aqui há o uso da função toFixed(2) que está fixado o valor númerico a ter duas casas
        decimais após a vírcula, mas acontece que o valor retornado em toFixed é string, então
        se utiliza a função parseFloat() por fora da toFixed() para passar a float novamente.*/
        tempF.innerHTML = parseFloat(tempFah(convert).toFixed(2)) + "° F";
        tempK.innerHTML = parseFloat(tempKel(convert).toFixed(2)) + "° K";
    }
});