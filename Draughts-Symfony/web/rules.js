var btn = document.getElementById('44');

var target;
var thisTarget;

//btn.onclick =
function select1 () {
	var id = $(this).attr("id");
	console.log("Du klickade p'a: " + id);
	checkColor(id);
	
	function checkColor (id) {
		console.log("Kollar f'a'rgen...");
		var child = document.getElementById(id).childNodes;
		console.log(child);
		if ($(child).hasClass('playerToken1')) {
			console.log("White");
			getMovesForWhite(id);
		} else if ($(child).hasClass('playerToken2')) {
			console.log("Black");
			getMovesForBlack(id);
		}
				
		function getMovesForWhite (id) {
			var newId1;
			var newId2;
			if((id -7 >= 1) || (id -9 >= 1)) {
				newId1 = id - 7;
				newId2 = id - 9;
				sideWhite(id, newId1, newId2);
			} else {
				// GODMODE
				console.log('Dubbad till kung');
			}
			
			function sideWhite (id, newId1, newId2) {
				if ((id == 49) || (id == 41) || (id == 33) || (id == 25) || (id == 17) || (id == 9)) {
					newId2 = null;
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
					makeMove(id, newId1, newId2);
				} else if ((id == 56) || (id == 48) || (id == 40) || (id == 32) || (id == 24) || (id == 16)) {
					newId1 = null;
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
					makeMove(id, newId1, newId2);
				} else {
					makeMove(id, newId1, newId2);
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
				}
				
				function makeMove (id, newId1, newId2) {

				}
			}
		}
			
		function getMovesForBlack (id) {
			var id1 = parseInt(id);
			var newId1 = parseInt(id);
			var newId2 = parseInt(id);
			if((id1 +7 <= 64) || (id1 +9 <= 64)) {
				newId1 = parseInt(id);
				newId1 += 7;
				newId2 = parseInt(id);
				newId2 += 9;
				sideBlack(id, newId1, newId2);
			} else {
				// GODMODE
				console.log('Dubbad till kung');
			}

			function sideBlack (id, newId1, newId2) {
				if ((id == 49) || (id == 41) || (id == 33) || (id == 25) || (id == 17) || (id == 9)) {
					newId1 = null;
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
					makeMove(id, newId1, newId2);
				} else if ((id == 56) || (id == 48) || (id == 40) || (id == 32) || (id == 24) || (id == 16)) {
					newId2 = null;
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
					makeMove(id, newId1, newId2);
				} else {
					makeMove(id, newId1, newId2);
					console.log("Du kan g'a till: " + newId1 + " + " + newId2);
				}				
						
				function makeMove (id, newId1, newId2) {

				}
			}
		}
	}
}
$('.gameBox2')
.mouseover(function(){
	var mouseOverId = $(this).attr("id");
	console.log(mouseOverId);
}

)
.click(select1);
