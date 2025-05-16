function validateForm(fields) {
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            Swal.fire("Campo obrigatório", `Por favor, preencha o campo: ${key}`, "warning");
            return false;
        }
    }

    if (fields.password !== fields.cpassword) {
        Swal.fire("Erro de senha", "As senhas não coincidem.", "error");
        return false;
    }

    if (!fields.termo) {
        Swal.fire("Termos obrigatórios", "Você precisa aceitar os termos.", "info");
        return false;
    }

    return true;
}

document.getElementById("create-account-btn").addEventListener("click", () => {
    const data = {
        id: "1",
        tipo: "empresa",
        nome: document.getElementById("nome").value,
        cnpj: document.getElementById("cnpj").value,
        localizacao: document.getElementById("localizacao").value,
        servicos: document.getElementById("servicos").value,
        contato: document.getElementById("contato").value,
        site: document.getElementById("site").value,
        setor: document.getElementById("setor").value,
        compromisso: document.getElementById("compromisso").value,
        descricao: document.getElementById("descricao").value,
        password: document.getElementById("password").value,
        cpassword: document.getElementById("cpassword").value,
        termo: document.getElementById("termo").checked
    };

    if (validateForm(data)) {
        const empresaData = {
            tipo: "empresa",
            username: data.nome,
            cnpj: data.cnpj,
            localizacao: data.localizacao,
            servicos: data.servicos,
            contato: data.contato,
            site: data.site,
            setor: data.setor,
            compromisso: data.compromisso,
            descricao: data.descricao,
            password: data.password
        };

        localStorage.setItem("userData", JSON.stringify(empresaData));

        Swal.fire("Cadastro realizado!", "Conta de empresa criada com sucesso!", "success").then(() => {
            window.location.href = "../tela_login.html";
        });
    }
});
document.getElementById('cnpj').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 14) value = value.slice(0, 14);

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    e.target.value = value;
});