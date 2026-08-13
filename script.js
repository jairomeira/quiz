const questions = [
    {
        question: "Qual é o nome do portal dimensional por onde os Kaijus invadem a Terra?",
        options: ["A Fenda", "O Vórtice do Pacífico", "O Abismo de Mariana", "O Portal Alpha"],
        correct: 0
    },
    {
        question: "Onde fica localizado geograficamente o portal dos Kaijus?",
        options: ["Fossa das Marianas", "Trissecção do Pacífico", "Costa do Alasca", "Baía de Tóquio"],
        correct: 0
    },
    {
        question: "Qual é o nome do sistema operacional neuronal compartilhado que os pilotos usam para controlar os Jaegers?",
        options: ["Ponte Neural", "Conexão Sináptica", "A Deriva", "Link Cerebral"],
        correct: 2
    },
    {
        question: "De que país é originário o Jaeger Mark-3 chamado Gipsy Danger?",
        options: ["Japão", "Rússia", "Estados Unidos", "Austrália"],
        correct: 2
    },
    {
        question: "Quem pilota o Gipsy Danger junto com Raleigh Becket no início do filme?",
        options: ["Mako Mori", "Yancy Becket", "Chuck Hansen", "Stacker Pentecost"],
        correct: 1
    },
    {
        question: "Qual monstro marinho (Kaiju) mata o co-piloto Yancy Becket e danifica gravemente o Gipsy Danger no início?",
        options: ["Otachi", "Leatherback", "Knifehead", "Trespasser"],
        correct: 2
    },
    {
        question: "Qual é o nome do Jaeger russo de modelo Mark-1?",
        options: ["Cherno Alpha", "Striker Eureka", "Crimson Typhoon", "Tacit Ronin"],
        correct: 0
    },
    {
        question: "Quantos braços principais possui o Jaeger chinês Crimson Typhoon?",
        options: ["Dois", "Três", "Quatro", "Um"],
        correct: 1
    },
    {
        question: "Qual Jaeger é considerado o mais rápido e avançado (Mark-5) antes da destruição geral?",
        options: ["Gipsy Danger", "Striker Eureka", "Cherno Alpha", "Horizon Brave"],
        correct: 1
    },
    {
        question: "Quem são os criadores/pilotos trins do Crimson Typhoon?",
        options: ["Irmãos Wei", "Irmãos Hansen", "Irmãos Kaidonovsky", "Irmãos Becket"],
        correct: 0
    },
    {
        question: "Qual é a patente e o cargo de Stacker Pentecost na PPDC?",
        options: ["Marechal", "General", "Capitão", "Comandante-Chefe"],
        correct: 0
    },
    {
        question: "Quem é a jovem recrutada por Stacker Pentecost que possui uma conexão pessoal profunda com o Gipsy Danger?",
        options: ["Herc Hansen", "Mako Mori", "Newt Geiszler", "Dr. Hermann Gottlieb"],
        correct: 1
    },
    {
        question: "Qual cientista estuda os cérebros dos Kaijus e faz uma 'deriva' com um deles?",
        options: ["Dr. Hermann Gottlieb", "Dr. Newt Geiszler", "Dr. Jasper Schoenfeld", "Dr. Caitlin Lightcap"],
        correct: 1
    },
    {
        question: "O que o cientista Hermann Gottlieb estuda em relação ao evento de invasão dos Kaijus?",
        options: ["A biologia celular", "A estabilidade tectônica e matemática da Fenda", "O peso estrutural dos Jaegers", "A poluição radioativa"],
        correct: 1
    },
    {
        question: "Qual é o nome do contrabandista do mercado negro que negocia partes de Kaijus?",
        options: ["Hannibal Chau", "Tendo Choi", "Marshal Pentecost", "Axel"],
        correct: 0
    },
    {
        question: "De onde veio o nome do contrabandista Hannibal Chau?",
        options: ["É seu nome de nascimento", "É uma homenagem ao seu prato favorito (General Tso's Chicken)", "Ele inventou o nome para parecer perigoso", "Vejo no seu passaporte falso"],
        correct: 1
    },
    {
        question: "Qual Kaiju voador cospe ácido e é capaz de carregar o Jaeger Gpsy Danger
        ?",
        options: ["Otachi", "Leatherback", "Raiju", "Slattern"],
        correct: 0
    },
    {
        question: "Qual Kaiju de categoria 4 emite um pulso eletromagnético (EMP) capaz de desativar os sistemas eletrônicos dos Jaegers?",
        options: ["Otachi", "Leatherback", "Scunner", "Slattern"],
        correct: 1
    },
    {
        question: "Qual é a categoria do colossal Kaiju final que protege a Fenda, sendo o maior de todos (Categoria 5)?",
        options: ["Slattern", "Raiju", "Scunner", "Mutavore"],
        correct: 0
    },
    {
        question: "Qual arma secreta integrada o Gipsy Danger utiliza no último instante para destruir a colmeia/fenda na base dos alienígenas?",
        options: ["Espada de Cadeia (Chain Sword)", "Reator nuclear de auto destruição", "Lançador de mísseis térmicos", "Canhão de plasma de alta carga"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const finalMessage = document.getElementById("final-message");
const rankDisplay = document.getElementById("rank-display");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQ = questions[currentQuestionIndex];
    questionCounter.innerText = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
    scoreDisplay.innerText = `Pontos: ${score}`;
    questionText.innerText = currentQ.question;

    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(index, currentQ.correct));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
}

function selectAnswer(selectedIndex, correctIndex) {
    const buttons = optionsContainer.children;
    
    if (selectedIndex === correctIndex) {
        score++;
        buttons[selectedIndex].classList.add("correct");
    } else {
        buttons[selectedIndex].classList.add("incorrect");
        buttons[correctIndex].classList.add("correct");
    }

    scoreDisplay.innerText = `Pontos: ${score}`;

    // Desabilitar todos os botões após a escolha
    Array.from(buttons).forEach(button => button.disabled = true);
    
    nextBtn.classList.remove("hidden");
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    
    finalMessage.innerText = `Você acertou ${score} de ${questions.length} questões.`;

    let rank = "";
    if (score === 20) {
        rank = "Patente: Marechal da PPDC (Lendário!)";
    } else if (score >= 15) {
        rank = "Patente: Ranger Veterano de Elite";
    } else if (score >= 10) {
        rank = "Patente: Piloto em Treinamento na Deriva";
    } else {
        rank = "Patente: Alvo Fácil para Kaijus (Estudou pouco!)";
    }
    rankDisplay.innerText = rank;
}