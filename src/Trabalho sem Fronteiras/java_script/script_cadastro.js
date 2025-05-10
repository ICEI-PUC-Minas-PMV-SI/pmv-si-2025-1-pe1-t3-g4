// Função para validar os campos do formulário
function validateForm(username, email, cmail, password, cpassword, termos) {
    if (!username || !email || !cmail || !password || !cpassword) {
        Swal.fire("Campos obrigatórios", "Por favor, preencha todos os campos.", "warning");
        return false;
    }

    if (email !== cmail) {
        Swal.fire("Erro de e-mail", "Os e-mails não coincidem.", "error");
        return false;
    }

    if (password !== cpassword) {
        Swal.fire("Erro de senha", "As senhas não coincidem.", "error");
        return false;
    }

    if (!termos) {
        Swal.fire("Termos obrigatórios", "Você precisa aceitar os termos.", "info");
        return false;
    }

    return true;
}

// Função para armazenar os dados no localStorage
document.getElementById("create-account-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const cmail = document.getElementById("cmail").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const termos = document.getElementById("termo").checked;

    // Validar os campos
    if (validateForm(username, email, cmail, password, cpassword, termos)) {
        // Criando o objeto com os dados do usuário
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Armazenando os dados no localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        Swal.fire("Cadastro realizado!", "Conta criada com sucesso!", "success").then(() => {
            window.location.href = "../tela_login.html";
        });

    }
});

// Função para abrir o dropdown
function redirecionar() {
    const select = document.getElementById('tipoConta');
    const url = select.value;

    // Redireciona diretamente para a nova página
    window.location.href = url;
}
