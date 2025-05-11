document.addEventListener('DOMContentLoaded', function () {

    // === EMPRESAS PARCEIRAS ===
    const empresas = [
        {
            nome: "Empresa A",
            logo: "../../img/logo_empresa1.jpg",
            descricao: "Empresa A é uma líder no setor de tecnologia e inovação. Oferece soluções digitais com impacto social e inclusão de talentos refugiados.",
            localizacao: "São Paulo, SP",
            segmento: "Tecnologia e Inovação",
            site: "https://empresaexemplo.com"
        },
        {
            nome: "Empresa B",
            logo: "../../img/logo_empresa2.jpg",
            descricao: "Empresa B oferece soluções sustentáveis para o mercado global. Está comprometida com práticas de responsabilidade social corporativa.",
            localizacao: "Rio de Janeiro, RJ",
            segmento: "Sustentabilidade",
            site: "https://empresaexemplo2.com"
        },
        {
            nome: "Empresa C",
            logo: "../../img/logo_empresa3.jpg",
            descricao: "Empresa C é conhecida pela sua excelência em serviços financeiros, promovendo diversidade e inclusão no ambiente de trabalho.",
            localizacao: "Belo Horizonte, MG",
            segmento: "Serviços Financeiros",
            site: "https://empresaexemplo3.com"
        }
    ];

    const carouselItems = document.getElementById('carouselItems');
    empresas.forEach((empresa, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const itemHTML = `
            <div class="carousel-item ${activeClass}">
                <div class="d-flex flex-column align-items-center carousel-card p-4 mx-auto">
                    <img src="${empresa.logo}" class="d-block carousel-img mb-3" alt="${empresa.nome}">
                    <h5 class="empresa-nome">${empresa.nome}</h5>
                    <p class="text-center empresa-descricao">${empresa.descricao}</p>
                    <a href="#" class="btn btn-outline-primary btn-sm mt-2" onclick="saveEmpresaData(${index})">Saiba mais</a>
                </div>
            </div>
        `;
        carouselItems.insertAdjacentHTML('beforeend', itemHTML);
    });

    // Função para armazenar os dados da empresa no localStorage
    window.saveEmpresaData = function (index) {
        localStorage.setItem('empresa', JSON.stringify(empresas[index]));
        console.log("clicou")
        window.location.href = "perfil_empresas.html";

    };

    // === VAGAS DE EMPREGO ===
    const vagas = [
        {
            titulo: "Desenvolvedor Web",
            empresa: "Empresa A",
            descricao: "Procuramos um desenvolvedor com experiência em front-end e back-end."
        },
        {
            titulo: "Analista de Suporte",
            empresa: "Empresa B",
            descricao: "Vaga para analista de suporte com conhecimentos em redes e sistemas."
        },
        {
            titulo: "Gerente de Projetos",
            empresa: "Empresa C",
            descricao: "Buscamos um gerente de projetos para coordenar equipes multidisciplinares."
        }
    ];

    const vagaCards = document.getElementById('vagaCards');
    vagas.forEach(vaga => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${vaga.titulo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${vaga.empresa}</h6>
                        <p class="card-text flex-grow-1">${vaga.descricao}</p>
                        <a href="#" class="btn btn-primary mt-auto">Veja Mais</a>
                    </div>
                </div>
            </div>
        `;
        vagaCards.insertAdjacentHTML('beforeend', cardHTML);
    });
});
