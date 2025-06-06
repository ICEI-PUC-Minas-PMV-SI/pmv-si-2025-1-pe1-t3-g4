document.addEventListener('DOMContentLoaded', function () {
    const CLIENT_ID = '633520258929-3eeir5pf1mb834ad3gbr2v5s6biqnnsh.apps.googleusercontent.com';
    const SCOPES = 'https://www.googleapis.com/auth/gmail.send';
    let tokenClient;
    let gapiInited = false;
    let gisInited = false;

    function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
    }

    async function initializeGapiClient() {
        await gapi.client.init({
            apiKey: '', // INSIRA sua API Key aqui
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        });
        gapiInited = true;
    }

    function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: '', // será definido na hora
        });
        gisInited = true;
    }

    window.gapiLoaded = gapiLoaded; // expõe para o HTML
    window.gisLoaded = gisLoaded;

    const btnEnviar = document.getElementById('btnEnviarSugestao');
    const alertBox = document.getElementById('alertSugestao');

    function showAlert(message, success = true) {
        alertBox.textContent = message;
        alertBox.style.backgroundColor = success ? '#198754' : '#dc3545';
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3500);
    }

    function sendSuggestion(nome, email, sugestao) {
        return new Promise((resolve, reject) => {
            tokenClient.callback = async (resp) => {
                if (resp.error) {
                    reject(resp);
                    return;
                }

                const message = [
                    `To: trabalhosemfronteiras2025@gmail.com`,
                    `Subject: Sugestão de ${nome}`,
                    '',
                    `Nome: ${nome}`,
                    `Email: ${email}`,
                    `Sugestão:\n${sugestao}`
                ].join('\n');

                const encodedMessage = btoa(message)
                    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

                try {
                    await gapi.client.gmail.users.messages.send({
                        userId: 'me',
                        resource: { raw: encodedMessage },
                    });
                    resolve();
                } catch (err) {
                    reject(err);
                }
            };

            tokenClient.requestAccessToken();
        });
    }

    document.getElementById('formSugestao').addEventListener('submit', async function (event) {
        console.log("Botão apertado");
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const sugestao = document.getElementById('sugestao').value.trim();

        if (!nome || !email || !sugestao) {
            showAlert('Por favor, preencha todos os campos.', false);
            return;
        }

        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';

        try {
            await sendSuggestion(nome, email, sugestao);
            showAlert('Sugestão enviada com sucesso!');
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalSugestao'));
            modal.hide();
            document.getElementById('formSugestao').reset();
        } catch (error) {
            console.error(error);
            showAlert('Erro ao enviar sugestão.', false);
        } finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar';
        }
    });
});
