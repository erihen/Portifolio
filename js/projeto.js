// Seleciona o container onde os projetos serão inseridos
const listaProjetos = document.querySelector("#lista-projetos");

// Função única e completa para criar o card de cada projeto
function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("projeto-card");

    // Gera o HTML das tags de tecnologias dinamicamente
    const badgesHTML = projeto.techs && projeto.techs.length > 0
        ? projeto.techs.map(tech => `<span class="badge">${tech}</span>`).join("")
        : "";

    // Imagem padrão caso o projeto não tenha imagem definida
    const imagemCapa = projeto.imagem || "imagens/projeto-placeholder.jpg";

    card.innerHTML = `
        <div class="card-thumb">
            <img src="${imagemCapa}" alt="Capa do projeto ${projeto.titulo}">
        </div>
        <div class="card-content">
            <h2>${projeto.titulo}</h2>
            <p>${projeto.descricao}</p>
            <div class="tech-list">
                ${badgesHTML}
            </div>
            <a href="${projeto.link || '#'}" class="btn-projeto" target="_blank" rel="noopener noreferrer">
                Ver Projeto &rarr;
            </a>
        </div>
    `;

    return card;
}

// Se você quiser usar a lista direto no código (sem JSON por enquanto):
const projetosLocais = [
    {
        titulo: "Protótipo Figma",
        descricao: "Protótipo de um site feito no Figma, com foco em design e experiência do usuário.",
        techs: ["Figma", "UI/UX"],
        link: "#"
    },
    {
        titulo: "Jogo da Memória",
        descricao: "Um jogo interativo de memória desenvolvido com HTML, CSS e JavaScript.",
        techs: ["HTML5", "CSS3", "JavaScript"],
        link: "#"
    },
    {
        titulo: "Calculadora",
        descricao: "Uma calculadora funcional que realiza operações matemáticas básicas.",
        techs: ["JavaScript", "CSS Grid"],
        link: "#"
    },
    {
        titulo: "To-Do List",
        descricao: "Aplicativo de lista de tarefas para organizar atividades diárias.",
        techs: ["JavaScript", "DOM", "LocalStorage"],
        link: "#"
    },
    {
        titulo: "Portfólio Pessoal",
        descricao: "Um site pessoal moderno para exibir projetos e habilidades.",
        techs: ["HTML5", "CSS3", "JS"],
        link: "#"
    }
];

function renderizarProjetos(dados) {
    if (!listaProjetos) return;
    listaProjetos.innerHTML = "";
    
    const fragmento = document.createDocumentFragment();
    dados.forEach(projeto => {
        fragmento.appendChild(criarCard(projeto));
    });
    
    listaProjetos.appendChild(fragmento);
}

// OPÇÃO 1: Renderizar direto com o array local (caso não use arquivo JSON externo)
renderizarProjetos(projetosLocais);