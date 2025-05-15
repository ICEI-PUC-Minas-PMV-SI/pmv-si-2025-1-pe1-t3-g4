function getVagaIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function exibirDetalhesDaVaga(vagas) {
    const id = getVagaIdFromURL();
    const vaga = vagas.find(v => v.id === id);
    const container = document.getElementById("vaga-detalhe");

    if (!vaga) {
        container.innerHTML = `
            <div class="alert alert-danger text-center">
                Vaga não encontrada.
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h2 class="card-title mb-3">${vaga.titulo}</h2>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
        <p><strong>Salário:</strong> ${vaga.salario}</p>
        <p><strong>Descrição Completa:</strong> ${vaga.descricao}</p>
        <div class="d-flex justify-content-end mt-4">
            <button id="btn-candidatar" class="btn btn-primary">
                Candidatar-se
            </button>
        </div>
    `;

    document.getElementById("btn-candidatar").addEventListener("click", () => {
        const usuario = JSON.parse(localStorage.getItem("usuarioLogado")); // Verifique como está salvo

        if (!usuario) {
            Swal.fire({
                icon: 'warning',
                title: 'Faça login para se candidatar',
                text: 'Você precisa estar logado para se candidatar a uma vaga.',
                confirmButtonText: 'Ok'
            });
            return;
        }

        // Associar vaga ao usuário
        let candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};

        if (!candidaturas[usuario.id]) {
            candidaturas[usuario.id] = [];
        }

        if (!candidaturas[usuario.id].includes(id)) {
            candidaturas[usuario.id].push(id);
            localStorage.setItem("candidaturas", JSON.stringify(candidaturas));

            Swal.fire({
                icon: 'success',
                title: 'Candidatura registrada!',
                text: 'Você se candidatou com sucesso à vaga.',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Você já se candidatou!',
                text: 'Você já está cadastrado nessa vaga.',
                confirmButtonText: 'OK'
            });
        }
    });
}


// 🔄 Carrega o JSON da pasta dados
document.addEventListener("DOMContentLoaded", () => {
    fetch("../../dados/dados.json")
        .then(response => response.json())
        .then(json => exibirDetalhesDaVaga(json.vagas))
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
            document.getElementById("vaga-detalhe").innerHTML = `
                <div class="alert alert-danger text-center">
                    Erro ao carregar os dados da vaga.
                </div>
            `;
        });
});
