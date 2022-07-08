const textBox = document.getElementById("input");
const choiceHead = document.getElementById("choiceHead");
const choiceYes = document.getElementById("choiceYes");
const choiceNo = document.getElementById("choiceNo");

//Storage
let chapters = ["chp1", "chp2", "chp3", "chp4"];
let chp1Topics = ["series1"];
let chp1Links = ["www.google.Series1.com"];

//Variables
let textBoxValue;
let length, i, j, characters, lengthArray, word, indexWord;
let spaces = [0];
//prettier-ignore
function test() {
	textBoxValue = textBox.value
	textBoxValue = textBoxValue.toLowerCase()
	length = textBoxValue.length
	for (i = 0; i < length; i++) {
		characters = textBoxValue.charAt(i)
		if (characters == " ") {
			spaces.push(i);
			
		}
		
	}

lengthArray = spaces.length
for(i = 1; i<=lengthArray; i++) {
   
	word = textBoxValue.substring((spaces[--i]),(spaces[++i]))
	word =word.trim();
	console.log(word)
    indexWord = chp1.Topics.indexof(word);
    if(indexWord !== -1){
		
	}
}
}
//prettier-ignore
function choiceRender() {
	choiceHead.style.visbility = 'visible';
	choiceYes.visibility.visible;
	choiceNo.visibility.visible;
}

choiceRender();
