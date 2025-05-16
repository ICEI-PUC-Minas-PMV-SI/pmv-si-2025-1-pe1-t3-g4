document.getElementById("btn-login").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    console.log("Botão Login apertado")
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log(user)

    if (!user) {
        Swal.fire("Erro", "Nenhuma conta cadastrada.", "error");
        return;
    }
    console.log("Username: ", user.username);
    console.log("Nome: ", user.nome);


    if ((username === user.username || username === user.nome) && password === user.password) {

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        Swal.fire("Login bem-sucedido!", "Redirecionando...", "success").then(() => {
            console.log("Botão ok apertado")
            window.location.href = "../pagina_inicial.html";
        });
    } else {
        Swal.fire("Erro", "Usuário ou senha inválidos.", "error");
    }
});
