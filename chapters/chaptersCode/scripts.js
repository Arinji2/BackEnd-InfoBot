const textBox = document.getElementById("input");
const choiceHead = document.getElementById("choiceHead");
const choiceYes = document.getElementById("choiceYes");
const choiceNo = document.getElementById("choiceNo");

// DOM Settings

choiceHead.style.visibility = "hidden";
choiceYes.style.visibility = "hidden";
choiceNo.style.visibility = "hidden";

//Storage

let Topics = ["series1", "series2"];
let Links = ["http://www.w3schools.com", "http://google.com"];

//Variables
let textBoxValue;
let length,
	i,
	j,
	characters,
	lengthArray,
	word,
	indexWord,
	buttonNumber,
	spaces = [0];

function confirmation(buttonNumber) {
	if (buttonNumber == 1) {
		buttonNumber = 1;
		console.log(buttonNumber);
	} else if (buttonNumber == 0) {
		console.log("No");
		buttonNumber = 0;
	}
	test(buttonNumber);
}

//prettier-ignore
function test(number) {
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
		console.log(word);
		indexWord = Topics.indexOf(word);
		if (indexWord !== -1) {
			choiceRender(1);
			choiceHead.innerHTML = "Did You Mean " + word;
			if(number == 1) {
				choiceRender(2)
			window.location.replace(Links[indexWord])
			}else if(number == 2) {
				choiceRender(2)
				continue;
			}
			
		}
	}
}

//prettier-ignore
function choiceRender(setting) {
	if(setting == 1){
	choiceHead.style.visibility = "visible";
	choiceYes.style.visibility = "visible";
	choiceNo.style.visibility = "visible";
}else if(setting == 2){
choiceHead.style.visibility = "hidden";
choiceYes.style.visibility = "hidden";
choiceNo.style.visibility = "hidden";}
}
