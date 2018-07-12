perfectSquares = []

function getUnique (value,index,self) {
	return self.indexOf(value) === index;
}

function getSquares (arr) {
	arr.forEach (function (number) {
		sqRoot = Math.sqrt(number);
		if (sqRoot % 1 === 0) {
			perfectSquares.push(number);
		};
	})
	perfectSquares.sort(function(a, b){return a-b});
	console.log(perfectSquares.filter( getUnique ));
}

getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]