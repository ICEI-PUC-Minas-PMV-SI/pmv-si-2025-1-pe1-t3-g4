document.addEventListener('DOMContentLoaded', function () {
    const vagaCards = document.getElementById('vagaCards');
    const empresasContainer = document.getElementById('empresasContainer');
    const ongsContainer = document.getElementById('ongsContainer');
    const carouselItems = document.getElementById('carouselItems');

    const filtroLocal = document.getElementById('filtroLocal');
    const filtroSalario = document.getElementById('filtroSalario');
    const filtroTitulo = document.getElementById('filtroTitulo');
    const userData = localStorage.getItem("userData");

    if (userData) {
        try {
            const user = JSON.parse(userData);

            if (user.tipo === "empresa") {
                document.getElementById("cadastrar_vagas").style.display = "block";
            }
        } catch (e) {
            console.error("Erro ao processar userData do localStorage:", e);
        }
    }



    let todasVagas = [];

    // Função para carregar vagas do localStorage
    function getVagasLocalStorage() {
        const vagasLS = JSON.parse(localStorage.getItem("vagasEmpresa")) || [];
        return Array.isArray(vagasLS) ? vagasLS : [vagasLS];
    }

    // Função para converter salário string para número
    function parseSalario(salarioStr) {
        if (!salarioStr) return 0;

        let valor = salarioStr.toString().trim()
            .replace(/[^\d.,-]/g, '');

        if (valor.indexOf(',') > -1 && valor.indexOf('.') > -1) {
            valor = valor.replace(/\./g, '').replace(',', '.');
        } else if (valor.indexOf(',') > -1) {
            valor = valor.replace(',', '.');
        }

        const num = parseFloat(valor);
        return isNaN(num) ? 0 : num;
    }

    // Função para renderizar as vagas filtradas
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
            vagaCards.innerHTML = '<p>Nenhuma vaga encontrada com os filtros aplicados.</p>';
            return;
        }

        vagasFiltradas.forEach(vaga => {
            const idVaga = vaga.id || vaga.titulo.replace(/\s+/g, '-').toLowerCase();
            const cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm position-relative">
                <button 
                    class="btn btn-outline-warning position-absolute" 
                    style="top: 10px; right: 10px; z-index: 1;"
                    onclick="favoritarVaga('${idVaga}')"
                    title="Favoritar">
                    ★
                </button>
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

    // Função para renderizar as empresas
    function renderizarEmpresas(empresas) {
        if (empresas.length === 0) {
            empresasContainer.innerHTML = '<p>Nenhuma empresa encontrada.</p>';
            carouselItems.innerHTML = '<div class="carousel-item active"><div class="d-flex justify-content-center w-100"><p>Nenhuma empresa encontrada.</p></div></div>';
            return;
        }

        empresasContainer.innerHTML = '';
        carouselItems.innerHTML = '';

        empresas.forEach((empresa, index) => {
            const cardHTML = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="d-flex justify-content-center">
                        <div class="card h-100 shadow-sm p-4" style="min-width: 300px; max-width: 500px;">
                            <h5 class="empresa-nome">${empresa.nome}</h5>
                            <p><strong>Setor:</strong> ${empresa.setor}</p>
                            <p><strong>Localização:</strong> ${empresa.localizacao}</p>
                            <p><strong>Compromisso:</strong> ${empresa.compromisso || 'Não informado'}</p>
                        </div>
                    </div>
                </div>
            `;
            carouselItems.insertAdjacentHTML('beforeend', cardHTML);

            const empresaGridCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm p-3">
                        <h5>${empresa.nome}</h5>
                        <p><strong>Setor:</strong> ${empresa.setor}</p>
                        <p><strong>Localização:</strong> ${empresa.localizacao}</p>
                        <p><strong>Compromisso:</strong> ${empresa.compromisso || 'Não informado'}</p>
                    </div>
                </div>
            `;
            empresasContainer.insertAdjacentHTML('beforeend', empresaGridCard);
        });
    }

    // Função para renderizar ONGs
    function renderizarONGs(ongs) {
        if (ongs.length === 0) {
            ongsContainer.innerHTML = '<p>Nenhuma ONG encontrada.</p>';
            return;
        }

        ongsContainer.innerHTML = '';

        ongs.forEach(ong => {
            const ongHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm p-3">
                        <h5>${ong.nome}</h5>
                        <p><strong>Área de atuação:</strong> ${ong.area || 'Não informado'}</p>
                        <p><strong>Localização:</strong> ${ong.localizacao}</p>
                        <p><strong>Contato:</strong> ${ong.contato || 'Não informado'}</p>
                    </div>
                </div>
            `;
            ongsContainer.insertAdjacentHTML('beforeend', ongHTML);
        });
    }

    // Carregar dados JSON e inicializar tudo
    fetch('../../dados/dados.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados.json');
            return response.json();
        })
        .then(data => {
            const vagasJSON = data.vagas || [];
            const vagasLS = getVagasLocalStorage();

            todasVagas = [...vagasJSON, ...vagasLS];

            // Preencher opções únicas de local no filtro
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

            renderizarEmpresas(data.empresas || []);
            renderizarONGs(data.ongs || []);
        })
        .catch(error => {
            vagaCards.innerHTML = `<p class="text-danger">Erro ao carregar as vagas: ${error.message}</p>`;
            empresasContainer.innerHTML = `<p class="text-danger">Erro ao carregar as empresas: ${error.message}</p>`;
            ongsContainer.innerHTML = `<p class="text-danger">Erro ao carregar as ONGs: ${error.message}</p>`;
        });
});
// Função para favoritar uma vaga
function favoritarVaga(idVaga) {
    // Recuperar vagas salvas do localStorage ou iniciar um array vazio
    const vagasSalvas = JSON.parse(localStorage.getItem("Vagas_salvas")) || [];

    // Verifica se a vaga já foi salva
    if (vagasSalvas.includes(idVaga)) {
        alert("Esta vaga já foi salva.");
        return;
    }

    // Adiciona a nova vaga ao array
    vagasSalvas.push(idVaga);

    // Salva novamente no localStorage
    localStorage.setItem("Vagas_salvas", JSON.stringify(vagasSalvas));

    alert("Vaga salva com sucesso!");
}
