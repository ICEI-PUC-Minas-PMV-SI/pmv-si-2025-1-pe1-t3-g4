document.addEventListener("DOMContentLoaded", () => {
    fetch("../dados/dados.json")
        .then(response => response.json())
        .then(data => {
            const vagasLocal = getVagasLocalStorage();
            const vagasFinal = mergeVagas(data.vagas, vagasLocal);
            renderVagas(vagasFinal);
            console.log("data:", data)
            renderEmpresas(data.empresas);
            renderRecursos(data.recursos);
        });

    function getVagasLocalStorage() {
        return JSON.parse(localStorage.getItem("vagas")) || [];
    }

    function mergeVagas(jsonVagas, localVagas) {
        const mapa = new Map();
        jsonVagas.forEach(v => mapa.set(v.id, v));
        localVagas.forEach(v => mapa.set(v.id, v));
        return Array.from(mapa.values());
    }

    function renderVagas(vagas) {
        // Ordena por dataCadastro do mais recente para o mais antigo
        vagas.sort((a, b) => new Date(b.dataCadastro) - new Date(a.dataCadastro));

        const usuario = JSON.parse(localStorage.getItem("loggedInUser"));
        const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
        const usuarioCandidaturas = usuario && candidaturas[usuario.id] ? candidaturas[usuario.id] : [];
        const container = document.getElementById("vagas-container");

        container.innerHTML = ""; // Limpa o container

        vagas.forEach(vaga => {
            const jaCandidatado = usuarioCandidaturas.includes(vaga.id);

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h4>Vaga: ${vaga.titulo}</h4>
                <p><strong>Local:</strong> ${vaga.local}</p>
                <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
                <p><strong>Salário:</strong> ${vaga.salario}</p>
                <div class="card-actions">
                    <a href="/src/Trabalho%20sem%20Fronteiras/html/vagas/detalhes_vagas.html?id=${vaga.id}" class="partner-link btn-ver-mais">Ver Mais</a>
                    <button class="btn btn-${jaCandidatado ? 'danger' : 'primary'}">
                        ${jaCandidatado ? 'Cancelar' : 'Candidatar-se'}
                    </button>
                </div>
            `;

            const btn = card.querySelector("button");

            if (!usuario) {
                btn.addEventListener("click", () => {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Faça login para se candidatar',
                        text: 'Você precisa estar logado para se candidatar a uma vaga.',
                        confirmButtonText: 'Ok'
                    });
                });
            } else if (jaCandidatado) {
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
                            const index = candidaturas[userId].indexOf(vaga.id);
                            if (index > -1) {
                                candidaturas[userId].splice(index, 1);
                                localStorage.setItem("candidaturas", JSON.stringify(candidaturas));
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Inscrição cancelada',
                                    text: 'Sua inscrição foi cancelada com sucesso.'
                                }).then(() => {
                                    renderVagas(vagas);
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
                            if (!candidaturas[usuario.id].includes(vaga.id)) {
                                candidaturas[usuario.id].push(vaga.id);
                                localStorage.setItem("candidaturas", JSON.stringify(candidaturas));
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Candidatura registrada!',
                                    text: 'Você se candidatou com sucesso à vaga.',
                                    confirmButtonText: 'OK'
                                }).then(() => {
                                    renderVagas(vagas);
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

            container.appendChild(card);
        });
    }

    function renderEmpresas(empresas) {
        const container = document.getElementById("empresas-container");
        empresas.forEach(empresa => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h4>${empresa.nome}</h4>
                <p><strong>Setor:</strong> ${empresa.setor}</p>
                <p><strong>Localização:</strong> ${empresa.localizacao}</p>
                <p><strong>Compromisso:</strong> ${empresa.compromisso}</p>
                <div class="card-actions">
                  <a href="/src/Trabalho%20sem%20Fronteiras/html/empresas/perfil_empresas.html?id=${empresa.id}" class="btn btn-outline-primary align-self-start">${empresa.textoBotao || 'Saiba Mais'}</a>
                </div>
            `;
            container.appendChild(card);
        });

        const usuarioLogado = JSON.parse(localStorage.getItem("loggedInUser"));
        if (usuarioLogado && usuarioLogado.tipo === "empresa") {
            const card = document.createElement("div");
            card.className = "card usuario-logado";
            card.innerHTML = `
                <h4>${usuarioLogado.username}</h4>
                <p><strong>Setor:</strong> ${usuarioLogado.setor}</p>
                <p><strong>Localização:</strong> ${usuarioLogado.localizacao}</p>
                <p><strong>Compromisso:</strong> ${usuarioLogado.compromisso}</p>
                <div class="card-actions">
                  <a href="/src/Trabalho%20sem%20Fronteiras/html/empresas/perfil_empresas.html?id=${usuarioLogado.username}" class="btn btn-outline-primary align-self-start">Saiba Mais</a>
                </div>
            `;
            container.appendChild(card);
        }
    }

    function renderRecursos(recursos) {
        const container = document.getElementById("recursos-container");
        recursos.forEach(recurso => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h4>${recurso.titulo}</h4>
                <p>${recurso.descricao}</p>
                <div class="card-actions">
                  <a href="tela_recursos.html" class="btn-recursos">${recurso.textoBotao}</a>
                </div>
            `;
            container.appendChild(card);
        });
    }
});
