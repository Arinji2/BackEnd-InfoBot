const textBox = document.getElementById("input");

//Storage
let chapters = ["chp1", "chp2", "chp3", "chp4"];
let chp1Topics = ["series1"];
let chp1Links = ["www.google.Series1.com"];

//Variables
let textBoxValue;
let length, i, j, characters, lengthArray, word;
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
    if(chp1Topics.indexOf(word) !== -1){
		console.log("Found")
	}
}
}
