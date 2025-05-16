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

    const usuario = JSON.parse(localStorage.getItem("loggedInUser"));
    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
    const usuarioCandidaturas = usuario && candidaturas[usuario.id] ? candidaturas[usuario.id] : [];

    // Verifica se usuário já se candidatou a essa vaga
    const jaCandidatado = usuarioCandidaturas.includes(id);

    container.innerHTML = `
        <h2 class="card-title mb-3">${vaga.titulo}</h2>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
        <p><strong>Salário:</strong> ${vaga.salario}</p>
        <p><strong>Descrição Completa:</strong> ${vaga.descricao}</p>
        <div class="d-flex justify-content-end mt-4">
            <button id="btn-candidatar" class="btn btn-${jaCandidatado ? 'danger' : 'primary'}">
                ${jaCandidatado ? 'Cancelar candidatura' : 'Candidatar-se'}
            </button>
        </div>
    `;

    const btn = document.getElementById("btn-candidatar");

    if (!usuario) {
        btn.addEventListener("click", () => {
            Swal.fire({
                icon: 'warning',
                title: 'Faça login para se candidatar',
                text: 'Você precisa estar logado para se candidatar a uma vaga.',
                confirmButtonText: 'Ok'
            });
        });
        return; // Não adiciona mais eventos pois usuário não está logado
    }

    if (jaCandidatado) {
        // Botão para cancelar candidatura
        btn.addEventListener("click", () => {
            Swal.fire({
                title: 'Tem certeza que deseja cancelar a inscrição desta vaga?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, cancelar',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Remove candidatura do localStorage
                    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
                    const userId = usuario.id;
                    const index = candidaturas[userId].indexOf(id);
                    if (index > -1) {
                        candidaturas[userId].splice(index, 1);
                        localStorage.setItem("candidaturas", JSON.stringify(candidaturas));
                        Swal.fire({
                            icon: 'success',
                            title: 'Inscrição cancelada',
                            text: 'Sua inscrição foi cancelada com sucesso.'
                        }).then(() => {
                            // Recarrega a página ou atualiza o botão
                            exibirDetalhesDaVaga(vagas);
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Erro',
                            text: 'Vaga não encontrada em suas candidaturas.'
                        });
                    }
                }
            });
        });
    } else {
        // Botão para candidatar-se
        btn.addEventListener("click", () => {
            Swal.fire({
                title: 'Deseja se candidatar a esta vaga?',
                text: "Você poderá visualizar essa vaga em seu perfil.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sim, candidatar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
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
                        }).then(() => {
                            exibirDetalhesDaVaga(vagas);
                        });
                    } else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Você já se candidatou!',
                            text: 'Você já está cadastrado nessa vaga.',
                            confirmButtonText: 'OK'
                        });
                    }
                }
            });
        });
    }
}

// Carregamento do JSON e exibição
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
