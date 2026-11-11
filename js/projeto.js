const meusProjetos = [
    {
        id: 1,
        titulo: "Portfólio Pessoal",
        descricao: "Meu site pessoal desenvolvido com HTML5, CSS3 moderno, variáveis de tema e modo escuro interativo.",
        imagem: "imagens/images.jpg", 
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        link: "index.html"
    },
    {
        id: 2,
        titulo: "Página de Contato Funcional",
        descricao: "Formulário estruturado com validação de campos e design responsivo para dispositivos móveis.",
        imagem: "imagens/images.jpg", 
        tecnologias: ["HTML5", "CSS", "JS"],
        link: "contato.html"
    },
    {
        id: 3,
        titulo: "Jogos & Experimentos Friv",
        descricao: "Espaço dedicado aos meus jogos favoritos e testes de lógica utilizando interações em JavaScript.",
        imagem: "imagens/images.jpg", 
        tecnologias: ["JavaScript", "Lógica", "DOM"],
        link: "#"
    }
];

let filtroAtual = "Todos";

function curtirProjeto(id) {
    let curtidas = parseInt(localStorage.getItem(`curtida_${id}`) || '0');
    curtidas++;
    localStorage.setItem(`curtida_${id}`, curtidas);
    
    const contador = document.getElementById(`count-${id}`);
    if (contador) {
        contador.textContent = curtidas;
    }
}

function filtrarProjetos(tecnologia, elementoBotao) {
    filtroAtual = tecnologia;

    const botoes = document.querySelectorAll('.btn-filtro');
    botoes.forEach(botao => botao.classList.remove('active'));

    if (elementoBotao) {
        elementoBotao.classList.add('active');
    }

    renderizarProjetos();
}

function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    if (!container) return;

    container.innerHTML = "";
    const fragmento = document.createDocumentFragment();

    const projetosFiltrados = meusProjetos.filter(proj => {
        if (filtroAtual === "Todos") return true;
        return proj.tecnologias.some(tech => tech.toLowerCase().includes(filtroAtual.toLowerCase()));
    });

    projetosFiltrados.forEach((proj) => {
        const curtidasAtuais = localStorage.getItem(`curtida_${proj.id}`) || '0';

        const card = document.createElement("div");
        card.classList.add("projeto-card");
    
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
                    <button class="btn-curtir" onclick="curtirProjeto(${proj.id})">
                        ❤️ <span id="count-${proj.id}">${curtidasAtuais}</span>
                    </button>
                </div>
            </div>
        `;

        fragmento.appendChild(card);
    });

    container.appendChild(fragmento);
}

window.addEventListener("DOMContentLoaded", renderizarProjetos);