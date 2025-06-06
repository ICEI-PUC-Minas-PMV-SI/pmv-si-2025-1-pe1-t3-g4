document.addEventListener('DOMContentLoaded', function () {

    const programasContainer = document.getElementById('programasContainer');
    const carouselItems = document.getElementById('carouselItems');
    const userData = localStorage.getItem("userData");

    if (userData) {
        try {
            const user = JSON.parse(userData);

            if (user.tipo === "Ong") {
                document.getElementById("cadastrar_programa").style.display = "block";
            }
        } catch (e) {
            console.error("Erro ao processar userData do localStorage:", e);
        }
    }

    fetch('../../dados/dados.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados.json');
            return response.json();
            console.log("Response: ", response);
        })
        .then(data => {
            // --- Ongs (Carrossel) ---
            if (!data.ongs || data.ongs.length === 0) {
                carouselItems.innerHTML = '<div class="carousel-item active"><div class="d-flex justify-content-center w-100"><p>Nenhuma Ong encontrada.</p></div></div>';
            } else {
                carouselItems.innerHTML = '';
                data.ongs.forEach((ongs, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    const itemHTML = `
                        <div class="carousel-item ${activeClass}">
                            <div class="d-flex justify-content-center">
                                <div class="card h-100 shadow-sm p-4" style="min-width: 300px; max-width: 500px;">
                                    <h5 class="empresa-nome">${ongs.nome}</h5>
                                    <p><strong>Setor:</strong> ${ongs.setor}</p>
                                    <p><strong>Localização:</strong> ${ongs.localizacao}</p>
                                    <p><strong>Compromisso:</strong> ${ongs.compromisso}</p>
                                    <p>${ongs.descricao}</p>
                                    <a href="/src/Trabalho%20sem%20Fronteiras/html/ong/perfil_ong.html?id=${ongs.id}" class="btn btn-outline-primary align-self-start">Saiba Mais</a>

                                </div>
                            </div>
                        </div>
                    `;
                    carouselItems.insertAdjacentHTML('beforeend', itemHTML);
                });
            }


            // --- ONGs ---
            if (!data.programas || data.programas.length === 0) {
                programas.innerHTML = '<p>Nenhum programa encontrado.</p>';
            } else {
                programasContainer.innerHTML = '';
                data.programas.forEach(programa => {
                    const ongHTML = `
                        <div class="col-md-6 mb-4">
                            <div class="card h-100 shadow-sm p-3 d-flex flex-column">
                                <h5>${programa.nome}</h5>
                                <p><strong>Tipo:</strong> ${programa.tipo}</p>
                                <p><strong>Localização:</strong> ${programa.local}</p>
                                <p class="flex-grow-1">${programa.descricao}</p>
                                <a href="/src/Trabalho%20sem%20Fronteiras/html/ong/detalhe_programa.html?id=${programa.id}" class="btn btn-outline-primary align-self-start">${programa.textoBotao || 'Saiba Mais'}</a>
                            </div>
                        </div>
                    `;
                    programasContainer.insertAdjacentHTML('beforeend', ongHTML);
                });
            }

        })
        .catch(error => {
            programasContainer.innerHTML = `<p class="text-danger">Erro ao carregar as ONGs: ${error.message}</p>`;
            carouselItems.innerHTML = `<div class="carousel-item active"><div class="d-flex justify-content-center w-100"><p class="text-danger">Erro ao carregar o carrossel: ${error.message}</p></div></div>`;
            console.error('Erro ao carregar dados.json:', error);
        });





});
