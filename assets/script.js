// Pull in all the elements

var timeleft = document.queryselector("#timeleft");
var questionText = document.queryselector("#questionActual");
var playButton = document.queryselector("playButton");
var answerButtons = document.queryselector("#answerButton");
var timeleftStart = 60;

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

// Attach start button function to the start button and init all needed functions

function startgame() {
  timeleftStart();
  questionStart();
}

function questionStart() {
  // if the indexNum is greater than length of the questionsArr, end quiz
  if (indexNum === questionBank.length) {
    play = false;
  } else {
    // set variables from object in questionsArr index
    var question = questionBank[indexNum].question;
    var options = questionBank[indexNum].options;
    answer = questionBank[indexNum].answer;
    // change h1 to the question
    questionEl.textContent = question;
    // remove div contents
    questionText.textContent = "";
    // for each of the 4 options, create a button and append it to the now empty div
    for (var i = 0; i < options.length; i++) {
      var btnEl = document.createElement("button");
      btnEl.className = "btn guess-list";
      btnEl.setAttribute("btn-id", [i + 1]);
      btnEl.textContent = `${[i + 1]}. ${options[i]}`;
      messageEl.appendChild(btnEl);
    }
    // increment indexNum to use in next run through
    indexNum++;
  }
}
