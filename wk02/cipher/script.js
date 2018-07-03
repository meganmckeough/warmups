var codedMessage = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var message = "";

function decodeMessage () {
	for (i = 0; i < codedMessage.length; i++) {
		 if (codedMessage[i] != (" " || "," || ".")) {
		 	var positionInAZ = alphabet.indexOf(codedMessage[i]);
		 	if (positionInAZ < 3) {
		 		var decodedLetter = (alphabet[positionInAZ + (alphabet.length - 3)]);
		 	} else {
		 		var decodedLetter = alphabet[positionInAZ - 3];
		 	}
		 	message += decodedLetter;
		 } else {
		 	message += codedMessage[i];
		 }
	}
};

decodeMessage();
console.log(message);


///two variables - original and the shifted version
// this makes a lookup table for reuse
//keys and values