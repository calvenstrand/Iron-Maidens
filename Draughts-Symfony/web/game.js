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
var deleteId3 = null;
var	deleteId4 = null;
var hasChild2;
var hasChild1;
var idRight;
var idLeft;
var idRightBack;
var idLeftBack;
var tempTarget;
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
	//console.log("Klick på spelpjäs.");
	deleteId1 = null;
	deleteId2 = null;
	deleteId3 = null;
	deleteId4 = null;
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
		
		idRightBack  = $('#' + moveId3).children().attr("class");
		idLeftBack = $('#' + moveId4).children().attr("class");
		//console.log ("m1: " + moveId1 + " m2: " + moveId2 + " m3: " + moveId3 + " m4: " + moveId4);
		if (current_player == 0) {
			
			// Vits tur
			// Kollar om det finns en svart pjäs till vänster (för pjäsen) = möjlighet att hoppa över
			
			tempTarget = parseInt(target);
			if (idLeft  === ("playerToken2")) {
				console.log('vit-playertoken2 finns ner till höger');
				moveId2   = target - 18;
				deleteId2 = moveId2 + 9;
				
				
			}
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = no action
			if (idLeft  === ("playerToken1")) {
				console.log('vit-playertoken1 finns ner till höger');
				moveId2   = null;
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRight === ("playerToken2")) {
				console.log('vit-playertoken2 finns ner till vänster');
				moveId1   = target - 14;
				deleteId1 = moveId1 + 7;
				
				
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = no action
			if (idRight === ("playerToken1")) {
				console.log('vit-playertoken1 finns ner till vänster');
				moveId1   = null;
			}
			
			// Kungens
			
			if (idLeftBack  === ("playerToken2")) {
				console.log('vit-playertoken2 finns upp till höger');
				moveId4 = (tempTarget +14);
				deleteId4 = moveId4 - 7;
				
				
			}
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = no action
			if (idLeftBack  === ("playerToken1")) {
				console.log('vit-playertoken1 finns upp till höger');
				moveId4   = null;
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRightBack === ("playerToken2")) {
				console.log('vit-playertoken2 finns upp till vänster');
				moveId3   = (tempTarget + 18);
				deleteId3 = moveId3 - 9;
				
				
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = no action
			if (idRightBack === ("playerToken1")) {
				console.log('vit-playertoken1 finns upp till vänster');
				moveId3   = null;
			}
			
			checkSecondToken();
			console.log("VIT BRICKA");
			console.log("                          UPP");
			console.log("Möjliga drag om kung: " + moveId3 + " & " + moveId4);
			console.log("Möjliga drag:         " + moveId1 + " & " + moveId2);
			console.log("                          NER");
			console.log("");
			console.log("                          UPP");
			console.log("Möjlighet att ta:     " + deleteId1 + " & " + deleteId2);
			console.log("kungen kan ta:        " + deleteId3 + " & " + deleteId4);
			console.log("                          NER");
			
		} else {
			
			// Svarts tur
			// Skapar ny var och parsar den
			
			tempTarget = parseInt(target);
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = möjlighet att hoppa över
			if (idLeftBack  === "playerToken1") {
				console.log('svart-playertoken1 finns ner till vänster');
				moveId4 = (tempTarget - 14);
				deleteId4 = moveId4 + 7;
				
				
				
			}
			
			// Kollar om det finns en svart pjäs till vänster (för pjäsen) = no action
			if (idLeftBack  === "playerToken2") {
				console.log('svart-playertoken2 finns ner till vänster');
				moveId4 = null;
				
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRightBack === "playerToken1") {
				console.log('playertoken1 finns ner till höger');
				moveId3 = (tempTarget - 18);
				deleteId3 = moveId3 + 9;
				
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = no action
			if (idRightBack === "playerToken2") {
				console.log('svart-playertoken2 finns ner till höger');
				moveId3 = null;
				
			}
			
			
			// Kungens
			
			if (idLeft === "playerToken1") {
				console.log('svart-playertoken1 finns upp till vänster');
				moveId2 =(tempTarget + 18);
				deleteId2 = moveId2 - 9;
				
			}
			
			// Kollar om det finns en vit pjäs till vänster (för pjäsen) = no action
			if (idLeft === "playerToken2") {
				console.log('svart-playertoken2 upp till vänster');
				moveId2 = null;
			}
			
			// Kollar om det finns en svart pjäs till höger (för pjäsen) = möjlighet att hoppa över
			if (idRight === "playerToken1") {
				console.log('svart-playertoken1 finns upp till höger');
				moveId1 = (tempTarget + 14);
				deleteId1 = moveId1 - 7;
				
			}
			
			// Kollar om det finns en vit pjäs till höger (för pjäsen) = no action
			if (idRight === "playerToken2") {
				console.log('svart-playertoken2 finns upp till höger');
				moveId1 = null;
			}
			
			checkSecondToken();
			console.log("SVART BRICKA");
			console.log("                          UPP");
			console.log("Möjliga drag:         " + moveId2 + " & " + moveId1);
			console.log("Möjliga drag om kung: " + moveId4 + " & " + moveId3);
			console.log("                          NER");
			console.log("");
			console.log("                          UPP");
			console.log("Möjlighet att ta:     " + deleteId2 + " & " + deleteId1);
			console.log("kungen kan ta:        " + deleteId4 + " & " + deleteId3);
			console.log("                          NER");
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
		console.log(' idright e sann!')
		moveId1 = null;
		deleteId1 = null;
	}
	
	// Kollar om det finns på vänstra...
	if (idLeft) {
		console.log('idleft e sann!')
		moveId2 = null;
		deleteId2 = null;
	}
		//kungens
		idRightBack  = $('#' + moveId3).children().attr("class");
		idLeftBack = $('#' + moveId4).children().attr("class");
	
	// Kollar om det finns på högra...
	if (idLeftBack) {
		console.log('cskt idleftback e sann!')
		moveId4 = null;
		deleteId4 = null;
	}
	
	// Kollar om det finns på vänstra...
	 if (idRightBack) {
		console.log('cskt idrightback e sann!')
		moveId3 = null;
		deleteId3 = null;
	}
}





function checkIfGoRoyal (){
	//Funktion för att kröna bricka till kung om man är på motsatt sida
	if(current_player === 0){
	var p1Royal = $('.playerToken1').parent();
	$(p1Royal).each(function(i) {
		if($(this).attr('id') < 9){
			console.log('Upgrade YAO!');
			$(this).children().removeClass('playerToken1');
			$(this).children().addClass('pt1k');
			
		}else {//nothing
			}
		
	});
	}else if(current_player === 1){
	var p2Royal = $('.playerToken2').parent();
	$(p2Royal).each(function(i) {
		if($(this).attr('id') > 56){
			console.log('upgrade YAO!');
			$(this).children().removeClass('playerToken2');
			$(this).children().addClass('pt2k');
		}else {//Nothing
			}
		
	});
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
		var mId3 = parseInt(moveId3);
		var mId4 = parseInt(moveId4);
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
		
		// Kollar om man valde att döda möjligheten: deleteId2 (bra Sverige), samt tar bort
		if ((deleteId3 != null) && (curPos === mId3)) {
			$('#' + deleteId3 + '>div').remove();
			console.log("Du tog: " + deleteId3);
			deleteId3 = null;
		}
		
		// Kollar om man valde att döda möjligheten: deleteId2 (bra Sverige), samt tar bort
		if ((deleteId4 != null) && (curPos === mId4)) {
			$('#' + deleteId4 + '>div').remove();
			console.log("Du tog: " + deleteId4);
			deleteId4 = null;
		}
		
		
		
		
		checkIfGoRoyal();
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
	//console.log("Player 1 skapad.");
	$("#1,#3,#5,#7,#10,#12,#14,#16,#17,#19,#21,#23").append(playerToken2);
	//console.log("Player 2 skapad.");
    
    
    
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
	
	
	//Slut STARTBUTTON BIND





});
//funktion för att kolla mouseover ID
function checkMouse() {
	$('.gameBox1').mouseover(function() {
		mouseOverId = $(this).attr("id");
	});
	//Slut CHECKMOUSE
}




