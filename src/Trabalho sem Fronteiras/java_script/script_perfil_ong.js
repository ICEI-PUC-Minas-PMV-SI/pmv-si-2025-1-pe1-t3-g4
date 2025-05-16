document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const empresaId = parseInt(urlParams.get("id"));

    if (!empresaId) {
        alert("ID da Ong não encontrado na URL.");
        return;
    }

    fetch("../../dados/dados.json")
        .then(response => response.json())
        .then(data => {
            const ong = data.ongs.find(e => e.id === empresaId);
            console.log(ong)
            if (!ong) {
                document.querySelector("main").innerHTML = `
                    <div class="alert alert-warning text-center">
                        ong não encontrada.
                    </div>
                `;
                return;
            }

            // Preenche os dados na página
            document.getElementById("empresaNome").textContent = ong.nome;
            document.getElementById("empresaDescricao").textContent = ong.descricao;
            document.getElementById("empresaLogo").src = ong.logo;
            document.getElementById("empresaLocalizacao").textContent = ong.localizacao;
            document.getElementById("empresaSegmento").textContent = ong.setor;
            document.getElementById("empresaSite").href = ong.site;

            // Filtrar vagas da empresa
            const programas = data.programas.filter(v => v.oferecidoPor === empresaId);
            const programasContainer = document.getElementById('programasContainer');
            programasContainer.innerHTML = ''; // limpa estático

            if (programas.length === 0) {
                programasContainer.innerHTML = '<p>Esta Ong ainda não possui vagas disponíveis.</p>';
                return;
            }

            programas.forEach(programa => {
                const card = `
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${programa.nome}</h5>
                                <h6 class="card-subtitle mb-2">${programa.local}</h6>
                                <p class="card-text">${programa.descricao}</p>
                                <a href="/src/Trabalho%20sem%20Fronteiras/html/vagas/detalhes_vagas.html?id=${programa.id}" class="btn btn-primary">Ver detalhes</a>
                            </div>
                        </div>
                    </div>
                `;
                programasContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.querySelector('main').innerHTML = '<p>Erro ao carregar dados da empresa.</p>';
        });
});
