function loadUpdateOngFormData() {
    const loggedInOng = JSON.parse(localStorage.getItem('loggedInOng'));
    const ongId = loggedInOng?.id || '';

    document.getElementById('nomeOngInput').value = localStorage.getItem(`${ongId}_nome`) || '';
    document.getElementById('cnpjInput').value = localStorage.getItem(`${ongId}_cnpj`) || '';
    const cep = localStorage.getItem(`${ongId}_cep`) || '';
    document.getElementById('cepInput').value = cep;
    document.getElementById('sobreInput').value = localStorage.getItem(`${ongId}_sobre`) || '';
    document.getElementById('atuacaoInput').value = localStorage.getItem(`${ongId}_atuacao`) || '';
    document.getElementById('siteInput').value = localStorage.getItem(`${ongId}_site`) || '';

    if (cep) fetchAddressByCEP(cep);
}

function saveUpdatedOngData(event) {
    event.preventDefault();

    const loggedInOng = JSON.parse(localStorage.getItem('loggedInOng'));
    const ongId = loggedInOng?.id || '';

    localStorage.setItem(`${ongId}_nome`, document.getElementById('nomeOngInput').value);
    localStorage.setItem(`${ongId}_cnpj`, document.getElementById('cnpjInput').value);
    const cep = document.getElementById('cepInput').value;
    localStorage.setItem(`${ongId}_cep`, cep);
    localStorage.setItem(`${ongId}_sobre`, document.getElementById('sobreInput').value);
    localStorage.setItem(`${ongId}_atuacao`, document.getElementById('atuacaoInput').value);
    localStorage.setItem(`${ongId}_site`, document.getElementById('siteInput').value);

    Swal.fire({
        icon: 'success',
        title: 'Perfil atualizado!',
        text: 'As informações da ONG foram salvas com sucesso.',
        confirmButtonColor: '#0d6efd'
    }).then(() => {
        window.location.href = 'perfil_ong.html';
    });
}

function fetchAddressByCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                Swal.fire({ icon: 'error', title: 'CEP inválido', confirmButtonColor: '#dc3545' });
            } else {
                document.getElementById('enderecoInput').value = data.logradouro;
                document.getElementById('cidadeInput').value = data.localidade;
                document.getElementById('estadoInput').value = data.uf;
            }
        })
        .catch(() => {
            Swal.fire({ icon: 'error', title: 'Erro ao buscar endereço', confirmButtonColor: '#dc3545' });
        });
}

loadUpdateOngFormData();
document.getElementById('updateOngForm').addEventListener('submit', saveUpdatedOngData);
document.getElementById('cepInput').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) fetchAddressByCEP(cep);
});
