// - Define the questions and the choices and the answers, put it in a variable in questions.js file
var startButton = document.querySelector("#start");
var timer = document.querySelector("#time");
var questions = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var feedBack = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var initialsButton = document.querySelector("#submit")
var timerEl;
var initialsInput;
var sec = 50;
var savedScores = JSON.parse(localStorage.getItem("scoreTest"))|| []
console.log(savedScores)
// var initials = "";


// - Display first question
questionsArray = [
  {
    title: "What is the capital of Canada?",
    answers: ["Toronto", "Ottawa", "Montreal", "Sydney"],
    correctAnswer: 1,
  },
  {
    title: "What is the capital of South Korea?",
    answers: ["Pyeongyang", "Beijing", "Busan", "Seoul"],
    correctAnswer: 3,
  },
  {
    title: "What is the capital of America?",
    answers: ["New york", "Washington D.C.", "Florida", "Seattle"],
    correctAnswer: 1,
  },
];
// - Timer -> add click event listener to "start quiz" button and trigger the timer
startButton.addEventListener("click", function (event) {
  event.preventDefault();

  //   timer starts
  timerEl = setInterval(function () {
    sec--;
    timer.textContent = sec;
    if (sec <= 0) {
      endQuiz();
    }
  }, 1000);

  //      hide the start screen
  startScreen.classList.add("hide");

  //second page
  questions.classList.remove("hide");

  // - Add click event listener to the choices div and check if the choice button is clicked
  showDifferentPages((l = 0));
});

// display different pages when answer is clicked
var showDifferentPages = function (l) {
  if (l < questionsArray.length) {
    // display the question
    questionTitle.textContent = questionsArray[l].title;
    var answerArray = questionsArray[l].answers;
    choices.innerHTML = "";
    // display answer buttons
    var answerButton = [];
    for (let i = 0; i < answerArray.length; i++) {
      answerButton[i] = document.createElement("button");
      answerButton[i].textContent = answerArray[i];
      choices.append(answerButton[i]);
    }

    // iterete through button to find if the pressed one is correct
    for (let k = 0; k < questionsArray[l].answers.length; k++) {
      answerButton[k].addEventListener("click", function (event) {
        event.preventDefault();

        if (k == questionsArray[l].correctAnswer) {
          feedBack.textContent = "Correct Answer";
        } else {
          feedBack.textContent = "Wrong Answer";
          sec -= 10;
        }
        showDifferentPages(l + 1);
      });
    }
  } else {
    endQuiz();
  }
};
var endQuiz = function() {
  endScreen.classList.remove("hide");
  questions.classList.add("hide");
  timer.textContent = sec;
  finalScore.textContent = sec;
  clearInterval(timerEl);

  
};

initialsButton.addEventListener("click", function () {
  var initialsInput = initials.value;
  savedScores = [...savedScores,{initials:initialsInput, scores:sec}]
  localStorage.setItem("scoreTest",JSON.stringify(savedScores))
  // localStorage.setItem("initials", JSON.stringify(initialsInput))
  // localStorage.setItem("scores", JSON.stringify(sec))
  console.log(initialsInput)
  console.log(sec)
})

