document.addEventListener("DOMContentLoaded", function () {
    const empresa = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!empresa || empresa.tipo !== "empresa") {
        // Se não for empresa, redireciona
        window.location.href = "/src/Trabalho%20sem%20Fronteiras/html/usuario/tela_usuario.html";
        return;
    }

    // Preenche os campos com os dados da empresa
    document.getElementById("aboutCompanyText").innerText = empresa.descricao || "Descrição não disponível.";
    document.getElementById("responsavel").innerText = empresa.username || "Não informado";
    document.getElementById("emailEmpresa").innerText = empresa.contato || "Não informado";

    // Preenche link do site e LinkedIn (usando o site como base se não tiver LinkedIn)
    const siteLink = document.getElementById("siteEmpresa");
    if (empresa.site) {
        siteLink.href = empresa.site;
    } else {
        siteLink.style.display = "none";
    }

    const linkedinLink = document.getElementById("linkedin");
    linkedinLink.href = empresa.linkedin || empresa.site || "#";

    // Preenche lista de informações fixas (poderia ser dinâmico também)
    const informacoesHTML = `
        <li><strong>Setor:</strong> ${empresa.setor || "Não informado"}</li>
        <li><strong>Serviços:</strong> ${empresa.servicos || "Não informado"}</li>
        <li><strong>Compromisso:</strong> ${empresa.compromisso || "Não informado"}</li>
        <li><strong>CNPJ:</strong> ${empresa.cnpj || "Não informado"}</li>
        <li><strong>Local:</strong> ${empresa.localizacao || "Não informado"}</li>
    `;
    document.querySelector(".resume ul").innerHTML = informacoesHTML;

    // Opcional: carregar as vagas cadastradas (exemplo mockado)
    const vagas = JSON.parse(localStorage.getItem("vagasEmpresa")) || []; // supondo que você armazene as vagas também
    const container = document.getElementById("vagasEmpresaContainer");

    if (vagas.length > 0) {
        vagas.forEach(vaga => {
            const vagaEl = document.createElement("div");
            vagaEl.className = "card mb-3";
            vagaEl.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${vaga.titulo}</h5>
                    <p class="card-text">${vaga.descricao}</p>
                    <p class="card-text"><small class="text-muted">${vaga.localizacao}</small></p>
                </div>
            `;
            container.appendChild(vagaEl);
        });
    } else {
        container.innerHTML = "<p>Nenhuma vaga cadastrada até o momento.</p>";
    }
});
