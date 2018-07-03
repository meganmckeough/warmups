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

// object type
// var playerScores = {
// 	"bob": [0,2,3,5],
// }

// second type
// var player1 = [
// {
// 	name: "blah",
// 	holeScore: [3,6],
// },
// ];



// var golferScores = {
	
// }

//reduce function
// not really adding, it's reducing everything
// // scores.reduce(function(sum,num) {
// 	return sum + num
// }, 0);


// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

// Bob
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// Jimbo
// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// Fish
// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1
// Extension
// Now work out each golfers round compared to the course par.

// Par
// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5
// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.