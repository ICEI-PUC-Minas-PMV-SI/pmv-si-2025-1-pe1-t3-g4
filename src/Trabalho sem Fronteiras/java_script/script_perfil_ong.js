function loadOngProfile() {
    const loggedInOng = JSON.parse(localStorage.getItem('loggedInOng'));
    const ongId = loggedInOng?.id || '';

    document.getElementById('nomeOng').textContent = localStorage.getItem(`${ongId}_nome`) || '';
    document.getElementById('cnpjOng').textContent = localStorage.getItem(`${ongId}_cnpj`) || '';
    const cep = localStorage.getItem(`${ongId}_cep`) || '';
    document.getElementById('cepOng').textContent = cep;
    document.getElementById('sobreOng').textContent = localStorage.getItem(`${ongId}_sobre`) || '';
    document.getElementById('atuacaoOng').textContent = localStorage.getItem(`${ongId}_atuacao`) || '';
    const site = localStorage.getItem(`${ongId}_site`) || '';
    const siteLink = document.getElementById('siteOng');
    siteLink.textContent = site;
    siteLink.href = site;

    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                document.getElementById('enderecoOng').textContent = data.logradouro;
                document.getElementById('cidadeOng').textContent = data.localidade;
                document.getElementById('estadoOng').textContent = data.uf;
            });
    }
}

loadOngProfile();
