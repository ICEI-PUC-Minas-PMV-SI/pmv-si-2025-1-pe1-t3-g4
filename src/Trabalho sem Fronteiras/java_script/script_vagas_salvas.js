document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const vagaCards = document.getElementById('vagaCards');
    const filtroLocal = document.getElementById('filtroLocal');
    const filtroSalario = document.getElementById('filtroSalario');
    const filtroTitulo = document.getElementById('filtroTitulo');

    function gerarIdVaga(vaga) {
        if (vaga.id) return String(vaga.id).trim();

        return vaga.titulo
            .normalize("NFD")                            // remove acentos
            .replace(/[\u0300-\u036f]/g, "")            // remove caracteres acentuados
            .trim()                                     // remove espaços nas bordas
            .replace(/\s+/g, '-')                       // troca espaços internos por hífens
            .toLowerCase()
            .trim();                                    // garante que não restou espaço no final
    }



    // Recupera os IDs salvos no localStorage
    function getVagasLocalStorage() {
        return JSON.parse(localStorage.getItem("Vagas_salvas")) || [];
    }

    // Função para converter salário em número
    function parseSalario(salarioStr) {
        if (!salarioStr) return 0;
        const match = salarioStr.replace(/[^\d,]/g, '').replace(',', '.');
        return parseFloat(match) || 0;
    }

    let todasVagas = [];

    // Renderiza os cards das vagas favoritadas
    function renderizarVagas() {
        vagaCards.innerHTML = '';

        const localSelecionado = filtroLocal.value;
        const salarioMinimo = parseFloat(filtroSalario.value) || 0;
        const tituloBusca = filtroTitulo.value.toLowerCase().trim();

        const vagasFiltradas = todasVagas.filter(vaga => {
            const localVaga = vaga.local || vaga.localizacao;
            const salarioNumerico = parseSalario(vaga.salario);

            const atendeLocal = !localSelecionado || localVaga === localSelecionado;
            const atendeSalario = salarioNumerico >= salarioMinimo;
            const atendeTitulo = !tituloBusca || (vaga.titulo && vaga.titulo.toLowerCase().includes(tituloBusca));

            return atendeLocal && atendeSalario && atendeTitulo;
        });

        if (vagasFiltradas.length === 0) {
            vagaCards.innerHTML = '<p class="text-muted">Nenhuma vaga favorita encontrada com os filtros aplicados.</p>';
            return;
        }

        vagasFiltradas.forEach(vaga => {
            const idVaga = gerarIdVaga(vaga);
            const cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${vaga.titulo}</h5>
                    <p><strong>Local:</strong> ${vaga.local || vaga.localizacao || 'Não informado'}</p>
                    <p><strong>Salário:</strong> ${vaga.salario || 'A combinar'}</p>
                    <p><strong>Requisitos:</strong> ${vaga.requisitos || 'Não informado'}</p>
                    <p class="card-text flex-grow-1">${vaga.descricao || ''}</p>
                    <a href="/src/Trabalho%20sem%20Fronteiras/html/vagas/detalhes_vagas.html?id=${idVaga}" class="btn btn-primary mt-auto">Ver Mais</a>
                </div>
            </div>
        </div>
        `;
            vagaCards.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // Carrega os dados e filtra apenas os favoritos
    fetch('../../dados/dados.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados.json');
            return response.json();
        })
        .then(data => {
            const idsFavoritos = getVagasLocalStorage();
            console.log("ids favoritos: ", idsFavoritos)
            const vagasJSON = data.vagas || [];
            console.log("vagas JSON: ", vagasJSON)

            // Mantém apenas as vagas que estão salvas
            todasVagas = vagasJSON.filter(vaga => {
                const idVaga = gerarIdVaga(vaga);
                console.log("idVaga: ", idVaga)
                return idsFavoritos.includes(idVaga);
            });
            console.log("todas a vagas: ", todasVagas)

            idsFavoritos.forEach(id => {
                console.log("Comparando com:", id);
                vagasJSON.forEach(vaga => {
                    const idVaga = gerarIdVaga(vaga);
                    if (id === idVaga) {
                        console.log("MATCH ->", idVaga);
                    } else {
                        console.log("erro")
                    }
                });
            });


            // Popular o filtro de locais
            const locaisUnicos = [...new Set(todasVagas.map(v => v.local || v.localizacao).filter(Boolean))];
            locaisUnicos.forEach(local => {
                const opt = document.createElement("option");
                opt.value = local;
                opt.textContent = local;
                filtroLocal.appendChild(opt);
            });

            renderizarVagas();

            // Eventos de filtro
            filtroLocal.addEventListener('change', renderizarVagas);
            filtroSalario.addEventListener('input', renderizarVagas);
            filtroTitulo.addEventListener('input', renderizarVagas);
        })
        .catch(error => {
            vagaCards.innerHTML = `<p class="text-danger">Erro ao carregar as vagas: ${error.message}</p>`;
        });
});
