function findBasePathTo(targetFolder, targetFile = 'header.html') {
    const pathParts = window.location.pathname.split('/');
    let basePath = '';

    for (let i = pathParts.length - 2; i >= 0; i--) {
        basePath = '../'.repeat(pathParts.length - 2 - i);
        const testPath = basePath + targetFolder + '/' + targetFile;
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', testPath, false); // síncrono (bloqueia até verificar)
        try {
            xhr.send();
            if (xhr.status === 200) {
                return basePath;
                console.log(basePath)
            }
        } catch (e) {
            // Ignora erro, tenta nível acima
        }
    }

    console.warn('Pasta "' + targetFolder + '" não encontrada.');
    return '';
}

function loadComponent(id, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar ' + filePath);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(id);
            if (container) container.innerHTML = html;
            if (callback) callback();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Início da execução
document.addEventListener("DOMContentLoaded", () => {
    const basePath = findBasePathTo('html'); // pasta onde estão header.html e footer.html

    // Carrega o header e depois o script do menu
    loadComponent("header", basePath + "html/header.html", () => {
        const script = document.createElement('script');
        script.src = basePath + "java_script/script_menu.js";
        console.log(script)
        document.body.appendChild(script);
    });

    // Carrega o footer
    loadComponent("footer", basePath + "html/footer.html");

    // Funções de modal (podem ser usadas em qualquer tela)
    document.querySelectorAll('.modal-btn').forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });

    document.querySelectorAll('.close-btn').forEach(span => {
        span.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("../dados/dados.json")
        .then(response => response.json())
        .then(data => {
            renderVagas(data.vagas);
            renderEmpresas(data.empresas);
            renderRecursos(data.recursos);
        });

    function renderVagas(vagas) {
        const container = document.getElementById("vagas-container");
        vagas.forEach(vaga => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
        <h4>Vaga: ${vaga.titulo}</h4>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
        <p><strong>Salário:</strong> ${vaga.salario}</p>
        <div class="card-actions">
          <a href="tela_vagas.html" class="partner-link btn-ver-mais">Ver Mais</a>
          <a href="tela_vagas.html" class="partner-link btn-aplicar">Aplicar</a>
        </div>
      `;
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
          <a href="tela_empresas.html" class="partner-link btn-ver-mais">Ver Mais</a>
          <a href="tela_vagas.html" class="partner-link btn-aplicar">Ver Vagas</a>
        </div>
      `;
            container.appendChild(card);
        });
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
