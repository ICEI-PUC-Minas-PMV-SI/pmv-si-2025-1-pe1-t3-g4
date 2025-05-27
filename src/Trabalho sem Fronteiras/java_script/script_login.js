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
function handleCredentialResponse(response) {
    const decoded = parseJwt(response.credential);
    console.log("Usuário Google:", decoded);

    const userData = {
        username: decoded.name, // ou use `decoded.given_name` se preferir o primeiro nome
        email: decoded.email,
        password: null, // Google não fornece senha, mas você pode deixar `null` ou `"google-login"`
        foto: decoded.picture,
        metodo: "google"
    };

    // Salva no localStorage como se fosse um cadastro
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("loggedInUser", JSON.stringify(userData));

    // Redireciona
    Swal.fire("Login com Google bem-sucedido!", "Redirecionando...", "success").then(() => {
        window.location.href = "../pagina_inicial.html";
    });
}


function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
