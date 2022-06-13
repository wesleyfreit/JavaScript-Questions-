/*2° Crie um novo projeto usando o template static do Code Sandbox e crie uma página que tenha 2 campos de texto 
com os seguintes rótulos: base e expoente, e 1 botão com o rótulo "Calcular". Para essa questão, crie um ouvinte 
de evento no referido botão que busca os valores digitados e realiza uma chamada para uma função 
calcularPotencia(base, expoente) que você irá implementar usando arrow function e que retorna o resultado da 
potenciação usando a função Math.pow(). Mostre o número gerado para o usuário em uma <div> ou <p>. */

const botaoAleatorio = document.querySelector("div.box button");
const inserirNumero = document.querySelector("div.box #result");
const base = document.querySelector("div.box #n1");
const expoente = document.querySelector("div.box #n2");


const calcularPotencia = (base, expoente) => Math.pow(base.value, expoente.value);

botaoAleatorio.addEventListener("click", () => {
  inserirNumero.innerHTML = calcularPotencia(n1,n2);
});

