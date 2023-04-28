const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Langauge",
        b: "Hyper Text Makeup Langauge",
        c: "Happy Text Markup Langauge",
        d: "Hypertext Markup Laughing",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Copy Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Super Sheets",
        d: "Copy Super Sad",
        correct: "b",
    },
    {
        question: "What is a tool to view a project?",
        a: "Liver Service",
        b: "IDK",
        c: "Live Server",
        d: "Project viewing",
        correct: "c",
    },
    {
        question: "When was HTML invented?",
        a: "2005",
        b: "1962",
        c: "1988",
        d: "1993",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score ++
        } 
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            endQuiz()
        }
    }
})



var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " end of quiz."; 

        if(secondsLeft === 0) { 
            clearInterval(timerInterval);
        }
    }, 1000);
}

function endQuiz() {
    quiz.innerHTML = `
            <h2>You got ${score}/${quizData.length} questions right!</h2>
            <button onclick="location.reload()">Reload</button>
            `
}

setTime();

