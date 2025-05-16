function getVagaIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function exibirDetalhesDaVaga(programas) {
    const id = getVagaIdFromURL();
    const programa = programas.find(v => v.id === id);
    const container = document.getElementById("programa");

    if (!programa) {
        container.innerHTML = `
            <div class="alert alert-danger text-center">
                Vaga não encontrada.
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h2 class="card-title mb-3">${programa.nome}</h2>
        <p><strong>Local:</strong> ${programa.local}</p>
        <p><strong>Tipo:</strong> ${programa.tipo}</p>
        <p><strong>Descrição Completa:</strong> ${programa.descricao}</p>
        
    `;


    f
}

// Carregamento do JSON e exibição
document.addEventListener("DOMContentLoaded", () => {
    fetch("../../dados/dados.json")
        .then(response => response.json())
        .then(json => exibirDetalhesDaVaga(json.programas))
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
            document.getElementById("vaga-detalhe").innerHTML = `
                <div class="alert alert-danger text-center">
                    Erro ao carregar os dados da vaga.
                </div>
            `;
        });
});
