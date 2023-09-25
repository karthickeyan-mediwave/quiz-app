Questions = [
  {
    id: 1,
    q: "Which symbol is used for comments in JavaScript? ",
    a: [
      { text: "slash", isCorrect: false },
      { text: "comma", isCorrect: false },
      { text: "Double slash", isCorrect: true },
      { text: "single slash", isCorrect: false },
    ],
    category: "javascript",
  },
  {
    id: 2,
    q: "What does the ‘a’ in rgba mean?",
    a: [
      { text: "Anger tag", isCorrect: false },
      { text: "Alter tag", isCorrect: false },
      { text: "Align tag", isCorrect: false },
      { text: "Transparency of elements", isCorrect: true },
    ],
    category: "css",
  },
  {
    id: 3,
    q: "What are CSS HSL Colors?",
    a: [
      { text: "Light color", isCorrect: false },
      { text: "Pink color", isCorrect: false },
      { text: "Dark color", isCorrect: false },
      { text: "Hue, Saturation, and Lightness", isCorrect: true },
    ],
    category: "css",
  },
  {
    id: 4,
    q: "Which company developed JavaScript?",
    a: [
      { text: "Google", isCorrect: false },
      { text: "Netscape", isCorrect: true },
      { text: "Tandia", isCorrect: false },
      { text: "Pulse", isCorrect: false },
    ],
    category: "javascript",
  },
  {
    id: 5,
    q: "What does HTML stand for?",
    a: [
      { text: "HyperText  Language", isCorrect: false },
      { text: "HyperText ", isCorrect: false },
      { text: "HyperText Markup Language", isCorrect: true },
      { text: "Markup Language", isCorrect: false },
    ],
    category: "html",
  },
  {
    id: 6,
    q: "What are Attributes in HTML?",
    a: [
      { text: "Special tag", isCorrect: false },
      { text: "style tag", isCorrect: false },
      { text: "Alter the behavior of the tag.", isCorrect: true },
    ],
    category: "html",
  },
  {
    id: 7,
    q: "What do you mean by NULL in JavaScript?",
    a: [
      { text: "value ", isCorrect: false },
      { text: "Value All", isCorrect: false },
      { text: "No value ", isCorrect: true },
      { text: "NaN", isCorrect: false },
    ],
    category: "javascript",
  },
  {
    id: 8,
    q: "What is an Anchor tag in HTML?",
    a: [
      { text: "Heading tag", isCorrect: false },
      { text: "Para tag", isCorrect: false },
      { text: "An anchor tag is used to link ", isCorrect: true },
      { text: "Div tag", isCorrect: false },
    ],
    category: "html",
  },
  {
    id: 9,
    q: "What is a prompt box?",
    a: [
      { text: "Dialog box", isCorrect: true },
      { text: "Special box", isCorrect: false },
      { text: "Div box", isCorrect: false },
      { text: "Container box", isCorrect: false },
    ],
    category: "javascript",
  },
  {
    id: 10,
    q: "What is CSS border?",
    a: [
      { text: "Allow style the border", isCorrect: true },
      { text: "Border padding", isCorrect: false },
      { text: "Border margin", isCorrect: false },
    ],
    category: "css",
  },
];

