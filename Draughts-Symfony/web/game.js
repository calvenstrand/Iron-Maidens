/**
 * @author Iron-Maidens
 */

var target;
var thisTarget;
var mouseOverId;
var isRed;
var moveId1;
var moveId2;
var moveId3;
var moveId4;
var moveWithId1;
var moveWithId2;
var deleteId1 = null;
var deleteId2 = null;
var hasChild2;
var hasChild1;
var idRight;
var idLeft;

// The first player
var player1 = {
    name: 'Player 1',
    color: 'playerToken1',
    wins: 0
    };
// The second player
var player2 = {
    name: 'Player 2',
    color: 'playerToken2',
    wins: 0
	};
var players = [player1, player2];
var current_player = 0;




//Funktionen som disablar klick på motspelarens pjäser
function disableOpponent(){
	
if(current_player == 0){
	//Om det är player 1 alltså vit disable player2 toks
	var disableP2 = $('.playerToken2').parent();
	var disableP2k = $('.pt2k').parent();
	$(disableP2).each(function(i) {
		//Stäng av bind på motspelarens pjäser
		$(this).off('click');
	});
	$(disableP2k).each(function(i) {
		//Stäng av bind på motspelarens pjäser
		$(this).off('click');
	});
	
}else if(current_player == 1){
	//Om det är player 2 alltså svart disable player1 toks
	var disableP1 = $('.playerToken1').parent();
	var disableP1k = $('.pt1k').parent();
	$(disableP1).each(function(i) {
		//Stäng av bind på motspelarens pjäser
		$(this).off('click');
	});
	$(disableP1k).each(function(i) {
		//Stäng av bind på motspelarens pjäser
		$(this).off('click');
	});
	}
}

//Funktion för att re-binda alla till selectToken

function bindAllSelectToken(){
	$('.gameBox1').off('click');
		//Sätt tillbaka binden till SelectToken
	$('.gameBox1').bind('click', selectToken);
		//Bind alla till SelectToken med funktionen
	disableOpponent();
}


// startkollningen
function selectToken() {
	console.log("Klick på spelpjäs.");
	deleteId1 = null;
	deleteId2 = null;
	target = $(this).attr("id");
	thisTarget = ('#' + target);
	//Ajax variabel som berättar klassen för json hämtningen
	var thisClass = $(thisTarget).children().attr("class");
	

	//Kolla om isRed är falskt
	if(!isRed) {
		//Get json object, 
		$.getJSON("app_dev.php/game?target="+target+"&token="+thisClass, function(data){
		//översätt jsonobjektet till 2 möjliga drag
		moveId1 = data.newId1;
		moveId2 = data.newId2;
		//kungens extra drag
		moveId3 = data.newId3;
		moveId4 = data.newId4;
		
		//
		idRight = $('#' + moveId1).children().attr("class"); 
		idLeft  = $('#' + moveId2).children().attr("class");
		//kungens
		idRightKing = $('#' + moveId3).children().attr("class");
		idLeftKing  = $('#' + moveId4).children().attr("class");
		
		if (current_player == 0) {
			
			// Vits tur
			// Kollar om det finns en svart pjäs till vänster (för pjäsen) = möjlighet att hoppa över
			
			if (idLeft  === ("playerToken2") || ("pt2k")) {
				moveId2   = target - 18;
				deleteId2 = moveId2 + 9;
				checkSecondToken();
			}
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = no action
			if (idLeft  === ("playerToken1") || ("pt1k")) {
				moveId2   = null;
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRight === ("playerToken2")|| ("pt2k")) {
				moveId1   = target - 14;
				deleteId1 = moveId1 + 7;
				checkSecondToken();
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = no action
			if (idRight === ("playerToken1")|| ("pt1k")) {
				moveId1   = null;
			}
			
			console.log("Möjliga drag: " + moveId1 + " & " + moveId2);
			console.log("Möjliga drag om kung: " + moveId3 + " & " + moveId4);
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
		
		//Eventuellt baka in dessa i bindallSelectToken o göra om den till en bindfunktion för alla.
		$('.gameBox1').off('click');
		$('#'+moveId1).bind('click', moveToken);
		$('#'+moveId2).bind('click', moveToken);
		
		
		//Kungens nya möjliga drag
		$('#'+moveId3).bind('click', moveToken);
		$('#'+moveId4).bind('click', moveToken);	
		
		
		
		
		
		$(thisTarget).bind('click', selectToken);
				
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

		//Stäng av tidigare binds på gamebox och sätt den till SelectToken ist.
		bindAllSelectToken();
		
		
	
	}

	//SLUT SelectToken
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



function moveToken() {

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
		
		bindAllSelectToken();
		isRed = false;
		
		
		
	}

	//om det skulle bli grinigt och isred inte är sann, gå tillbaka till SelectToken
	else if(!isRed) {
		
		$(thisTarget).off('click', moveToken);
		$(thisTarget).click(selectToken);
	}

	//Slut moveToken
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
	bindAllSelectToken();
	checkMouse();
	$('#playerToken11').removeClass('playerToken1');
	$('#playerToken11').addClass('pt1k');
	//Slut STARTBUTTON BIND





});
//funktion för att kolla mouseover ID
function checkMouse() {
	$('.gameBox1').mouseover(function() {
		mouseOverId = $(this).attr("id");
	});
	//Slut CHECKMOUSE
}




