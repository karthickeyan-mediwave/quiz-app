const Questions = [{
  id: 1,
  q: "What is capital of India?",
  a: [{ text: "Gandhinagar", isCorrect: false },
  { text: "Surat", isCorrect: false },
  { text: "Delhi", isCorrect: true },
  { text: "Mumbai", isCorrect: false }
  ],
  category: "javascript"

},
{
  id: 2,
  q: "What is the largest river in the world?",
  a: [{ text: "Lampang", isCorrect: false, isSelected: false },
  { text: "Phuket", isCorrect: false },
  { text: "Ayutthaya", isCorrect: false },
  { text: "Amazon River", isCorrect: true }
  ],
  category: "css"

},
{
  id: 3,
  q: "What is the capital of Thailand?",
  a: [{ text: "Lampang", isCorrect: false, isSelected: false },
  { text: "Phuket", isCorrect: false },
  { text: "Ayutthaya", isCorrect: false },
  { text: "Bangkok", isCorrect: true }
  ],
  category: "css"

},
{
  id: 4,
  q: "Which is the largest state of India?",
  a: [{ text: "Gujarat", isCorrect: false, isSelected: false },
  { text: "Rajasthan", isCorrect: true },
  { text: "Tamil Nadu", isCorrect: false },
  { text: "Puducherry", isCorrect: false }
  ],
  category: "javascript"

},
{
  id: 5,
  q: "Which is the hardest substance available on earth?",
  a: [{ text: "Platinum", isCorrect: false, isSelected: false },
  { text: "Silver", isCorrect: false },
  { text: "Diamond", isCorrect: true },
  { text: "Gold", isCorrect: false }
  ],
  category: "html"

},
{
  id: 6,
  q: "What is the world’s largest ocean?",
  a: [{ text: "Arctic Ocean", isCorrect: false, isSelected: false },
  { text: "Indian Ocean", isCorrect: false },
  { text: "Pacific Ocean", isCorrect: true }
  ],
  category: "html"

},
{
  id: 7,
  q: "Name the largest planet of our Solar System?",
  a: [{ text: "Earth", isCorrect: false, isSelected: false },
  { text: "Venus", isCorrect: false },
  { text: "Jupiter", isCorrect: true },
  { text: "Neptune", isCorrect: false }
  ],
  category: "javascript"

},
{
  id: 8,
  q: "Which was the first country to use paper money?",
  a: [{ text: "Japan", isCorrect: false, isSelected: false },
  { text: "America", isCorrect: false },
  { text: "China", isCorrect: true },
  { text: "India", isCorrect: false }
  ],
  category: "html"

},
{
  id: 9,
  q: "Which is the largest animal in the world?",
  a: [{ text: "Blue whale", isCorrect: true, isSelected: false },
  { text: "Elephant", isCorrect: false }
  ],
  category: "javascript"
},
{
  id: 10,
  q: "Which is the largest ‘Democracy’ country in the world?",
  a: [{ text: "India", isCorrect: true },
  { text: "America", isCorrect: false },
  { text: "China", isCorrect: false }
  ],
  category: "css"

}];



function loadQues(category) {

  const question = document.getElementById("ques")
  question.innerHTML = "";
  const opt = document.getElementById("opt")
  


  var id = 1;
  for (let z = 0; z < Questions.length; z++) {
    
      if(category == Questions[z].category){
      
      var fullDiv = document.createElement("div");
      var quesDiv = document.createElement("div");
      var optDiv = document.createElement("div");
      var idHidden = document.createElement("input");

      idHidden.type = "hidden";
      idHidden.value = Questions[z].id;
      idHidden.className = "questNum";
      idHidden.name = "questNum";
      quesDiv.id = 'ques' + z;
      optDiv.id = 'opt' + z;
      fullDiv.id = 'mydiv' + z;

      quesDiv.className = 'questionDiv';
      optDiv.className = 'optionDiv';
      fullDiv.className = 'section';

      quesDiv.textContent = id + '. ' + Questions[z].q;


      for (let i = 0; i < Questions[z].a.length; i++) {
        var op = document.createElement("div");
        op.className = 'opt ' + i;

        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        

        choice.type = "radio";
        choice.name = "answer" + z;
        
        choice.value = Questions[z].a[i].text;

        choiceLabel.textContent = Questions[z].a[i].text;

        op.appendChild(choice);
        op.appendChild(choiceLabel);
        optDiv.appendChild(op)

      }
      optDiv.appendChild(idHidden)
      fullDiv.appendChild(quesDiv);
      fullDiv.appendChild(optDiv);
      question.appendChild(fullDiv);
      id++;
    }

  }

}

loadQues();
const submitbtn = document.querySelector('#catageory-submitBtn')
submitbtn.addEventListener('click', function () {
const categorySelect = document.getElementById("categorySelect");
const selectedCategory = categorySelect.value;

loadQues(selectedCategory);

const checkAnswerButton = document.getElementById("btn");
  checkAnswerButton.style.display = "block";
});

function checkAns() {
  var ansDivElements = document.querySelectorAll(".ansDiv");
for (var i = 0; i < ansDivElements.length; i++) {
ansDivElements[i].remove();
}
  var elements = document.getElementsByClassName("optionDiv");

  for (var x = 0; x < elements.length; x++) {
    var crtAns = document.createElement("div");
    
    crtAns.className = 'ansDiv';
    var correctAns = '';
    var questNumber = elements[x].querySelector('.questNum').value;

    var object = Questions.find(obj => obj.id == questNumber);
    if(elements[x].querySelector('input[type="radio"]:checked')){
      var selectedAns = elements[x].querySelector('input[type="radio"]:checked').value;
      elements[x].parentElement.classList.remove('correct');
      elements[x].parentElement.classList.remove('wrong');
      var isCorrectAns = false;
      for(let y=0; y < object.a.length; y++){
        if(object.a[y].isCorrect ){
          correctAns = '<p>Answer: <b>' + object.a[y].text + '</b></p>';
        }
        if(object.a[y].isCorrect && object.a[y].text == selectedAns){
          isCorrectAns = true;
        }
      }
      if(isCorrectAns){
        elements[x].parentElement.classList.add('correct');
      }else{
        elements[x].parentElement.classList.add('wrong');
      }
      crtAns.innerHTML = correctAns;
      elements[x].parentElement.appendChild(crtAns);
    }
  }
}