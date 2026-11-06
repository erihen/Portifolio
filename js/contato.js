function initContactForm() {
    const formulario = document.getElementById('formulario');
    const respostaP = document.getElementById('resposta');
    const btnEnviar = formulario ? formulario.querySelector('button[type="submit"]') : null;

    if (!formulario) return;

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        
        const inputNome = document.getElementById('nome');
        const inputEmail = document.getElementById('email'); 
        
        const nome = inputNome ? inputNome.value.trim() : '';
        const email = inputEmail ? inputEmail.value.trim() : '';

        
        if (nome.length < 3) {
            exibirFeedback(respostaP, 'Por favor, insira um nome com pelo menos 3 caracteres.', 'erro');
            inputNome.focus();
            return;
        }

       
        if (!validarEmail(email)) {
            exibirFeedback(respostaP, 'Por favor, insira um endereço de e-mail válido.', 'erro');
            inputEmail.focus();
            return;
        }

        
        if (btnEnviar) {
            btnEnviar.disabled = true;
            btnEnviar.dataset.textoOriginal = btnEnviar.textContent;
            btnEnviar.innerHTML = 'Enviando... <span class="spinner"></span>';
        }

        exibirFeedback(respostaP, 'Enviando sua mensagem, por favor aguarde...', 'carregando');

       
        await new Promise(resolve => setTimeout(resolve, 1500));

       
        if (btnEnviar) {
            btnEnviar.disabled = false;
            btnEnviar.textContent = btnEnviar.dataset.textoOriginal || 'Enviar';
        }

        exibirFeedback(respostaP, `Obrigado pela mensagem, ${nome}! Entraremos em contato em breve. 🚀`, 'sucesso');
        formulario.reset();
    });
}


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function exibirFeedback(elemento, mensagem, tipo) {
    if (!elemento) return;
    
    elemento.textContent = mensagem;
    elemento.className = ''; 
    elemento.classList.add(`feedback-${tipo}`);
}


document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});