
var inputString = "Animal loots foliated detail of stool lamina.";

function reverseString (str) {
	return str.split("").reverse().join("");
};

function removePunctuation (str) {
	return str.replace(/[.,!?']/g, "").replace(/ /g, "");
}

var changedCase = inputString.toUpperCase();
var shortOriginal = removePunctuation(changedCase);
var newWord = reverseString(shortOriginal);

function checkString () {
	console.log(newWord === shortOriginal);
}

checkString();

console.log(shortOriginal);
console.log(newWord);

	// {
	// 	console.log(true);
	// } else {
	// 	console.log(false);
	// }
// }

// Leah's code

// var isPalindrome = function(sentence){
//   var letters = sentence.replace(/[\W_]/g,"").toUpperCase();
//   var backWardsLetters = letters.split('').reverse().join('');
//   return letters === backWardsLetters
// };
