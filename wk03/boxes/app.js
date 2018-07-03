var myDivs = document.querySelectorAll('div');

function makeBoxRed (event) {
	event.target.classList.add('make-red');
	checkforGreen();
}

// changed this to a separate function to separate concerns and clearly show what is happening in the flow
function checkforGreen () {
	var boxesClickedNum = document.querySelectorAll('.make-red').length;
	if (boxesClickedNum === myDivs.length) {
		myDivs.forEach(function(div) {
			div.classList.add('make-green');
		});
	}
}

myDivs.forEach(function(div) {
	div.addEventListener('click', makeBoxRed);
});




