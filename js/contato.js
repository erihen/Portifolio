function initContactForm() {
    const formulario = document.getElementById('formulario');
    const respostaP = document.getElementById('resposta');
    const btnEnviar = formulario ? formulario.querySelector('button[type="submit"]') : null;

    if (!formulario) return;

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        // Captura e limpa os campos
        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email'); // Certifique-se de ter um input com id="email" no HTML
        
        const nome = inputNome ? inputNome.value.trim() : '';
        const email = inputEmail ? inputEmail.value.trim() : '';

        // Validação extra: Nome mínimo de 3 caracteres
        if (nome.length < 3) {
            exibirFeedback(respostaP, 'Por favor, insira um nome com pelo menos 3 caracteres.', 'erro');
            inputNome.focus();
            return;
        }

        // Validação extra: Formato de e-mail válido
        if (!validarEmail(email)) {
            exibirFeedback(respostaP, 'Por favor, insira um endereço de e-mail válido.', 'erro');
            inputEmail.focus();
            return;
        }

        // --- ATIVAR ESTADO DE CARREGAMENTO (LOADING) ---
        if (btnEnviar) {
            btnEnviar.disabled = true;
            btnEnviar.dataset.textoOriginal = btnEnviar.textContent;
            btnEnviar.innerHTML = 'Enviando... <span class="spinner"></span>';
        }

        exibirFeedback(respostaP, 'Enviando sua mensagem, por favor aguarde...', 'carregando');

        // Simula uma requisição de rede (como um fetch para API ou backend) por 1.5 segundo
        await new Promise(resolve => setTimeout(resolve, 1500));

        // --- SUCESSO ---
        if (btnEnviar) {
            btnEnviar.disabled = false;
            btnEnviar.textContent = btnEnviar.dataset.textoOriginal || 'Enviar';
        }

        exibirFeedback(respostaP, `Obrigado pela mensagem, ${nome}! Entraremos em contato em breve. 🚀`, 'sucesso');
        formulario.reset();
    });
}

// Função auxiliar para validar o formato do e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função auxiliar para gerenciar os feedbacks visuais
function exibirFeedback(elemento, mensagem, tipo) {
    if (!elemento) return;
    
    elemento.textContent = mensagem;
    elemento.className = ''; // Remove classes anteriores
    elemento.classList.add(`feedback-${tipo}`);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});