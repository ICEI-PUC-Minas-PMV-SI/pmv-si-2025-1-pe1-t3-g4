document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Função para salvar os dados no localStorage
    function salvarVaga() {
        // Obter dados do formulário
        const vaga = {
            titulo: document.getElementById('titulo').value,
            localizacao: document.getElementById('localizacao').value,
            descricao: document.getElementById('descricao').value,
            tipo: document.getElementById('tipo').value,
            salario: document.getElementById('salario').value,
            requisitos: document.getElementById('requisitos').value,
            beneficios: document.getElementById('beneficios').value,
            arquivo: document.getElementById('arquivo').files[0]?.name || "Nenhum arquivo enviado",
            dataCadastro: new Date().toISOString()  // Adiciona data e hora atual

        };

        // Verificar se os dados são válidos
        if (vaga.titulo && vaga.localizacao && vaga.descricao && vaga.tipo && vaga.requisitos && vaga.beneficios) {
            // Recuperar vagas existentes ou criar um array vazio
            const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

            // Adicionar nova vaga ao array
            vagas.push(vaga);

            // Salvar o array no localStorage
            localStorage.setItem("vagasEmpresa", JSON.stringify(vagas));

            // Exibir mensagem de sucesso
            alert("Vaga cadastrada com sucesso!");
            form.reset(); // Limpar o formulário
        } else {
            // Se algum campo obrigatório não foi preenchido
            alert("Por favor, preencha todos os campos obrigatórios!");
        }
    }

    // Evento para salvar a vaga ao submeter o formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impedir o envio padrão do formulário
        salvarVaga(); // Salvar vaga
    });
});
