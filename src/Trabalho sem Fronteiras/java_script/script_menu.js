const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // agora é objeto

const userMenu = document.getElementById("user-menu");

if (loggedInUser) {
    userMenu.innerHTML = `
        <div class="user-menu-container">
            <button class="user-button" id="user-button">${loggedInUser.username} ▾</button>
            <div class="user-dropdown" id="dropdown-menu">
                <a href="perfil_usuario.html">Perfil</a>
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
        window.location.href = "../html/tela_login.html";
    });

} else {
    userMenu.innerHTML = `
        <a class="nav-link" href="tela_login.html">Login</a>
    `;
}
