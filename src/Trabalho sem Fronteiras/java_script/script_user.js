// Função para calcular a idade a partir da data de nascimento
function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Função para buscar endereço pelo CEP
function fetchAddressByCEP(cep, callback) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                callback("Localização não encontrada");
            } else {
                callback(`${data.localidade} - ${data.uf}`);
            }
        })
        .catch(() => {
            callback("Erro ao buscar localização");
        });
}

// Função para carregar dados do usuário logado
function loadProfileData() {
    // Recupera os dados do usuário logado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log("Usuário logado: ", loggedInUser);

    if (!loggedInUser) {
        console.log("Nenhum usuário logado.");
        return;
    }

    // O 'username' do usuário logado
    const username = loggedInUser.username;
    console.log("Username do usuário logado: ", username);

    // Recupera as informações do perfil do 'username' armazenadas no localStorage
    const name = localStorage.getItem(`${username}_name`) || '';
    const birthdate = localStorage.getItem(`${username}_birthdate`) || '';
    const cep = localStorage.getItem(`${username}_cep`) || '';
    const about = localStorage.getItem(`${username}_about`) || '';
    const resume = localStorage.getItem(`${username}_resume`) || '';
    const facebook = localStorage.getItem(`${username}_facebook`) || '#';
    const twitter = localStorage.getItem(`${username}_twitter`) || '#';

    // Exibe os dados no console para depuração
    console.log("Dados recuperados do perfil:", {
        name, birthdate, cep, about, resume, facebook, twitter
    });

    // Atualiza os dados na página
    document.getElementById('name').textContent = name;
    document.getElementById('age').textContent = birthdate ? calculateAge(birthdate) : '';
    document.getElementById('facebook').href = facebook;
    document.getElementById('twitter').href = twitter;

    // Atualiza o conteúdo de "About Me" e "Resume"
    document.getElementById('aboutMeText').textContent = about;
    const resumeList = document.querySelector('.resume ul');
    resumeList.innerHTML = ''; // Limpa o conteúdo anterior
    resume.split('\n').forEach(line => {
        if (line.trim()) {
            const li = document.createElement('li');
            li.textContent = line;
            resumeList.appendChild(li);
        }
    });

    // Busca o endereço se houver CEP
    if (cep) {
        fetchAddressByCEP(cep, function (locationText) {
            document.getElementById('location').textContent = locationText;
        });
    } else {
        document.getElementById('location').textContent = '';
    }
}



// Executa o carregamento ao abrir a página
loadProfileData();


function loadJobApplications() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        console.log("Nenhum usuário logado.");
        return;
    }

    const username = loggedInUser.username;

    // Recupera todas as candidaturas e depois as do usuário logado
    const allCandidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
    const userCandidaturas = allCandidaturas[loggedInUser.id] || [];


    console.log("candidaturas do usuário:", userCandidaturas);

    if (userCandidaturas.length === 0) {
        document.getElementById('jobCarouselContainer').innerHTML = `
            <div class="alert alert-warning" role="alert">
                Você ainda não se candidatou a nenhuma vaga.
            </div>
            <h5 class="mt-4">Sugestões para você:</h5>
            <ul>
                <li>Arquiteta Júnior - São Paulo/SP</li>
                <li>Analista de Projetos Urbanos - Belo Horizonte/MG</li>
                <li>Especialista em BIM - Trabalho Remoto</li>
            </ul>
        `;
        return;
    }

    // Buscar o arquivo dados.json com as informações das vagas
    fetch("../../dados/dados.json")
        .then(response => response.json())
        .then(data => {

            const allJobs = data.vagas;
            if (!Array.isArray(allJobs)) {
                throw new Error("O array de vagas não foi encontrado no JSON.");
            }
            // Os IDs de candidaturas podem ser número, vamos garantir comparar corretamente
            const jobs = allJobs.filter(job => userCandidaturas.includes(job.id));

            console.log("jobs encontrados:", jobs);

            if (jobs.length === 0) {
                document.getElementById('jobCarouselContainer').innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        Nenhuma das vagas salvas em suas candidaturas foi encontrada.
                    </div>
                `;
                return;
            }

            // Geração do carrossel
            let indicators = '';
            let items = '';

            for (let i = 0; i < jobs.length; i += 3) {
                indicators += `
                    <button type="button" data-bs-target="#jobCarousel" data-bs-slide-to="${i / 3}" ${i === 0 ? 'class="active"' : ''} aria-label="Slide ${i / 3 + 1}"></button>
                `;

                let groupItems = '';
                for (let j = i; j < i + 3 && j < jobs.length; j++) {
                    const job = jobs[j];
                    groupItems += `
                        <div class="col-4">
                            <div class="card p-4">
                                <h5>${job.titulo}</h5>
                                <p><strong>Salario:</strong> ${job.salario}</p>
                                <p><strong>Local:</strong> ${job.local}</p>
                                <p><strong>Descrição:</strong> ${job.descricao}</p>
                                <div class="mt-3">
                                    <a href="../vagas/detalhes_vagas.html?id=${job.id}" class="btn btn-primary btn-sm me-2">Ver detalhes</a>
                                    <button class="btn btn-danger btn-sm" onclick="confirmarCancelar(${job.id})">Cancelar inscrição</button>
                                </div>
                            </div>
                        </div>
                    `;
                }


                items += `
                    <div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <div class="row">
                            ${groupItems}
                        </div>
                    </div>
                `;
            }

            document.getElementById('jobCarouselContainer').innerHTML = `
                <div id="jobCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">${indicators}</div>
                    <div class="carousel-inner">${items}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#jobCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#jobCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            `;
        })
        .catch(error => {
            console.error("Erro ao carregar dados das vagas:", error);
            document.getElementById('jobCarouselContainer').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Ocorreu um erro ao carregar as suas vagas.
                </div>
            `;
        });
}

function confirmarCancelar(id) {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Deseja cancelar a inscrição desta vaga?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, cancelar',
        cancelButtonText: 'Não, manter'
    }).then((result) => {
        if (result.isConfirmed) {
            cancelarInscricao(id);
            Swal.fire(
                'Cancelado!',
                'Sua inscrição foi cancelada.',
                'success'
            );
        }
    });
}


// Exemplo simples de função que pode remover o id da inscrição do array (ou chamar API)
function cancelarInscricao(id) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert("Usuário não está logado.");
        return;
    }

    const candidaturas = JSON.parse(localStorage.getItem("candidaturas")) || {};
    const userId = loggedInUser.id;

    if (!candidaturas[userId]) {
        alert("Nenhuma candidatura encontrada para o usuário.");
        return;
    }

    // Remove o id da vaga do array do usuário
    const index = candidaturas[userId].indexOf(id);
    if (index > -1) {
        candidaturas[userId].splice(index, 1);

        // Atualiza o localStorage
        localStorage.setItem("candidaturas", JSON.stringify(candidaturas));


        // Recarrega as candidaturas e interface para refletir mudança
        loadJobApplications();
    } else {
        alert("Vaga não encontrada em suas candidaturas.");
    }
}

// Chamada para carregar as vagas logo após a página carregar
window.onload = function () {
    loadJobApplications();
};
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('jobCarousel'));
    loadJobApplications();

});
