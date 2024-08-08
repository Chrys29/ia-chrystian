const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os animais são inofensivos e a maioria precisa de ajuda. como ajudá los?",

        alternativas: [
            {
                texto: "voce pode estar adotando um animalzinho.",
                afirmacao: "afirmacao"

            },
            {
                texto: "abrigo de animais.",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Plantar árvores frutíferas é essencial para sustentar o meio ambiente e fornecer alimentos frescos aumentando a quantidade de árvores e melhorando a qualidade de vida da população. Qual seria a melhor maneira para começar essa iniciativa?",
        alternativas: [
            {
                texto: "Escolha espécies frutíferas adequadas á sua região, prepare bem o solo e plante em áreas com boa luz solar.",
                afirmacao: "afirmaccao"
            },
            {
                texto: "Escolher lugares estratégicos onde podemos aproveitar ao máximo os benefícios que as árvores tem a oferecer. ",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Museus são importantes para ver a trajetória de nossos antepassados,  mas um dia nós seremos a história. O que você quer deixar para a história?",

        alternativas: [
            {
                texto: "eu quero deixar um legado!",
                afirmacao: " afirmacao"
            },
            {
                texto: "eu não ligo para a historia, oque importa é o agora, e o futuro!",
                afirmacao: "afirmacao"
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostrarPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();