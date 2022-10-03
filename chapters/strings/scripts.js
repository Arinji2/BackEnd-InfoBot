//Storage

let Topics = [
  "replace",
  "vowels,digits,spaces",
  "greaterstring",
  "palindrome",
  "surname-fullname",
  "togglecase",
  "reversestring",
  "surnamefirst",
  "ConsecutiveChar",
  "PreviousChar",
];
let Links = [
  "Articles/replace.html",
  "Articles/freq1.html",
  "Articles/greaterString.html",
  "Articles/palindromeWord.html",
  "Articles/surnameFullname.html",
  "Articles/togglecase.html",
  "Articles/reversestring.html",
  "Articles/surnamefirst.html",
  "Articles/ConsecutiveChar.html",
  "Articles/PreviousChar.html",
];
let stringbox = document.getElementById("input");
const choiceHead = document.getElementById("choiceHead");
const choiceYes = document.getElementById("choiceYes");
const choiceNo = document.getElementById("choiceNo");
const listDivHead = document.getElementById("list");

// DOM Settings

choiceHead.style.display = "none";
choiceYes.style.display = "none";
choiceNo.style.display = "none";

window.onload = function () {
  sessionStorage.clear();
};

let word = "",
  indexWord,
  topicWord,
  finalArrayOfWords = [];

var checkWord;

function getWordsArray(Stringbox) {
  let arrayOfWords = [];
  Stringbox = Stringbox + " ";
  for (i = 0; i < Stringbox.length; i++) {
    let letter = Stringbox.charAt(i);
    if (letter != " ") {
      word = word + letter;
    } else if (letter == " ") {
      arrayOfWords.push(word);
      word = "";
    }
  }
  return arrayOfWords;
}

function checkWordsArray(arrayOfWords) {
  if (arrayOfWords.length == 0) showError();
  for (i = 0; i < Topics.length; i++) {
    topicWord = Topics[i];
    for (j = 0; j < arrayOfWords.length; j++) {
      if (topicWord == arrayOfWords[j]) finalArrayOfWords.push(topicWord);
    }
  }
  return finalArrayOfWords;
}
function confirmation(number) {
  let words = sessionStorage.getItem("Words");
  console.log(words);
  words = JSON.parse(words);
  if (number == 3) {
    if (typeof words[0] == "undefined") {
      showError();
      return;
    }
    choiceRender(1);
    words[0] = toUpp(words[0]);
    choiceHead.innerHTML =
      "Did you Mean <span class='greenText'>" + words[0] + "</span>";
  }
  if (number == 1) {
    for (i = 0; i < Topics.length; i++) {
      if (Topics[i] == words[0]) window.location.assign(Links[i]);
    }
  }
  if (number == 0) {
    words.shift();
    sessionStorage.removeItem("Words");
    sessionStorage.setItem("Words", JSON.stringify(words));

    confirmation(3);
  }
}

function loading(number) {
  if (number === 1)
    output.innerHTML =
      'Output: Searching <i class="white fa-spin fa-solid fa-spinner"></i>';
  else if (number === 2) {
    output.innerHTML =
      'Output: Waiting for User Response <i class="white fa-spin fa-solid fa-spinner"></i>';
    choiceRender(1);
  }
}
function choiceRender(setting) {
  if (setting == 1) {
    choiceHead.style.display = "block";
    choiceYes.style.display = "block";
    choiceNo.style.display = "block";
  } else if (setting == 2) {
    choiceHead.style.display = "none";
    choiceYes.style.display = "none";
    choiceNo.style.display = "none";
  }
}

function showError() {
  console.log("Error");
  choiceRender(2);
  output.innerHTML =
    ' <i class="red fa-solid fa-circle-xmark"></i> <br /> Output: Unfortunately We Could not locate your Question, Please Try Again with a different Question';
  listPrograms();
  return;
}

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

function listPrograms() {
  if (list.style.display != "block") {
    list.style.display = "block";
    Topics.forEach((item) => {
      item = toUpp(item);
      let listDiv = document.getElementById("listItems");
      let text = document.createElement("li");
      let content = document.createTextNode(item);
      text.appendChild(content);
      listDiv.appendChild(text);
    });
  }
}

function main() {
  sessionStorage.clear();
  stringbox = document.getElementById("input");
  finalArrayOfWords = [];
  loading(1);
  setTimeout(() => {
    stringbox = stringbox.value;
    stringbox = stringbox.toLowerCase();
    let mainArrayOfWords = getWordsArray(stringbox);
    let finalArrayOfWords = checkWordsArray(mainArrayOfWords);
    sessionStorage.setItem("Words", JSON.stringify(finalArrayOfWords));
    sessionStorage.setItem("Option", 0);
    confirmation(3);
  }, 2000);
}
