var columns = [];
var fakeMap = [];

function placeRandomX (){
	var columnRand = Math.floor(Math.random() * columns.length);
	var rowRand = Math.floor(Math.random() * fakeMap.length);
	var rowPosition = fakeMap[rowRand];
	// debugger
	rowPosition.splice(columnRand, 1, "X");
	console.log(rowRand,columnRand);
};

function makeFakeMap (row, column) {
	for (i = 0; i < column; i++) {
		columns.push("A");	
	}
	for (i = 0; i < row; i++) {
		fakeMap.push(columns);
	}
	placeRandomX();
}

makeFakeMap(5,5);
console.log(fakeMap);

// need to target array then splice in that array
// put other vars outside the function so you can do two rand ints


// ///in class solution
// var makeFakeMap = function (rows,cols) {
// 	var grid = [];
// 	for (i = 0; i < rows; i++) {
// 		var columns = new Array(cols).fill("A");
// 		grid.push(columns);
// 	};
// 	return grid;
// }


// console.log(makeFakeMap(5,5));