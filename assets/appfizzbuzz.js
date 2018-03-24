$(document).ready(function() {
	console.log("Below is Fizz Buzz!");

	for (var i = 1; i <= 100; i++) {
		if  ((i % 5) === 0 && (i % 3) === 0) {
			console.log("Fizz Buzz(both 5 and 3) for " + i);
		} else if ((i % 5) === 0) {
			console.log("Fizz(5) for " + i);
		} else if ((i %3) === 0) {
			console.log("Buzz(3) for " + i);
		} else {
			console.log("Nothing for  " + i);
		};
	};

	console.log("Thanks for playing.")
});
