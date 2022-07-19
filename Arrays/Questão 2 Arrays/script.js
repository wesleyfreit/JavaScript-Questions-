/* Crie um novo projeto usando o template static do Code Sandbox e crie uma pÃ¡gina que tenha 2 campos de texto com os rÃ³tulos 
Nome e SalÃ¡rio e 1 botÃ£o com o rÃ³tulo "Adicionar". O usuÃ¡rio deve digitar esses valores e ao clicar em adicionar, deve ser criado 
um objeto com essas propriedades e valores e deve ser adicionado a um array. Na sequÃªncia, deve mostrar na tela por meio de um 
elemento <li>. Deve ser exibido tambÃ©m quem ganha o maior salÃ¡rio e o total de salÃ¡rios pagos (utilize a funÃ§Ã£o reduce).*/

const btn = document.querySelector("#button");


btn.addEventListener("click", () => {

    const inputN = document.querySelector("#nome");
    const inputS = document.querySelector("#salario");

    let array = [];

    let pessoa = lerDados();
        
    function lerDados() {
        let pessoa = {};
        pessoa.nome = inputN.value;
        pessoa.salario = inputS.value;

        return pessoa;
    }
    array.push(pessoa);
    
    

    length = pessoas.length;

     ){
        const li = document.querySelector("#li");

        li.textContent = "Nome: " + pessoas.nome + "  ||   SalÃ¡rio: " + pessoas.salario;
    }
    

});
