//pega o usuario cadastrado no localStorage com o getItem
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // agora é objeto
//pega o id do elemento do menu criado no html
const userMenu = document.getElementById("user-menu");
//Se o usuarop existe ele cria uma "sessão ativa"
if (loggedInUser) {
    //altera o botao com o nome do usuario
    userMenu.innerHTML = `
        <div class="user-menu-container">
            <button class="user-button" id="user-button">${loggedInUser.username} ▾</button>
            <div class="user-dropdown" id="dropdown-menu">
                <a href="${loggedInUser.tipo === 'empresa'
            ? '/src/Trabalho%20sem%20Fronteiras/html/usuario/tela_usuario_empresa.html'
            : '/src/Trabalho%20sem%20Fronteiras/html/usuario/tela_usuario.html'
        }">Perfil</a>
                <a href="/src/Trabalho%20sem%20Fronteiras/html/usuario/tela_vagas_salvas.html" id="VagasSalvas">Vagas Salvas</a>
                <a href="#" id="logout">Sair</a>

            </div>
        </div>
    `;

    const button = document.getElementById("user-button");
    const dropdown = document.getElementById("dropdown-menu");

    button.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function (e) {
        if (!userMenu.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "/src/Trabalho%20sem%20Fronteiras/html/autenticacao/tela_login.html";
    });

} else {
    userMenu.innerHTML = `
        <a class="nav-link" href="/src/Trabalho%20sem%20Fronteiras/html/autenticacao/tela_login.html">Login</a>
    `;
}