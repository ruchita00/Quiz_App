let questions = [
  {
    id: 1,
    question: " Which of the following is true about React",
    answer: "All of the above.",
    option: [
      "React is a JavaScript library for building user interfacs.",
      "React is used to build single page applications.",
      "React allows us to create reusable UI components.",
      "All of the above.",
    ],
  },
  {
    id: 2,
    question: " Which command is used Install create-react",
    answer: "npm install -g create-react-app",
    option: [
      "npm install create-react-app.",
      "install -g create-react-app.",
      "npm install -g create-react-app.",
      "npm install -f create-react-app.",
    ],
  },
  {
    id: 3,
    question: " Initial Release to the Public (V0.3.0) was in",
    answer: "2013",
    option: ["2011", "2012", "2013", "2014"],
  },
  {
    id: 4,
    question: " Main type of functions does not includes",
    answer: "top down procedure",
    option: [
      "built-in function",
      "top down procedure",
      "user-defined function",
      "programmer defined function",
    ],
  },
  {
    id: 5,
    question: " To create a class inheritance, use the .........keyword",
    answer: "extends",
    option: ["create", "inherits", "extends", "this"],
  },
  {
    id: 6,
    question: " In ES6, how many ways of defining your variables",
    answer: "3",
    option: ["3", "4", "5", "6"],
  },
  {
    id: 7,
    question: " Everything in react is a",
    answer: "Component",
    option: ["Module", "Component", "Package", "Class"],
  },
  {
    id: 8,
    question:
      " In React, component properties should be kept in an object called",
    answer: "state",
    option: ["Component", "super", "state", "props"],
  },
  {
    id: 9,
    question: " 'Object program' is also called",
    answer: "Machine code",
    option: [
      "Program code",
      "Assembler",
      "Compiler",
      "Machine code",
    ],
  },
  {
    id: 10,
    question: " Data Structure in which all elements have similar name is considered as",
    answer: "Array.",
    option: [
      "Array.",
      "String Structure.",
      "Data Structure.",
      "Positive Structure."
    ],
  },
  {
    id: 11,
    question: " Program used for interactive computing is",
    answer: "B.E. is Bacholer of engineering",
    option: [
      "Executor",
      "Translator",
      "Instructor.",
      "Interpreter.",
    ],
  },
  {
    id: 12,
    question: " Usually a pure virtual function",
    answer: "Is defined only in derived class.",
    option: [
      "Has complete function body.",
      "Will never be called.",
      "Will be called only to delete an object.",
      "Is defined only in derived class.",
    ],
  },
  {
    id: 13,
    question: " Special character symbol '/' is used to indicate",
    answer: "Directive.",
    option: [
      "Directive.",
      "Direction.",
      "Director.",
      "Direction Arrows.",
    ],
  },
  {
    id: 14,
    question: " Examples of program routine are",
    answer: "All of the Above.",
    option: [
      "Complete short program.",
      "Set of instructions used.",
      "Part of a program.",
      "All of the Above.",
    ],
  },
  {
    id: 15,
    question: " First Component in algorithm is",
    answer: "Sequence.",
    option: [
      "Character structure.",
      "Repition.",
      "Sequence.",
      "Selection.",
    ],
  },
];

window.onload = function () {
  let user1 = document.getElementById("name");
  let username = sessionStorage.getItem("name");
  user1.innerHTML = username;

  show(0);
  T();
};

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  ////////////////store player name
  sessionStorage.setItem("name", name);
  location.href = "dist/quiz.html";
}

function T() {
  let timer = document.querySelector("#timer");

  let dt = new Date(new Date().setTime(0));
  let time = dt.getTime();

  let sec = Math.floor((time % (100 * 60)) / 1000);
  let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  let timex = 0;

  setInterval(() => {
    if (sec < 59) {
      sec++;
    } else {
      min++;
      sec = 0;
    }
    let formatted_sec = sec < 10 ? `0${sec}` : `${sec}`;

    let formatted_min = min < 10 ? `0${min}` : `${min}`;
    timer.innerHTML = `${formatted_min}:${formatted_sec}`;
  }, 1000);
}

let count = 0;
let points = 0;

function next() {
  let user_ans = document.querySelector("li.active").innerHTML;
  let timer = document.getElementById("timer").innerHTML;

  /////////////check user answer
  if (user_ans == questions[count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }

  if (count == questions.length - 1) {
    sessionStorage.setItem("points", points);
    sessionStorage.setItem("timer", timer);
    location.href = "result.html";
    return;
  }

  count++;
  show(count);

  // if(count>=questions.length)
  //     count=questions.length-1;
}

function previous() {
  count--;
  if (count < 0) {
    count = 0;
    show(count);
  }
  show(count);
}

function toggleActive() {
  let option = document.querySelectorAll("li");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function show(count) {
  let qtn = document.getElementById("questions");

  qtn.innerHTML = `<h2>Q${count + 1}.${questions[count].question} ?</h2>
                    <ul class="option_group">
                    <li>${questions[count].option[0]}</li>
                    <li>${questions[count].option[1]}</li>
                    <li>${questions[count].option[2]}</li>
                    <li>${questions[count].option[3]}</li>
                    </ul> 
                    `;

  // user_score.innerHTML=user_score_value;
  toggleActive();
}

function EndGame(e) {
  sessionStorage.clear();
  e.preventDefault()
  location.href = "../index.html";
  return;
}
function TryAgain(e) {
  points = 0;
  sessionStorage.setItem("points", points);
  e.preventDefault()
  location.href = "quiz.html";
  return;
}

let max_score = document.getElementById("max_score");
let qtns = questions.length;
max_score.innerHTML = qtns * 10;
