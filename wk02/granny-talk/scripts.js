// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

// The year will be a random year between 1930 and 1950.

// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

//TRY TO TIDY THIS UP TO BE SIMPLER// 
//pass it a question, call within the function

var question = "HOW ARE YOU?";

function randomIntFromInterval(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

var randomYear = randomIntFromInterval(1930,1950);

function grannyTalk () {
	isUpperCase(question);
}

function isUpperCase(str) {
    if (str.toUpperCase() === str) {
    	if (str === "BYE") {
    			console.log("What's that honey, I didn't hear you...");
    	} else {
    	console.log("NO, NOT SINCE " + randomYear);
    	}
    } else {
    	console.log("SPEAK UP SONNY JIM");
    }
};

grannyTalk();


//SIMPLIFIED VERSION

// grannyTalk("HOW ARE YOU");
