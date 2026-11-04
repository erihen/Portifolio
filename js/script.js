// --- 1. Lógica do Modo Escuro ---
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

// --- 2. Renderização de Gostos ---
const gostos = [
    { texto: "Jogos", emoji: "🎮" },
    { texto: "Animes", emoji: "✨" },
    { texto: "Viajar", emoji: "✈️" },
    { texto: "Esportes", emoji: "⚽" },
    { texto: "Friv", emoji: "🕹️" }
];

function renderizarLista(dados, seletorDestino) {
    const lista = document.querySelector(seletorDestino);
    if (!lista) return;

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

// --- 3. Efeito de Digitação Interativo ---
const palavras = ["Desenvolvedor Web 💻", "Entusiasta de Games 🎮", "Estudante de JS 🚀"];
let i = 0, j = 0, apagando = false;

function digitar() {
    const el = document.getElementById("texto-dinamico");
    if (!el) return;

    const palavraAtual = palavras[i];
    el.textContent = apagando ? palavraAtual.substring(0, j--) : palavraAtual.substring(0, j++);

    if (!apagando && j === palavraAtual.length + 1) {
        apagando = true;
        setTimeout(digitar, 1500);
    } else if (apagando && j === 0) {
        apagando = false;
        i = (i + 1) % palavras.length;
        setTimeout(digitar, 500);
    } else {
        setTimeout(digitar, apagando ? 50 : 100);
    }
}

// --- 4. Gerador de Frases Dev ---
const frases = [
    '"Todo grande código começa com uma ideia simples."',
    '"A prática leva à perfeição no código."',
    '"Pequenos passos diários constroem grandes projetos."',
    '"Aprender a programar é aprender a resolver problemas."',
    '"Se funciona e tá limpo, tá feito!"'
];

function inicializarFrases() {
    const btnFrase = document.getElementById("btn-frase");
    const elFrase = document.getElementById("frase-dev");

    if (btnFrase && elFrase) {
        btnFrase.addEventListener("click", () => {
            const aleatoria = frases[Math.floor(Math.random() * frases.length)];
            elFrase.textContent = aleatoria;
        });
    }
}

// Inicializações
window.addEventListener("DOMContentLoaded", () => {
    renderizarLista(gostos, "#gostos");
    digitar();
    inicializarFrases();
});