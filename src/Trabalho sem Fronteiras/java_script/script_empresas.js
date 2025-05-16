document.addEventListener('DOMContentLoaded', function () {

    const vagaCards = document.getElementById('vagaCards');
    const ongsContainer = document.getElementById('ongsContainer');
    const carouselItems = document.getElementById('carouselItems');


    fetch('../../dados/dados.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados.json');
            return response.json();
            console.log("Response: ", response);
        })
        .then(data => {
            // --- VAGAS ---
            if (!data.vagas || data.vagas.length === 0) {
                vagaCards.innerHTML = '<p>Nenhuma vaga encontrada.</p>';
            } else {
                vagaCards.innerHTML = '';
                data.vagas.forEach(vaga => {
                    const cardHTML = `
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${vaga.titulo}</h5>
                                    <p><strong>Local:</strong> ${vaga.local || 'Não informado'}</p>
                                    <p><strong>Salário:</strong> ${vaga.salario || 'A combinar'}</p>
                                    <p><strong>Requisitos:</strong> ${vaga.requisitos || 'Não informado'}</p>
                                    <p class="card-text flex-grow-1">${vaga.descricao}</p>
                                    <a href="/src/Trabalho%20sem%20Fronteiras/html/vagas/detalhes_vagas.html?id=${vaga.id}" class="btn btn-primary mt-auto">Ver Mais</a>
                                </div>
                            </div>
                        </div>
                    `;
                    vagaCards.insertAdjacentHTML('beforeend', cardHTML);
                });
            }
            // --- EMPRESAS (Carrossel) ---
            let empresas = data.empresas || [];

            // Verifica se há empresa logada no localStorage
            const empresaLogadaStr = localStorage.getItem("loggedInUser");
            if (empresaLogadaStr) {
                try {
                    const empresaLogada = JSON.parse(empresaLogadaStr);

                    // Verifica se a empresa logada já está na lista (por ID)
                    const jaExiste = empresas.some(e => e.id === empresaLogada.id);
                    if (!jaExiste) {
                        empresas.push(empresaLogada);
                    }
                } catch (e) {
                    console.warn("Erro ao ler empresa do localStorage:", e);
                }
            }

            if (empresas.length === 0) {
                carouselItems.innerHTML = `
        <div class="carousel-item active">
            <div class="d-flex justify-content-center w-100">
                <p>Nenhuma empresa encontrada.</p>
            </div>
        </div>
    `;
            } else {
                carouselItems.innerHTML = '';
                empresas.forEach((empresa, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    const empresaIdOuUsername = empresa.username ?? empresa.id ?? "";
                    console.log(empresaIdOuUsername)
                    const itemHTML = `
            <div class="carousel-item ${activeClass}">
                <div class="d-flex justify-content-center">
                    <div class="card h-100 shadow-sm p-4" style="min-width: 300px; max-width: 500px;">
                        <h5 class="empresa-nome">${empresa.nome || empresa.username}</h5>
                        <p><strong>Setor:</strong> ${empresa.setor || '-'}</p>
                        <p><strong>Localização:</strong> ${empresa.localizacao || '-'}</p>
                        <p><strong>Compromisso:</strong> ${empresa.compromisso || '-'}</p>
                        <p>${empresa.descricao || ''}</p>
                        <a href="/src/Trabalho%20sem%20Fronteiras/html/empresas/perfil_empresas.html?id=${encodeURIComponent(empresaIdOuUsername)}" class="btn btn-outline-primary align-self-start">
                            ${empresa.textoBotao || 'Saiba Mais'}
                        </a>
                    </div>
                </div>
            </div>
        `;
                    carouselItems.insertAdjacentHTML('beforeend', itemHTML);
                });
            }



            // --- ONGs ---
            if (!data.ongs || data.ongs.length === 0) {
                ongsContainer.innerHTML = '<p>Nenhuma ONG encontrada.</p>';
            } else {
                ongsContainer.innerHTML = '';
                data.ongs.forEach(ong => {
                    const ongHTML = `
                        <div class="col-md-6 mb-4">
                            <div class="card h-100 shadow-sm p-3 d-flex flex-column">
                                <h5>${ong.nome}</h5>
                                <p><strong>Setor:</strong> ${ong.setor}</p>
                                <p><strong>Localização:</strong> ${ong.localizacao}</p>
                                <p><strong>Compromisso:</strong> ${ong.compromisso}</p>
                                <p class="flex-grow-1">${ong.descricao}</p>
                                <a href="${ong.link || '#'}" class="btn btn-outline-primary align-self-start">${ong.textoBotao || 'Saiba Mais'}</a>
                            </div>
                        </div>
                    `;
                    ongsContainer.insertAdjacentHTML('beforeend', ongHTML);
                });
            }

        })
        .catch(error => {
            vagaCards.innerHTML = `<p class="text-danger">Erro ao carregar as vagas: ${error.message}</p>`;
            ongsContainer.innerHTML = `<p class="text-danger">Erro ao carregar as ONGs: ${error.message}</p>`;
            carouselItems.innerHTML = `<div class="carousel-item active"><div class="d-flex justify-content-center w-100"><p class="text-danger">Erro ao carregar o carrossel: ${error.message}</p></div></div>`;
            console.error('Erro ao carregar dados.json:', error);
        });


    // Função para armazenar os dados da empresa no localStorage
    window.saveEmpresaData = function (index) {
        localStorage.setItem('empresa', JSON.stringify(empresas[index]));
        console.log("clicou")
        window.location.href = "perfil_empresas.html";

    };


});
