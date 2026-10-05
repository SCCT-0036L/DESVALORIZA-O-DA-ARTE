// =====================================================
// DESVALORIZAÇÃO DA ARTE — QUESTIONÁRIO
// =====================================================


// =====================================================
// QUESTIONÁRIO 1
// =====================================================

const questionario1 = [

    {
        pergunta: "Qual artista do texto nasceu nos Países Baixos?",
        alternativas: [
            "Tarsila do Amaral",
            "Vincent van Gogh",
            "Pablo Picasso"
        ],
        correta: "Vincent van Gogh"
    },

    {
        pergunta: "Como eram as cores e as pinceladas nas obras de Vincent van Gogh?",
        alternativas: [
            "Claras e suaves",
            "Fortes e marcantes",
            "Neutras e discretas"
        ],
        correta: "Fortes e marcantes"
    },

    {
        pergunta: "Em que cidade Tarsila do Amaral nasceu?",
        alternativas: [
            "Capivari",
            "São Paulo",
            "Rio de Janeiro"
        ],
        correta: "Capivari"
    },

    {
        pergunta: "Com qual movimento artístico Tarsila do Amaral se relacionou?",
        alternativas: [
            "Barroco",
            "Modernismo brasileiro",
            "Cubismo"
        ],
        correta: "Modernismo brasileiro"
    },

    {
        pergunta: "Além de pintor, quais outras profissões artísticas Picasso exerceu?",
        alternativas: [
            "Escultor, desenhista e ceramista",
            "Músico, ator e poeta",
            "Arquiteto, cineasta e dançarino"
        ],
        correta: "Escultor, desenhista e ceramista"
    },

    {
        pergunta: "Qual obra de Picasso denuncia os horrores da guerra?",
        alternativas: [
            "Guernica",
            "Abaporu",
            "Pietà"
        ],
        correta: "Guernica"
    }

];


// =====================================================
// QUESTIONÁRIO 2
// =====================================================

const questionario2 = [

    {
        pergunta: "O que aconteceu com Frida Kahlo na adolescência?",
        alternativas: [
            "Ela viajou pela Europa",
            "Ela sofreu um grave acidente",
            "Ela começou a estudar arquitetura"
        ],
        correta: "Ela sofreu um grave acidente"
    },

    {
        pergunta: "O que a arte de Frida Kahlo valorizava?",
        alternativas: [
            "Elementos da cultura mexicana",
            "Apenas cenas da natureza",
            "Temas da mitologia grega"
        ],
        correta: "Elementos da cultura mexicana"
    },

    {
        pergunta: "Em que período da história Michelangelo viveu?",
        alternativas: [
            "Renascimento",
            "Idade Média",
            "Neoclassicismo"
        ],
        correta: "Renascimento"
    },

    {
        pergunta: "Qual obra Michelangelo pintou no teto de uma capela famosa?",
        alternativas: [
            "O Nascimento de Vênus",
            "O teto da Capela Sistina",
            "A Última Ceia"
        ],
        correta: "O teto da Capela Sistina"
    },

    {
        pergunta: "Qual artista foi pouco valorizado em vida, mas depois ganhou grande reconhecimento?",
        alternativas: [
            "Vincent van Gogh",
            "Frida Kahlo",
            "Tarsila do Amaral"
        ],
        correta: "Vincent van Gogh"
    },

    {
        pergunta: "Qual artista é considerado um dos maiores do Renascimento?",
        alternativas: [
            "Pablo Picasso",
            "Michelangelo",
            "Vincent van Gogh"
        ],
        correta: "Michelangelo"
    }

];


// =====================================================
// ELEMENTOS DA PÁGINA
// =====================================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const progressElement =
    document.getElementById("quiz-progress");

const questionLabel =
    document.getElementById("question-label");

const questionArea =
    document.querySelector(".question-area");

const resultArea =
    document.getElementById("result-area");

const scoreElement =
    document.getElementById("score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");

const artBackground =
    document.getElementById("quiz-art-background");


// =====================================================
// VARIÁVEIS
// =====================================================

let perguntas = [];

let perguntaAtual = 0;

let pontos = 0;


// =====================================================
// EMBARALHAR
// =====================================================

function embaralhar(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        const temporario = copia[i];

        copia[i] = copia[j];

        copia[j] = temporario;
    }

    return copia;
}


// =====================================================
// ESCOLHER IMAGEM
// =====================================================

function escolherImagem(pergunta) {

    const texto =
        pergunta.toLowerCase();


    // VAN GOGH

    if (texto.includes("van gogh")) {

        return "assets/imagens/vangogh.jpeg";
    }


    // TARSILA

    if (texto.includes("tarsila")) {

        return "assets/imagens/tarsila.jpg";
    }


    // PICASSO

    if (texto.includes("picasso")) {

        return "assets/imagens/picasso.jpeg";
    }


    // FRIDA KAHLO

    if (texto.includes("frida")) {

        return "assets/imagens/frida.jpeg";
    }


    // MICHELANGELO

    if (texto.includes("michelangelo")) {

        return "assets/imagens/michellangelo.jpg";
    }


    // NENHUM ARTISTA CITADO

    return null;
}


// =====================================================
// ATUALIZAR IMAGEM DE FUNDO
// =====================================================

