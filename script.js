const quizData = [
    {
        question: "Which of the following language runs on web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Central Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVS Sailboats",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markdown Language",
        b: "Hypertext Markup Langauge",
        c: "Hyperloop Markdown Language",
        d: "Helicopters Terminals Motorboats Lambos",
        correct: "b",
    },
    {
        question: "What year Javascript was launched?",
        a: "1996",
        b: "1994",
        c: "1995",
        d: "1993",
        correct: "c",
    }
]

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerElements.forEach(answerEl => {
        answerEl.checked = false;
    })
}

function getSelected() {
    let answer;
    answerElements.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})