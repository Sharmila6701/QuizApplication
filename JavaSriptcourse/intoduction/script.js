const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "India", correct: false },
            { text: "Japan", correct: true },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Buenos Aires", correct: false },
            { text: "Santiago", correct: false },
            { text: "Lima", correct: false },
            { text: "Brasília", correct: true }
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What is the capital of South Africa?",
        answers: [
            { text: "Nairobi", correct: false },
            { text: "Cairo", correct: false },
            { text: "Pretoria", correct: true },
            { text: "Lagos", correct: false }
        ]
    },
    
];



let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.getElementById("score-container");

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;

    if (correct) {
        score++;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    answerButtons.querySelector('.answer-button').classList.remove("correct", "wrong");
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        nextButton.style.display = "none";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = "Quiz Finished!";
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
    scoreContainer.innerText = "Your Score: " + score + " out of " + quizData.length;
}

startQuiz();
