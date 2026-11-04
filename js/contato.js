// --- 1. Lógica do Modo Escuro (caso queira o botão de tema também nesta página) ---
const btnTemaExistente = document.getElementById('tema');

function alternarModoEscuro() {
    document.body.classList.toggle('modo-escuro');
    if (document.body.classList.contains('modo-escuro')) {
        localStorage.setItem('tema', 'escuro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo claro ☀️';
    } else {
        localStorage.setItem('tema', 'claro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo escuro 🌙';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('modo-escuro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo claro ☀️';
    } else {
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo escuro 🌙';
    }
});

if (btnTemaExistente) {
    btnTemaExistente.addEventListener('click', alternarModoEscuro);
}


// --- 2. Lógica de Envio do Formulário de Contato ---
const formulario = document.getElementById('formulario');
const respostaP = document.getElementById('resposta');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita que a página recarregue

        // Captura os valores digitados (opcional, caso queira usar)
        const nome = document.getElementById('nome').value;

        // Exibe mensagem de sucesso estilizada
        respostaP.textContent = `Obrigado pela mensagem, ${nome}! Entraremos em contato em breve. 🚀`;
        respostaP.style.color = "#10b981"; // Verde sucesso
        respostaP.style.fontWeight = "600";
        respostaP.style.marginTop = "15px";

        // Limpa o formulário após o envio
        formulario.reset();
    });
}