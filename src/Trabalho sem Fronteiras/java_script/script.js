function loadComponent(id, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar ' + filePath);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

loadComponent("header", "./header.html");
loadComponent("footer", "./footer.html");

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
