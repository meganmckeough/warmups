
// You are an adventuring archaeologist, and have found some treasure maps! 
// There are too many to check individually, so write a function 'treasureFinder' that
//  takes an array of arrays as an argument (see sample inputs below) and returns an array 
//  with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

// // Sample output:

// treasureFinder(map1) // should return [2, 2];

var map1 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];


var locationOfTreasure = [];

function treasureFinder (map) {
	for (var i = 0; i < map.length; i++) {
		if ((map[i].indexOf('X')) > -1 === true) {
			rowToSearch = map[i];
			locationOfTreasure.push(i);
		}
	}
	for (var i = 0; i < rowToSearch.length; i++) {
		if ((rowToSearch[i].indexOf('X')) > -1 === true) {
			locationOfTreasure.push(i);
		};
	}
	console.log(locationOfTreasure);
}

treasureFinder(map1); 