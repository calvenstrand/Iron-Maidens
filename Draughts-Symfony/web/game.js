/**
 * @author Iron-Maidens
 */

var target;
var thisTarget;
var mouseOverId;
var isRed;
var thisData;
var obj;
var moveId1;
var moveId2;
var moveWithId1;
var moveWithId2;
var deleteId1 = null;
var deleteId2 = null;
var hasChild2;
var hasChild1;
var movers;
var idRight;
var idLeft;

// The first player
var player1 = {
    name: 'Player 1',
    color: 'playerToken1',
    wins: 0};
// The second player
var player2 = {
    name: 'Player 2',
    color: 'playerToken2',
    wins: 0
};
var players = [player1, player2];
var current_player = 0;





/*
  Funderingar kring fest funktionen:
  1. Fixa så att alla ens egna boxar också är disabled när man har en rödmarkerad pjäs
  1.1: Disabla ALLA där det finns tokens 1 eller 2 istället för att bara disabla motspelarens.
  Borde lösa problemet helt enkelt. 
  ////////
  
  Funderingar kring ta bricka
  
  kolla om det står en bricka på någon av de möjliga rutorna att gå till
  om det finns en beroende på vilken lägg till 7 eller 9 till möjliga nya rutor att gå till
  om man hoppar över, ta brickan man hoppat över och lägg den bredvid spelbrädet
  
  
 
 */

