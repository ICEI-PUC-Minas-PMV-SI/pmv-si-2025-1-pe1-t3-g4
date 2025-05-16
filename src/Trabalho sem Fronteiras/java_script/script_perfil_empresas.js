document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const empresaId = parseInt(urlParams.get("id"));
    const empresaNome = urlParams.get("id");



    // Se tiver ID, busca do JSON
    if (empresaId) {
        fetch("../../dados/dados.json")
            .then(response => response.json())
            .then(data => {
                const empresa = data.empresas.find(e => e.id === empresaId);
                if (!empresa) {
                    document.querySelector("main").innerHTML = `
                        <div class="alert alert-warning text-center">
                            Empresa não encontrada.
                        </div>
                    `;
                    return;
                }

                preencherEmpresa(empresa);

                const programas = data.vagas.filter(v => v.empresaId === empresaId);
                preencherVagas(programas);
            })
            .catch(error => {
                console.error('Erro ao carregar dados:', error);
                document.querySelector('main').innerHTML = '<p>Erro ao carregar dados da empresa.</p>';
            });

        // Se tiver nome, busca do localStorage
    } else if (empresaNome) {
        const empresaLS = localStorage.getItem("userData");
        if (!empresaLS) {
            alert("Nenhuma empresa está logada no localStorage.");
            return;
        }

        try {
            const empresaObj = JSON.parse(empresaLS);
            if (empresaObj.username !== decodeURIComponent(empresaNome)) {
                alert("Nome da empresa não corresponde à empresa logada.");
                return;
            }

            preencherEmpresa(empresaObj);
            preencherVagas(empresaObj.vagas || []); // se tiver vagas no objeto
        } catch (e) {
            console.error("Erro ao processar dados da empresa logada:", e);
            alert("Erro ao processar empresa logada.");
        }

    } else {
        alert("Nenhum parâmetro válido encontrado na URL.");
        return;
    }

    // Função para preencher os dados da empresa
    function preencherEmpresa(empresa) {
        document.getElementById("empresaNome").textContent = empresa.nome || empresa.username || '';
        document.getElementById("empresaDescricao").textContent = empresa.descricao || '';
        document.getElementById("empresaLogo").src = empresa.logo || '';
        document.getElementById("empresaLocalizacao").textContent = empresa.localizacao || '';
        document.getElementById("empresaSegmento").textContent = empresa.setor || '';
        document.getElementById("empresaSite").href = empresa.site || '#';
        document.getElementById("empresaSite").textContent = empresa.site || '';
    }

    // Função para preencher as vagas
    function preencherVagas(programas) {
        const container = document.getElementById('vagaCards');
        container.innerHTML = '';

        if (!programas || programas.length === 0) {
            container.innerHTML = '<p>Esta empresa ainda não possui vagas disponíveis.</p>';
            return;
        }

        programas.forEach(programa => {
            const card = `
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${programa.titulo}</h5>
                            <h6 class="card-subtitle mb-2">${programa.local}</h6>
                            <h6 class="card-subtitle mb-2">${programa.salario}</h6>
                            <p class="card-text">${programa.descricao}</p>
                            <a href="/src/Trabalho%20sem%20Fronteiras/html/vagas/detalhes_vagas.html?id=${programa.id}" class="btn btn-primary">Ver detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', card);
        });
    }
});
