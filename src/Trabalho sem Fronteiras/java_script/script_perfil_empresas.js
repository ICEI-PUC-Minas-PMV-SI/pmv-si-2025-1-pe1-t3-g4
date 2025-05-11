document.addEventListener('DOMContentLoaded', function () {
    const empresa = JSON.parse(localStorage.getItem('empresa'));
    if (empresa) {
        document.getElementById('empresaNome').textContent = empresa.nome;
        document.getElementById('empresaDescricao').textContent = empresa.descricao;
        document.getElementById('empresaLogo').src = empresa.logo;
        document.getElementById('empresaLocalizacao').textContent = empresa.localizacao;
        document.getElementById('empresaSegmento').textContent = empresa.segmento;
        document.getElementById('empresaSite').href = empresa.site;
    }
});