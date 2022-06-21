/* Crie um novo projeto usando o template static do Code Sandbox e crie uma página que tenha 2 campos de texto com os rótulos 
Nome e Salário e 1 botão com o rótulo "Adicionar". O usuário deve digitar esses valores e ao clicar em adicionar, deve ser criado 
um objeto com essas propriedades e valores e deve ser adicionado a um array. Na sequência, deve mostrar na tela por meio de um 
elemento <li>. Deve ser exibido também quem ganha o maior salário e o total de salários pagos (utilize a função reduce).*/

const btn = document.querySelector("#button");


btn.addEventListener("click", () => {

    const inputN = document.querySelector("#nome");
    const inputS = document.querySelector("#salario");

    let pessoas = [{}];

    let pessoa = {
        nome: inputN.value,
        salario: inputS.value
    };
    
    pessoas.push(pessoa);

    length = pessoas.length;
    console.log(length);
    for(let i = 0; i < length; i++){
        console.log(i);
        const li = document.querySelector("#li");

        li.textContent = "Nome: " + pessoa.nome + "   Salário: " + pessoa.salario;
    }
    

});
