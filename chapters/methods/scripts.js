const textBox = document.getElementById("input");
const choiceHead = document.getElementById("choiceHead");
const choiceYes = document.getElementById("choiceYes");
const choiceNo = document.getElementById("choiceNo");
const listDivHead = document.getElementById("list");

// DOM Settings

choiceHead.style.visibility = "hidden";
choiceYes.style.visibility = "hidden";
choiceNo.style.visibility = "hidden";

//Storage

let Topics = ["overloadcalculate","overloadvolume];
let Links = ["Articles/overloadCalculate.html","Articles/overloadvolume.html"];

//Variables
var indexWord;
let textBoxValue;
let length,
  i,
  j,
  characters,
  lengthArray,
  word,
  buttonNumber,
  spaces = [0],
  indexNum = 0;
function toUpp(checkWord) {
  let checkLength = checkWord.length;
  let checkLetter;
  let newWord = "";
  for (i = 0; i < checkLength; i++) {
    checkLetter = checkWord.charAt(i);
    if (i == 0) checkLetter = checkLetter.toUpperCase();
    newWord = newWord + checkLetter;
  }
  return newWord;
}

function confirmation(buttonNumber) {
  if (buttonNumber == 1) {
    choiceRender(2);
    window.location.assign(Links[indexWord]);
  } else if (buttonNumber == 0) {
    output.innerHTML =
      ' <i class="red fa-solid fa-circle-xmark"></i> <br /> Output: Unfortunately We Could not locate your Question, Please Try Again with a different Question';
    choiceRender(2);
    listPrograms();
  }
}
function loading(number) {
  if (number === 1)
    output.innerHTML =
      'Output: Searching <i class="white fa-spin fa-solid fa-spinner"></i>';
  else if (number === 2)
    output.innerHTML =
      'Output: Waiting for User Response <i class="white fa-spin fa-solid fa-spinner"></i>';
}
//prettier-ignore
function main() {
	let output = document.getElementById("output");
	loading(1);
    setTimeout(()=>{
textBoxValue = textBox.value;
textBoxValue = textBoxValue.toLowerCase();
length = textBoxValue.length;
for (i = 0; i < length; i++) {
  characters = textBoxValue.charAt(i);
  if (characters == " ") {
    spaces.push(i);
  }
}

lengthArray = spaces.length;
for (i = 1; i <= lengthArray; i++) {
  word = textBoxValue.substring(spaces[--i], spaces[++i]);
  word = word.trim();
  indexWord = Topics.indexOf(word);

  if (indexWord !== -1) {
    choiceRender(1);
		loading(2);
    word = toUpp(word);

    choiceHead.innerHTML = "Did You Mean " + word;
  } 
  if(indexWord == -1 && i == lengthArray){
	  choiceRender(2);
output.innerHTML =
  ' <i class="red fa-solid fa-circle-xmark"></i> <br /> Output: Unfortunately We Could not locate your Question, Please Try Again with a different Question';
 listPrograms();



}
}
	},2000)
	
}

//prettier-ignore
function choiceRender(setting) {
	if(setting == 1){
	choiceHead.style.visibility = "visible";
	choiceYes.style.visibility = "visible";
	choiceNo.style.visibility = "visible";
}else if(setting == 2){
choiceHead.style.display = "none";
choiceYes.style.display = "none";
choiceNo.style.display = "none";
}
}

function listPrograms() {
  list.style.display = "block";
  Topics.forEach((item) => {
    item = toUpp(item);
    indexNum++;
    let listDiv = document.getElementById("listItems");
    let text = document.createElement("li");
    let content = document.createTextNode(item);
    text.appendChild(content);
    listDiv.appendChild(text);
  });
}
