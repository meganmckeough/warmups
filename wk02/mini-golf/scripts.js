// function totalScores () {
// 	console.log("Bob: " +  totalScoreBob);
// }

var bobScore = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimboScore = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fishScore = [2, 2, 4, 5, 4, 3, 6, 4 ,1];

var totalScores = function (array) {
	return array.reduce((total, amount) => total + amount);
};

var totalBob = totalScores(bobScore);
var totalJimbo = totalScores(jimboScore);
var totalFish = totalScores(fishScore);

var grandTotalAll = totalBob + totalFish + totalJimbo;

console.log("Bob: " + totalBob + " Jimbo: " + totalJimbo + " Fish: " + totalFish);
console.log("Combined total: " + grandTotalAll);


// var golferScores = {
	
// }


