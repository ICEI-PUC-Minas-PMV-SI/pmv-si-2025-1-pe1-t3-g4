function loadComponent(id, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar ' + filePath);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback(); // Executa o callback após carregar o HTML
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Carrega o header e só depois executa o script do menu
loadComponent("header", "./header.html", () => {
    const script = document.createElement('script');
    script.src = "../java_script/script_menu.js";
    document.body.appendChild(script);
});

// Carrega o footer normalmente
loadComponent("footer", "./footer.html");

// Funções para modais (se desejar, podem também ser carregadas após header/footer)
document.addEventListener("DOMContentLoaded", () => {
    // Função para abrir o modal
    document.querySelectorAll('.modal-btn').forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Função para fechar o modal
    document.querySelectorAll('.close-btn').forEach(span => {
        span.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Fechar o modal se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
