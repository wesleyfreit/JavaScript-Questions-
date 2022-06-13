/* 1°. Crie um novo projeto usando o template static do Code Sandbox e crie uma página que tenha 1 botão com o rótulo "Gerar". 
Para essa questão, crie um ouvinte de evento no referido botão que realiza uma chamada para uma função gerarNumero() que retorna 
um número aleatório usando a função Math.random(). Mostre o número gerado pra o usuário em uma <div> ou <p>. */

const botaoAleatorio = document.querySelector("div.box button");
let textInserir = document.querySelector("div.box h1");
let inserirNumero = document.querySelector("div.box p");

function gerarNumero () {
  return Math.floor(Math.random() * 10000)
};

botaoAleatorio.addEventListener("click", () => {
  textInserir.innerHTML = "O NUMERO GERADO FOI";
  inserirNumero.innerHTML = gerarNumero();
});

