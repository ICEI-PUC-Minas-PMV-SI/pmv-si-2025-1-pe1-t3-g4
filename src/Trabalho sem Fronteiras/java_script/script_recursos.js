const CLIENT_ID = '633520258929-3eeir5pf1mb834ad3gbr2v5s6biqnnsh.apps.googleusercontent.com'; // substitua pelo seu Client ID
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';
let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: '',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    });
    gapiInited = true;
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // será definido antes da chamada
    });
    gisInited = true;
}

function sendSuggestion(nome, email, sugestao) {
    tokenClient.callback = async (resp) => {
        if (resp.error) throw resp;
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
            alert('Sugestão enviada com sucesso!');
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalSugestao'));
            modal.hide();
        } catch (err) {
            console.error('Erro ao enviar sugestão:', err);
            alert('Erro ao enviar sugestão');
        }
    };

    tokenClient.requestAccessToken();
}

// Espera carregamento
window.onload = () => {
    gapiLoaded();
    gisLoaded();

    const form = document.querySelector('#modalSugestao form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const sugestao = document.getElementById('sugestao').value;
        sendSuggestion(nome, email, sugestao);
    });
};