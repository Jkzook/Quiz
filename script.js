const startBtn = document.getElementById('start');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const submitBtn = .getElementById('submit');
const studentScoreBtn = document.getElementById('score');
const questionTText = document.getElementById('text');

let currentQuestion = 0;
var score = 0;

let questions = [
        {question 1: "what is vanilla JavaScript?",
                  answers: [
                    {option: "ice cream  flavor",answer:wrong},
                    {option: "basic JavaScript",answer:right},
                    {option: "a type of html",answer:wrong},
                
                ]}]
        {question 2: "what does html stand for?",
                answers: [
                  {option: "how to make langauge",answer:wrong},
                  {option: "the style sheet for a website",answer:wrong},
                  {option: "hypertext markup language",answer:right},
              
              ]}]

startBtn.addEventListener('click',start);
previousBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function startQuiz(){
    currentQuestion = 0;
    questionTText.innerHTML = questions[currentQuestion.question;
    nextBtn.onclick = () =>
        if(score<3){
            score++;
        }]
}