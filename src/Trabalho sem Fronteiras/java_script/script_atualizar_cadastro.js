// Função para carregar dados do localStorage no formulário
function loadUpdateFormData() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Recupera o objeto do usuário
    const username = loggedInUser ? loggedInUser.username : ''; // Obtém o username do objeto

    // Certifique-se de que o username está sendo acessado corretamente
    const name = localStorage.getItem(`${username}_name`) || '';
    const birthdate = localStorage.getItem(`${username}_birthdate`) || '';
    const cep = localStorage.getItem(`${username}_cep`) || '';
    const about = localStorage.getItem(`${username}_about`) || '';
    const resume = localStorage.getItem(`${username}_resume`) || '';

    document.getElementById('nameInput').value = name;
    document.getElementById('birthdateInput').value = birthdate;
    document.getElementById('cepInput').value = cep;
    document.getElementById('aboutInput').value = about;
    document.getElementById('resumeInput').value = resume;

    if (cep) {
        fetchAddressByCEP(cep); // Preenche automaticamente o endereço com base no CEP
    }
}

// Função para salvar dados atualizados no localStorage com SweetAlert
function saveUpdatedData(event) {
    event.preventDefault();  // Previne o envio do formulário

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Recupera o objeto do usuário
    const username = loggedInUser ? loggedInUser.username : ''; // Obtém o username do objeto

    const name = document.getElementById('nameInput').value;
    const birthdate = document.getElementById('birthdateInput').value;
    const cep = document.getElementById('cepInput').value;
    const about = document.getElementById('aboutInput').value;
    const resume = document.getElementById('resumeInput').value;

    // Salva os dados atualizados no localStorage
    localStorage.setItem(`${username}_name`, name);
    localStorage.setItem(`${username}_birthdate`, birthdate);
    localStorage.setItem(`${username}_cep`, cep);
    localStorage.setItem(`${username}_about`, about);
    localStorage.setItem(`${username}_resume`, resume);

    // SweetAlert de sucesso
    Swal.fire({
        icon: 'success',
        title: 'Perfil atualizado!',
        text: 'Suas informações foram salvas com sucesso.',
        confirmButtonColor: '#0d6efd'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirecionar para a tela do perfil
            window.location.href = 'tela_usuario.html'; // ajuste o nome do arquivo conforme o seu sistema
        }
    });
}


// Função para buscar dados de endereço com base no CEP
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

// Carrega os dados do usuário ao abrir a página
loadUpdateFormData();

// Adiciona evento para salvar os dados ao submeter o formulário
document.getElementById('updateProfileForm').addEventListener('submit', saveUpdatedData);

// Adiciona evento para preencher o endereço ao informar o CEP
document.getElementById('cepInput').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, ''); // Remover qualquer caracter não numérico
    if (cep.length === 8) {
        fetchAddressByCEP(cep);
    }
});
