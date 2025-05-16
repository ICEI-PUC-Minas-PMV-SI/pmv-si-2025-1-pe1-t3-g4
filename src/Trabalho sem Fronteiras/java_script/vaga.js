function getVagaIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id"); // retorna como string, sem parseInt
}

function exibirDetalhesDaVaga(vagas) {
    const idOuTitulo = getVagaIdFromURL();
    let vaga;

    if (!idOuTitulo) {
        document.getElementById("vaga-detalhe").innerHTML = `
            <div class="alert alert-danger text-center">
                Vaga não especificada.
            </div>
        `;
        return;
    }

    if (/^\d+$/.test(idOuTitulo)) {
        // Se for número, busca no array vagas pelo id numérico
        const id = parseInt(idOuTitulo);
        vaga = vagas.find(v => v.id === id);
    } else {
        // Se for texto, busca no localStorage vagasEmpresa pelo titulo
        const vagasEmpresa = JSON.parse(localStorage.getItem("vagasEmpresa")) || [];
        vaga = vagasEmpresa.find(v => v.titulo === idOuTitulo);
    }

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

    // Para controle da candidatura, usamos o id numérico se houver, senão a string do título
    const vagaIdentificador = vaga.id || vaga.titulo;
    const jaCandidatado = usuarioCandidaturas.includes(vagaIdentificador);

    container.innerHTML = `
        <h2 class="card-title mb-3">${vaga.titulo}</h2>
        <p><strong>Local:</strong> ${vaga.localizacao || vaga.local || 'Não informado'}</p>
        <p><strong>Requisitos:</strong> ${vaga.requisitos || 'Não informado'}</p>
        <p><strong>Salário:</strong> ${vaga.salario || 'A combinar'}</p>
        <p><strong>Descrição Completa:</strong> ${vaga.descricao || 'Sem descrição'}</p>
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
        return;
    }

    if (jaCandidatado) {
        btn.addEventListener("click", () => {
            Swal.fire({
                title: 'Tem certeza que deseja cancelar a inscrição desta vaga?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, cancelar',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.isConfirmed) {
                    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
                    const userId = usuario.id;
                    const index = candidaturas[userId].indexOf(vagaIdentificador);
                    if (index > -1) {
                        candidaturas[userId].splice(index, 1);
                        localStorage.setItem("candidaturas", JSON.stringify(candidaturas));
                        Swal.fire({
                            icon: 'success',
                            title: 'Inscrição cancelada',
                            text: 'Sua inscrição foi cancelada com sucesso.'
                        }).then(() => {
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
                    if (!candidaturas[usuario.id].includes(vagaIdentificador)) {
                        candidaturas[usuario.id].push(vagaIdentificador);
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
