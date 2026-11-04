// --- 1. Lógica do Modo Escuro ---
const btnTema = document.createElement("button"); // Caso queira criar via JS, ou use o do HTML se já tiver
// Nota: Se você já tem o botão no seu HTML com id="tema", use a linha abaixo:
const btnTemaExistente = document.getElementById('tema');

// Função para aplicar ou remover o modo escuro
function alternarModoEscuro() {
    document.body.classList.toggle('modo-escuro');
    
    // Verifica se está ativo e salva a preferência
    if (document.body.classList.contains('modo-escuro')) {
        localStorage.setItem('tema', 'escuro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo claro ☀️';
    } else {
        localStorage.setItem('tema', 'claro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo escuro 🌙';
    }
}

// Carrega a preferência salva do usuário ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('modo-escuro');
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo claro ☀️';
    } else {
        if (btnTemaExistente) btnTemaExistente.textContent = 'Modo escuro 🌙';
    }
});

// Adiciona o evento de clique se o botão existir no HTML
if (btnTemaExistente) {
    btnTemaExistente.addEventListener('click', alternarModoEscuro);
}


// --- 2. Lógica de Renderização dos Gostos ---
const gostos = [
    { texto: "Jogos", emoji: "🎮" },
    { texto: "Animes", emoji: "✨" },
    { texto: "Viajar", emoji: "✈️" },
    { texto: "Esportes", emoji: "⚽" },
    { texto: "Friv", emoji: "🕹️" }
];

function renderizarLista(dados, seletorDestino) {
    const lista = document.querySelector(seletorDestino);
    if (!lista) return; // Segurança caso o elemento não exista na página
    
    lista.innerHTML = "";
    const fragmento = document.createDocumentFragment();

    dados.forEach((dado) => {
        const item = document.createElement("li");
        item.classList.add("gosto-card");
        
        item.innerHTML = `
            <span class="emoji">${dado.emoji}</span>
            <span class="texto">${dado.texto}</span>
        `;
        
        fragmento.appendChild(item);
    });

    lista.appendChild(fragmento);
}

// Chamando a função para preencher a lista
renderizarLista(gostos, "#gostos");