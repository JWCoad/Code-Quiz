// Pull in all the elements

var timeleft = document.querySelector("#timeleft");

var questionText = document.querySelector("#questionArea");

var guessArea = document.querySelector("#answerArea");

var playButton = document.querySelector("#playButton");

var indexNum = 0;
var timeleftStart = 60;
var correct = 0;
var wrong = 0;
var play = true;
//Question bank

var questionBank = [
  {
    question: "What is HTML short for?",
    options: [
      "Hyper Text MarkDown Language  ",
      "Happy Text Markup Language",
      "Hyper Text Markup Language",
      "Header Test Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does the this Keyword do? ",
    options: [
      "This is a reference variable that refers to the current object",
      "This is a reference variable that refers to the current variable",
      "This is a reference object that refers to the current object",
      "This is a reference object that refers to the current variable",
    ],
    answer: "This is a reference variable that refers to the current object",
  },
  {
    question:
      "Whats is the diference between == and === comparison operators in Java Script ",
    options: [
      "One is a typo",
      "=== compares type and value == is just value",
      " == compares type and value === is just value",
      " more === more fun",
    ],
    answer: "=== compares type and value == is just value",
  },
  {
    question: "What is jQuery?",
    options: [
      "jQuery is a lightweight, write less, do more, JavaScript library",
      "jQuery is a Query on the j element ",
      " jQuery is a Function to run JavaScript ",
      " jQuery is a Class selector to select elemenets in css",
    ],
    answer: "jQuery is a lightweight, write less, do more, JavaScript library",
  },
  {
    question: "what is git used for?",
    options: [
      "Git is a CheatSheet used for learing JavaScript",
      "Git is Slang telling somone somthing",
      "Git used for Version control",
      " Git is a resource for attatching documents to html",
    ],
    answer: "Git used for Version control",
  },
  {
    question: "When would i use a Wireframe",
    options: [
      "When writing html document",
      " When hanging a picure ",
      "When planning basic structure a web page",
      " When choosing the correct css elements",
    ],
    answer: "When planning basic structure a web page",
  },
  {
    question: "Choose the correct syntax",
    options: ["var = x  0;", "var x = 0", "var 1 = 0;", "var x = 0;"],
    answer: "var x = 0;",
  },
];

// starts quiz, clears text area, and timer
const startQuiz = function () {
  remainingTime();
  questionText.setAttribute("style", "text-align: left;");
  guessArea.setAttribute("style", "margin-left: 25px; width: fit-content;");
  playButton.remove();

  questionStart();
};

// timeleft start and end game, game over man
var remainingTime = function () {
  var timeInterval = setInterval(function () {
    if (timeleftStart > 0 && play === true) {
      timeleft.innerText = timeleftStart;
      timeleftStart--;
    } else {
      timeleft.innerText = timeleftStart;
      timeleft.setAttribute("style", "color: red;");
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
};

function questionStart() {
  // ends quiz when questions empty
  if (indexNum === questionBank.length) {
    play = false;
  } else {
    // set variables from object in question bank
    var question = questionBank[indexNum].question;
    var options = questionBank[indexNum].options;
    answer = questionBank[indexNum].answer;
    // change h1 to the question
    questionText.textContent = question;
    // remove div contents
    guessArea.textContent = "";
    // for each of the 4 options, create a button and append it to the now empty div
    for (var i = 0; i < options.length; i++) {
      var btnEl = document.createElement("button");
      btnEl.className = "btn guess-list";
      btnEl.setAttribute("btn-id", [i + 1]);
      btnEl.textContent = `${[i + 1]}. ${options[i]}`;
      guessArea.appendChild(btnEl);
    }
    // increment indexNum to use in next run through
    indexNum++;
  }
}

// answer saver
var answerSave = function (event) {
  var guess1 = event.target;
  if (guess1.matches(".guess-list")) {
    var guessActual = guess1.getAttribute("btn-id");
    answerCheck(guessActual);
  }
};

// check answer
var answerCheck = function (guessActual) {
  if (guessActual === answer) {
    timeleftStart += 3;
    correct++;
    questionStart();
  } else {
    // subtract from timer, increase wrong var, display wrong, run next question
    timeleftStart -= 10;
    wrong++;
    questionStart();
  }
};

// function to gameOver when all questions answered or timer runs out
var gameOver = function () {
  // ensure score can't be negative
  if (timeleftStart < 0) {
    timeleftStart = 0;
    timeleft.innerText = timeleftStart;
  }
  // update DOM
  questionText.removeAttribute("style");
  questionText.textContent = "Your score was";
  guessArea.innerHTML = `<div>You got ${correct} questions correct and ${wrong} questions wrong.</div> <div>Your time score is: ${timeleftStart}.</div>`;
};

// event listener for click of start button
playButton.addEventListener("click", startQuiz);
// event listener for click of a guess button during quiz
guessArea.addEventListener("click", answerSave);
