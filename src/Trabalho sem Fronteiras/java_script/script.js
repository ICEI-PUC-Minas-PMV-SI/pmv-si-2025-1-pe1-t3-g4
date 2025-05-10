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