function fest(){
if(current_player == 0){
	var disableP2 = $('.playerToken2').parent();
	
	$(disableP2).each(function(i) {
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	

}else if(current_player == 1){
	var disableP1 = $('.playerToken1').parent();
	
	$(disableP1).each(function(i) {
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	
}
}

function bindAllSelect1(){
	$('.gameBox1').off('click');
		

		//Sätt tillbaka binden till select1
		$('.gameBox1').bind('click', select1);
		
	
	fest();
}





// startkollningen
function select1() {
	console.log("Klick på spelpjäs.");
	deleteId1 = null;
	deleteId2 = null;
	target = $(this).attr("id");
	
	
	
	thisTarget = ('#' + target);
	//Ajax test
	var thisClass = $(thisTarget).children().attr("class");
	
	//slut ajaxtest

	//Kolla om isRed är falskt
	if(!isRed) {
		//console.log(target +'select1');
		$.getJSON("app_dev.php/game?target="+target+"&token="+thisClass, function(data){
		
		moveId1 = data.newId1;
		moveId2 = data.newId2;
		
		idRight = $('#' + moveId1).children().attr("class"); 
		idLeft  = $('#' + moveId2).children().attr("class");
		
		if (current_player == 0) {
			
			// Vits tur
			// Kollar om det finns en svart pjäs till vänster (för pjäsen) = möjlighet att hoppa över
			if (idLeft  === "playerToken2") {
				moveId2   = target - 18;
				deleteId2 = moveId2 + 9;
				checkSecondToken();
			}
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = no action
			if (idLeft  === "playerToken1") {
				moveId2   = null;
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRight === "playerToken2") {
				moveId1   = target - 14;
				deleteId1 = moveId1 + 7;
				checkSecondToken();
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = no action
			if (idRight === "playerToken1") {
				moveId1   = null;
			}
			
			console.log("Möjliga drag: " + moveId1 + " & " + moveId2);
			console.log("Möjlighet att ta: " + deleteId1 + " & " + deleteId2);
			
		} else {
			
			// Svarts tur
			// Skapar ny var och parsar den
			var tempTarget;
			tempTarget = parseInt(target);
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = möjlighet att hoppa över
			if (idLeft  === "playerToken1") {
				moveId2    = (tempTarget + 18);
				deleteId2  = moveId2 - 9;
				checkSecondToken();
			}
			
			// Kollar om det finns en svart pjäs till vänster (för pjäsen) = no action
			if (idLeft  === "playerToken2") {
				moveId2    = null;
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRight === "playerToken1") {
				moveId1    = (tempTarget + 14);
				deleteId1  = moveId1 - 7;
				checkSecondToken();
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = no action
			if (idRight  === "playerToken2") {
				moveId1 = null;
			}
			
			console.log("Möjliga drag: " + moveId2 + " & " + moveId1);
			console.log("Möjlighet att ta: " + deleteId2 + " & " + deleteId1);
			
		}

		$('.gameBox1').off('click');
		$('#'+moveId1).bind('click', select3);
		$('#'+moveId2).bind('click', select3);
		$(thisTarget).bind('click', select1);
				
		});

		//Sätt bakgrunden till red
		$(thisTarget).css('background', 'red');
		
		//Sätt isRed till true
		isRed = true;
		

		// Kolla om isRed är sant
	} else if(isRed) {
		

		//Sätt bakgrunden till vit
		$(thisTarget).css('background', '');

		//Sätt isRed till falskt
		isRed = false;

		//Stäng av tidigare binds på gamebox och sätt den till select1 ist.
		bindAllSelect1();
		fest();
		
	
	}

	//SLUT SELECT1
}

function checkSecondToken () {
	
	// Hämtar klassen på de nya ID:nas barn
	idRight = $('#' + moveId1).children().attr("class"); 
	idLeft  = $('#' + moveId2).children().attr("class");
	
	// Kollar om det finns på högra...
	if (idRight) {
		moveId1 = null;
		deleteId1 = null;
	}
	
	// Kollar om det finns på vänstra...
	if (idLeft) {
		moveId2 = null;
		deleteId2 = null;
	}
	
}



function select3() {

	//Kolla om isred är sann och att man har en target att sno ifrån, och flytta
	if(isRed) {

		//Flytta div inuti target till mouseover targeten
		$('#' + target + '>div').appendTo($('#' + mouseOverId));
		
		var currentPosition;
		
		// Kollar var man flyttade
		currentPosition = $(this).attr("id");
		var curPos = parseInt(currentPosition);
		var mId1 = parseInt(moveId1);
		var mId2 = parseInt(moveId2);
		console.log("Flyttade till: " + currentPosition);
		
		// Kollar om man valde att döda möjligheten: deleteId1 (bra Sverige), samt tar bort
		if ((deleteId1 != null) && (curPos === mId1)) {
			$('#' + deleteId1 + '>div').remove();
			console.log("Du tog: " + deleteId1);
			deleteId1 = null;
		}
		
		// Kollar om man valde att döda möjligheten: deleteId2 (bra Sverige), samt tar bort
		if ((deleteId2 != null) && (curPos === mId2)) {
			$('#' + deleteId2 + '>div').remove();
			console.log("Du tog: " + deleteId2);
			deleteId2 = null;
		}
		
		// Rinse and repeat...
		
		//Sätt bakgrunden på förra till vit igen
		$(thisTarget).css('background', '');
		
		//sätt nästa spelares tur
		current_player = (++current_player) % players.length;
		//Berätta vems tur
		
		bindAllSelect1();
		isRed = false;
		
		
		
	}

	//om det skulle bli grinigt och isred inte är sann, gå tillbaka till select1
	else if(!isRed) {
		
		$(thisTarget).off('click', select3);
		$(thisTarget).click(select1);
	}

	//Slut SELECT3
}






// Start BIND STARTBUTTON

console.log('Laddat sidan.');
$('#startBtn').click(function() {
	var playerToken1 = '<div class="playerToken1"></div>';
	var playerToken2 = '<div class="playerToken2"></div>';

	// Lägg ut alla brickor, playertokens på dessa IDn
	$("#64,#62,#60,#58,#55,#53,#51,#49,#48,#46,#44,#42").append(playerToken1);
	console.log("Player 1 skapad.");
	$("#1,#3,#5,#7,#10,#12,#14,#16,#17,#19,#21,#23").append(playerToken2);
	console.log("Player 2 skapad.");

	//Stäng av startknapp
	$('#startBtn').off('click');

	//Playertoken 1 GE ID!
	$(".playerToken1").each(function(i) {

		$(this).attr('id', 'playerToken1' + (i + 1));
		
	});
	//PlayerToken 2 GE ID!
	$(".playerToken2").each(function(i) {

		$(this).attr('id', 'playerToken2' + (i + 1));
		
	});
	//   MUY IMPORTANTE
	//
	// binden för att börja utföra spelgrejen
	bindAllSelect1();
	checkMouse();
	fest();

	//Slut STARTBUTTON BIND





});
//funktion för att kolla mouseover ID
function checkMouse() {
	$('.gameBox1').mouseover(function() {
		mouseOverId = $(this).attr("id");
	});
	//Slut CHECKMOUSE
}




