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
    const username = localStorage.getItem('username'); // Obtém o nome de usuário logado
    const allJobs = JSON.parse(localStorage.getItem('vagas')) || []; // Obtém todas as vagas cadastradas


    // Filtra as vagas em que o usuário está cadastrado como candidato
    const jobs = allJobs.filter(job => job.candidatos && job.candidatos.includes(username));


    const container = document.getElementById('jobCarouselContainer');

    if (jobs.length === 0) {
        container.innerHTML = `
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

    // Criação do carrossel com Bootstrap
    let indicators = '';
    let items = '';

    // Loop para agrupar as vagas em grupos de 3
    for (let i = 0; i < jobs.length; i += 3) {
        // Adiciona o indicador
        indicators += `
            <button type="button" data-bs-target="#jobCarousel" data-bs-slide-to="${items.split('carousel-item').length}" ${i === 0 ? 'class="active"' : ''} aria-label="Slide ${(i / 3) + 1}"></button>
        `;

        // Cria o grupo de 3 vagas
        let groupItems = '';
        for (let j = i; j < i + 3 && j < jobs.length; j++) {
            const job = jobs[j];
            groupItems += `
                <div class="col-4">
                    <div class="card p-4">
                        <h5>${job.title}</h5>
                        <p><strong>Empresa:</strong> ${job.company}</p>
                        <p><strong>Local:</strong> ${job.location}</p>
                        <p><strong>Descrição:</strong> ${job.description}</p>
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

    container.innerHTML = `
        <div id="jobCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${indicators}
            </div>
            <div class="carousel-inner">
                ${items}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#jobCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#jobCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    `;
}


// Chamada para carregar as vagas logo após a página carregar
window.onload = function () {
    loadJobApplications();
};
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('jobCarousel'));
    loadJobApplications();

});