function atualizarImagem(pergunta) {

    const imagem =
        escolherImagem(pergunta);


    // PERGUNTA SEM NOME DE ARTISTA

    if (imagem === null) {

        artBackground.classList.remove(
            "has-image"
        );

        artBackground.style.backgroundImage =
            "none";

        return;
    }


    // PERGUNTA COM ARTISTA

    artBackground.style.backgroundImage =
        'url("' + imagem + '")';

    artBackground.classList.add(
        "has-image"
    );
}


// =====================================================
// INICIAR QUESTIONÁRIO
// =====================================================

function iniciarQuestionario() {

    perguntaAtual = 0;

    pontos = 0;


    // 50% DE CHANCE PARA CADA QUESTIONÁRIO

    const sorteio =
        Math.random() < 0.5;


    if (sorteio) {

        perguntas = questionario1;

    } else {

        perguntas = questionario2;
    }


    questionArea.style.display =
        "block";


    resultArea.classList.remove(
        "active"
    );


    mostrarPergunta();
}


// =====================================================
// MOSTRAR PERGUNTA
// =====================================================

function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    // ATUALIZA A IMAGEM

    atualizarImagem(
        pergunta.pergunta
    );


    // NÚMERO DA PERGUNTA

    const numero =
        perguntaAtual + 1;


    const numeroFormatado =
        String(numero).padStart(
            2,
            "0"
        );


    // TEXTO DO PROGRESSO
    // SEM TEMPLATE LITERAL

    questionLabel.textContent =
        "PERGUNTA " + numeroFormatado;


    progressElement.textContent =
        numeroFormatado + " / 06";


    // PERGUNTA

    questionElement.textContent =
        pergunta.pergunta;


    // LIMPA AS ALTERNATIVAS ANTERIORES

    answersElement.innerHTML =
        "";


    answersElement.classList.remove(
        "answered"
    );


    // EMBARALHA AS ALTERNATIVAS

    const alternativas =
        embaralhar(
            pergunta.alternativas
        );


    const letras =
        ["A", "B", "C"];


    // CRIA OS BOTÕES

    alternativas.forEach(
        function (alternativa, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.type =
                "button";


            // LETRA

            const letra =
                document.createElement(
                    "span"
                );

            letra.className =
                "answer-letter";

            letra.textContent =
                letras[index];


            // TEXTO

            const texto =
                document.createElement(
                    "span"
                );

            texto.className =
                "answer-text";

            texto.textContent =
                alternativa;


            // ÍCONE

            const icone =
                document.createElement(
                    "span"
                );

            icone.className =
                "answer-icon";


            // COLOCA TUDO NO BOTÃO

            button.appendChild(
                letra
            );

            button.appendChild(
                texto
            );

            button.appendChild(
                icone
            );


            // CLIQUE

            button.addEventListener(
                "click",
                function () {

                    verificarResposta(
                        button,
                        alternativa,
                        pergunta.correta
                    );
                }
            );


            answersElement.appendChild(
                button
            );
        }
    );
}


// =====================================================
// VERIFICAR RESPOSTA
// =====================================================

function verificarResposta(
    botao,
    resposta,
    correta
) {

    // BLOQUEIA NOVOS CLIQUES

    answersElement.classList.add(
        "answered"
    );


    const botoes =
        document.querySelectorAll(
            ".answer-button"
        );


    // ACERTOU

    if (resposta === correta) {

        pontos++;


        botao.classList.add(
            "correct"
        );


        botao.querySelector(
            ".answer-icon"
        ).textContent = "✓";
    }


    // ERROU

    else {

        botao.classList.add(
            "wrong"
        );


        botao.querySelector(
            ".answer-icon"
        ).textContent = "×";


        // MOSTRA A RESPOSTA CORRETA

        botoes.forEach(
            function (item) {

                const texto =
                    item
                        .querySelector(
                            ".answer-text"
                        )
                        .textContent
                        .trim();


                if (texto === correta) {

                    item.classList.add(
                        "correct"
                    );


                    item.querySelector(
                        ".answer-icon"
                    ).textContent = "✓";
                }
            }
        );
    }


    // PRÓXIMA PERGUNTA

    setTimeout(
        function () {

            perguntaAtual++;


            if (
                perguntaAtual <
                perguntas.length
            ) {

                mostrarPergunta();

            } else {

                mostrarResultado();
            }

        },
        900
    );
}


// =====================================================
// RESULTADO
// =====================================================

function mostrarResultado() {

    // REMOVE A IMAGEM

    artBackground.classList.remove(
        "has-image"
    );


    artBackground.style.backgroundImage =
        "none";


    // ESCONDE PERGUNTAS

    questionArea.style.display =
        "none";


    // MOSTRA RESULTADO

    resultArea.classList.add(
        "active"
    );


    progressElement.textContent =
        "CONCLUÍDO";


    scoreElement.textContent =
        pontos;


    // MENSAGEM

    if (pontos === 6) {

        resultMessage.textContent =
            "Excelente! Você acertou todas as perguntas.";

    } else if (pontos >= 4) {

        resultMessage.textContent =
            "Muito bem! Você conhece bastante sobre esses artistas.";

    } else if (pontos >= 2) {

        resultMessage.textContent =
            "Bom começo. Ainda há muito da história da arte para descobrir.";

    } else {

        resultMessage.textContent =
            "A arte sempre reserva algo novo para aprender. Que tal tentar novamente?";
    }
}


// =====================================================
// TENTAR NOVAMENTE
// =====================================================

restartButton.addEventListener(
    "click",
    function () {

        iniciarQuestionario();
    }
);


// =====================================================
// COMEÇAR
// =====================================================

iniciarQuestionario();