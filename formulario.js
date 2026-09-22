// Pega todas as perguntas
const perguntas = document.querySelectorAll(".pergunta");


// Botão de enviar
const botao = document.getElementById("botao");


// Quando clicar no botão
botao.addEventListener("click", function () {

    // Pega o nome
    const nome = document.getElementById("nome").value;

    // Pega a data
    const data = document.getElementById("data").value;


    // Verifica se o nome foi preenchido
    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }


    // Verifica se a data foi preenchida
    if (data === "") {
        alert("Digite a data da tarefa!");
        return;
    }


    // Verifica se todas as perguntas foram respondidas
    for (let i = 0; i < perguntas.length; i++) {

        const resposta =
            perguntas[i].querySelector(
                "input[type='radio']:checked"
            );

        if (resposta === null) {

            alert(
                "Responda a questão " +
                (i + 1) +
                " antes de enviar!"
            );

            return;
        }
    }


    // Respostas corretas
    const respostasCorretas = [
        "c",
        "a",
        "d",
        "b",
        "c",
        "a",
        "d",
        "b",
        "a",
        "c"
    ];


    // Contadores
    let acertos = 0;
    let erros = 0;


    // Texto do arquivo
    let texto = "RESULTADO DO QUESTIONÁRIO - HTML E CSS\n";

    texto += "========================================\n\n";

    texto += "Nome: " + nome + "\n";
    texto += "Data: " + data + "\n\n";

    texto += "RESULTADO DAS QUESTÕES\n";
    texto += "========================================\n\n";


    // Percorre as perguntas
    perguntas.forEach(function (pergunta, indice) {

        // Pega a resposta marcada
        const respostaSelecionada =
            pergunta.querySelector(
                "input[type='radio']:checked"
            );


        // Pega o valor da resposta
        const resposta = respostaSelecionada.value;


        // Verifica se acertou
        if (resposta === respostasCorretas[indice]) {

            acertos++;

            texto +=
                "Questão " +
                (indice + 1) +
                ": ACERTO\n";

        } else {

            erros++;

            texto +=
                "Questão " +
                (indice + 1) +
                ": ERRO\n";
        }
    });


    // Resultado final
    texto += "\n";
    texto += "========================================\n";
    texto += "RESULTADO FINAL\n";
    texto += "========================================\n\n";

    texto += "Nome: " + nome + "\n";
    texto += "Data: " + data + "\n";
    texto += "Acertos: " + acertos + "\n";
    texto += "Erros: " + erros + "\n";
    texto += "Total de questões: " + perguntas.length + "\n";


    // Cria o arquivo TXT
    const arquivo = new Blob(
        [texto],
        {
            type: "text/plain;charset=utf-8"
        }
    );


    // Cria o link para baixar
    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);

    link.download = "resultado_questionario.txt";


    // Adiciona o link temporariamente na página
    document.body.appendChild(link);


    // Faz o download
    link.click();


    // Remove o link da página
    document.body.removeChild(link);


    // Libera o endereço temporário
    URL.revokeObjectURL(link.href);


    // Mostra o resultado
    alert(
        "Questionário enviado!\n\n" +
        "Acertos: " + acertos + "\n" +
        "Erros: " + erros
    );

});