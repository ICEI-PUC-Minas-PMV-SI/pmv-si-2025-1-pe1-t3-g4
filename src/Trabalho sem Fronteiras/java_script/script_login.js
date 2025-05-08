document.getElementById("btn-login").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
        Swal.fire("Erro", "Nenhuma conta cadastrada.", "error");
        return;
    }

    if (username === user.username && password === user.password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        Swal.fire("Login bem-sucedido!", "Redirecionando...", "success").then(() => {
            window.location.href = "pagina_inicial.html";
        });
    } else {
        Swal.fire("Erro", "Usuário ou senha inválidos.", "error");
    }
});
