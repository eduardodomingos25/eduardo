const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem criou o avião?",
        alternativas: [
            {
                texto: "Santos Dumont!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Irmãos Wright!",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Quem foi o primeiro presidente do Brasil?",
        alternativas: [
            {
                texto: "Marechal Deodoro da Fonseca",
                afirmacao: "afirmacao"
            },
            {
                texto: "Marechal Cândido Rondon.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Quem foi o principal idealizador da Inconfidência Mineira?",
        alternativas: [
            {
                texto: "Tiradentes",
                afirmacao: "afirmacao"
            },
            {
                texto: "José de Anchieta.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Qual a maior cidade do Brasil?",
        alternativas: [
            {
                texto: "São Paulo.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Belém",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "Quais são os estados do Sul do Brasil?",
        alternativas: [
            {
                texto: "Paraná, Santa Catarina e Rio Grande do Sul",
                afirmacao: "afirmacao"
            },
            {
                texto: "São Paulo, Minas Gerais e Espírito Santo",
                afirmacao: "negacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
