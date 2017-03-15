var targetNumber;
var counter = 0;
var crystalValues = [7, 5, 3, 1];
var gem = [];

$("#numberGuess").text(targetNumber);

$(document).ready(function() {
	function reset(){

		targetNumber = Math.floor((Math.random() * 101) + 26);
		$("#numberGuess").text(targetNumber);
		console.log(targetNumber);

		for (var i = 0; i < crystalValues.length; i++){
			var crystalImg = $("<img>");
			crystalImg.addClass("crystal-image");
			crystalImg.attr("data-crystal", crystalValues[i]);
			crystalImg.attr("src", "http://vignette2.wikia.nocookie.net/zeldafanon/images/5/57/GreenRupee.png/revision/latest?cb=20120501010031");
			$("#crystals").append(imageCrystal);
		}
		}
	});



