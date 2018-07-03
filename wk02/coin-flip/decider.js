var myCoin = ["heads", "tails"];

var countHeads = 0;
var countTails = 0;

function coinFlip () {
	if (myCoin[Math.floor(Math.random() * myCoin.length)] === "heads") {
		countHeads++;		
		console.log("HEADS = " + countHeads); 
		if (countHeads === 5) {
			console.log("WINNER!");
		}
	} else {
		countTails++; 
		console.log("TAILS = " + countTails);	
		if (countTails === 5) {
			console.log("WINNER!");
		}
	}
};


//can also do this with numbers, with 0 heads and 1 tails 