function loadQues(category) {
  const question = document.getElementById("ques");
  question.innerHTML = "";
  const opt = document.getElementById("opt");

  let id = 1;
  for (let z = 0; z < Questions.length; z++) {
    if (category == Questions[z].category) {
      let fullDiv = document.createElement("div");
      let quesDiv = document.createElement("div");
      let optDiv = document.createElement("div");
      let idHidden = document.createElement("input");

      idHidden.type = "hidden";
      idHidden.value = Questions[z].id;
      idHidden.className = "questNum";
      idHidden.name = "questNum";
      quesDiv.id = "ques" + z;
      optDiv.id = "opt" + z;
      fullDiv.id = "mydiv" + z;

      quesDiv.className = "questionDiv";
      optDiv.className = "optionDiv";
      fullDiv.className = "section";

      quesDiv.textContent = id + ". " + Questions[z].q;

      for (let i = 0; i < Questions[z].a.length; i++) {
        let op = document.createElement("div");
        op.className = "opt " + i;

        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer" + z;

        choice.value = Questions[z].a[i].text;

        choiceLabel.textContent = Questions[z].a[i].text;

        op.appendChild(choice);
        op.appendChild(choiceLabel);
        optDiv.appendChild(op);
      }
      optDiv.appendChild(idHidden);
      fullDiv.appendChild(quesDiv);
      fullDiv.appendChild(optDiv);
      question.appendChild(fullDiv);
      id++;
    }
  }
}

loadQues();

const submitbtn = document.querySelector("#catageory-submitBtn");
submitbtn.addEventListener("click", function () {
  const categorySelect = document.getElementById("categorySelect");
  const selectedCategory = categorySelect.value;
  if (selectedCategory == "") {
    const error = document.getElementById("error-msg");
    error.style.display = "block";
    return false;
  } else {
    loadQues(selectedCategory);

    let checkAnswerButton = document.getElementById("btn");
    checkAnswerButton.style.display = "block";
    checkAnswerButton = true;

    let pageRedirect = document.querySelector("#catageory-container");
    pageRedirect.style.display = "none";

    let back = document.querySelector("#BackBtn");
    back.style.display = "block";

    let ques = document.querySelector("#ques");
    ques.style.display = "block";
    saveToLocalStorage();
  }
});
function back() {
  const pageRedirect = document.querySelector("#catageory-container");
  pageRedirect.style.display = "block";
  const ques = document.querySelector("#ques");
  ques.style.display = "none";
  const back = document.querySelector("#BackBtn");
  back.style.display = "none";
  const checkAnswerButton = document.getElementById("btn");
  checkAnswerButton.style.display = "none";
  window.location.reload();
}

function checkAns() {
  var ansDivElements = document.querySelectorAll(".ansDiv");
  for (let i = 0; i < ansDivElements.length; i++) {
    ansDivElements[i].remove();
  }
  let elements = document.getElementsByClassName("optionDiv");

  for (let x = 0; x < elements.length; x++) {
    let crtAns = document.createElement("div");
    let userAns = document.createElement("div");

    crtAns.className = "ansDiv";
    userAns.className = "userAnsDiv";
    let correctAns = "";
    let userAnswer = "";

    var questNumber = elements[x].querySelector(".questNum").value;

    let object = Questions.find((obj) => obj.id == questNumber);
    if (elements[x].querySelector('input[type="radio"]:checked')) {
      var selectedAns = elements[x].querySelector(
        'input[type="radio"]:checked'
      ).value;
      let isCorrectAns = false;
      for (let y = 0; y < object.a.length; y++) {
        if (object.a[y].isCorrect) {
          correctAns = "<p> Answer: <b>" + object.a[y].text + "</b></p>";
        }
        if (object.a[y].isCorrect && object.a[y].text == selectedAns) {
          isCorrectAns = true;
        }
      }
      if (isCorrectAns) {
        elements[x].parentElement.classList.add("correct");
      } else {
        elements[x].parentElement.classList.add("wrong");
      }
      crtAns.innerHTML = correctAns;
      elements[x].parentElement.appendChild(crtAns);
    }
  }
}
function saveToLocalStorage() {
  // const categorySelect = document.getElementById("categorySelect");
  const selectedCategory = categorySelect.value;
  const selected = selectedCategory;
  let str = JSON.stringify(selected);

  localStorage.setItem("my-questions-list", str);
  console.log(str);
}

function getFromLocalStorage() {
  let str = localStorage.getItem("my-questions-list");
  // if (!str) {
  //   Questions = [];
  // } else {
  //   Questions = JSON.parse(str);
  // }
}
getFromLocalStorage();
