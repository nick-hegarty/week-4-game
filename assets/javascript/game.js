var targetNumber;
var counter = 0;
var crystalValues = [7, 5, 3, 1];
var gem = [];

targetNumber = Math.floor((Math.random() * 101) + 26);

$(document).ready(function() {
	function reset(){
			//CHANGE now I am somehow able to get the randomNumber to work as a global variable, but still can't put images on page....
		//targetNumber = Math.floor((Math.random() * 101) + 26); //copied exactly how to move data to HTML and this doesn;t error or log...
		$("#numberGuess").text(targetNumber);
		console.log(targetNumber);

		for (var i = 0; i < crystalValues.length; i++){ //attempting to give each gem there own random number from the array from start of game
			var crystalImg = $("<img>");
			crystalImg.addClass("crystal-image");
			crystalImg.attr("data-crystal", crystalValues[i]);
			crystalImg.attr("src", "http://vignette2.wikia.nocookie.net/zeldafanon/images/5/57/GreenRupee.png/revision/latest?cb=20120501010031");
			$("#crystals").append(imageCrystal);
			//nothing is being pushed through, checked links, images, nothing logs...
		}
		}

		$(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystal")); //can't console log ANY data except the test at the bottom.
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text("New score: " + counter);
    	if (counter === targetNumber) {
      		alert("You win!");
    	}
   		else if (counter >= targetNumber) {
      		alert("You lose!!");
    	}
 	console.log(list.targetNumber);

});

	});

console.log("hi there");
$("#numberGuess").text(targetNumber);

 //this logs but nothing else comes through



