// --- Lista de Projetos ---
const meusProjetos = [
    {
        id: 1,
        titulo: "Portfólio Pessoal",
        descricao: "Meu site pessoal desenvolvido com HTML5, CSS3 moderno, variáveis de tema e modo escuro interativo.",
        imagem: "imagens/images.jpg", // Você pode alterar o caminho da imagem aqui quando quiser
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        link: "index.html"
    },
    {
        id: 2,
        titulo: "Página de Contato Funcional",
        descricao: "Formulário estruturado com validação de campos e design responsivo para dispositivos móveis.",
        imagem: "imagens/images.jpg", // Você pode alterar o caminho da imagem aqui quando quiser
        tecnologias: ["HTML5", "CSS", "JS"],
        link: "contato.html"
    },
    {
        id: 3,
        titulo: "Jogos & Experimentos Friv",
        descricao: "Espaço dedicado aos meus jogos favoritos e testes de lógica utilizando interações em JavaScript.",
        imagem: "imagens/images.jpg", // Você pode alterar o caminho da imagem aqui quando quiser
        tecnologias: ["JavaScript", "Lógica", "DOM"],
        link: "#"
    }
];

// --- Função para Curtir o Projeto ---
function curtirProjeto(id) {
    let curtidas = parseInt(localStorage.getItem(`curtida_${id}`) || '0');
    curtidas++;
    localStorage.setItem(`curtida_${id}`, curtidas);
    
    const contador = document.getElementById(`count-${id}`);
    if (contador) {
        contador.textContent = curtidas;
    }
}

// --- Renderizar os Projetos na Tela ---
function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    if (!container) return;

    container.innerHTML = "";
    const fragmento = document.createDocumentFragment();

    meusProjetos.forEach((proj) => {
        // Recupera curtidas salvas no navegador
        const curtidasAtuais = localStorage.getItem(`curtida_${proj.id}`) || '0';

        const card = document.createElement("div");
        card.classList.add("projeto-card");

        // Cria as badges de tecnologias
        let techHtml = "";
        proj.tecnologias.forEach(tech => {
            techHtml += `<span class="badge">${tech}</span>`;
        });

        card.innerHTML = `
            <div class="card-thumb">
                <img src="${proj.imagem}" alt="${proj.titulo}">
            </div>
            <div class="card-content">
                <h2>${proj.titulo}</h2>
                <p>${proj.descricao}</p>
                <div class="tech-list">
                    ${techHtml}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                    <a href="${proj.link}" class="btn-projeto">Ver Projeto 🔗</a>
                    <button onclick="curtirProjeto(${proj.id})" style="background: none; border: none; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; gap: 5px; color: var(--text-color); font-weight: 600;">
                        ❤️ <span id="count-${proj.id}">${curtidasAtuais}</span>
                    </button>
                </div>
            </div>
        `;

        fragmento.appendChild(card);
    });

    container.appendChild(fragmento);
}

// Executa ao carregar a página de projetos
window.addEventListener("DOMContentLoaded", renderizarProjetos);