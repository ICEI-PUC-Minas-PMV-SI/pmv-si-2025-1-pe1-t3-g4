// Função para carregar dados do localStorage no formulário
function loadUpdateEmpresaFormData() {
    const loggedInEmpresa = JSON.parse(localStorage.getItem('loggedInEmpresa'));
    const empresaId = loggedInEmpresa ? loggedInEmpresa.id : '';

    const nomeFantasia = localStorage.getItem(`${empresaId}_nomeFantasia`) || '';
    const cnpj = localStorage.getItem(`${empresaId}_cnpj`) || '';
    const cep = localStorage.getItem(`${empresaId}_cep`) || '';
    const sobre = localStorage.getItem(`${empresaId}_sobre`) || '';
    const segmento = localStorage.getItem(`${empresaId}_segmento`) || '';
    const website = localStorage.getItem(`${empresaId}_website`) || '';

    document.getElementById('companyNameInput').value = nomeFantasia;
    document.getElementById('cnpjInput').value = cnpj;
    document.getElementById('cepInput').value = cep;
    document.getElementById('aboutInput').value = sobre;
    document.getElementById('segmentInput').value = segmento;
    document.getElementById('websiteInput').value = website;

    if (cep) {
        fetchAddressByCEP(cep);
    }
}

// Função para salvar os dados da empresa
function saveUpdatedEmpresaData(event) {
    event.preventDefault();

    const loggedInEmpresa = JSON.parse(localStorage.getItem('loggedInEmpresa'));
    const empresaId = loggedInEmpresa ? loggedInEmpresa.id : '';

    const nomeFantasia = document.getElementById('companyNameInput').value;
    const cnpj = document.getElementById('cnpjInput').value;
    const cep = document.getElementById('cepInput').value;
    const sobre = document.getElementById('aboutInput').value;
    const segmento = document.getElementById('segmentInput').value;
    const website = document.getElementById('websiteInput').value;

    localStorage.setItem(`${empresaId}_nomeFantasia`, nomeFantasia);
    localStorage.setItem(`${empresaId}_cnpj`, cnpj);
    localStorage.setItem(`${empresaId}_cep`, cep);
    localStorage.setItem(`${empresaId}_sobre`, sobre);
    localStorage.setItem(`${empresaId}_segmento`, segmento);
    localStorage.setItem(`${empresaId}_website`, website);

    Swal.fire({
        icon: 'success',
        title: 'Dados atualizados!',
        text: 'As informações da empresa foram salvas com sucesso.',
        confirmButtonColor: '#0d6efd'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'tela_empresa.html'; // ajuste conforme necessário
        }
    });
}

// Função para buscar endereço com base no CEP
function fetchAddressByCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                Swal.fire({
                    icon: 'error',
                    title: 'CEP inválido',
                    text: 'Por favor, verifique o número do CEP digitado.',
                    confirmButtonColor: '#dc3545'
                });
            } else {
                document.getElementById('addressInput').value = data.logradouro;
                document.getElementById('cityInput').value = data.localidade;
                document.getElementById('stateInput').value = data.uf;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o CEP:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Ocorreu um erro ao buscar o endereço. Tente novamente.',
                confirmButtonColor: '#dc3545'
            });
        });
}

// Inicializa os dados ao carregar a página
loadUpdateEmpresaFormData();

// Evento para salvar dados no submit
document.getElementById('updateCompanyForm').addEventListener('submit', saveUpdatedEmpresaData);

// Evento para preencher endereço ao sair do campo CEP
document.getElementById('cepInput').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetchAddressByCEP(cep);
    }
});
