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
var zeAlert;
var idRightBack;
var idLeftBack;
var tempTarget;
var nextPlayerTurn;
var works;
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
var current_player = 1;
$('#errorMsg').hide();
//Funktionen som disablar klick på motspelarens pjäser
function disable(){
	if(current_player == '0'){
		console.log('Disablar svart');
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
	} else if(current_player == '1'){
		console.log('Disablar vit');
		//Om det är player 2 alltså svart disable player1 toks
		var disableP1 = $('.playerToken1').parent();
		var disableP1k = $('.pt1k').parent();
		$(disableP1).each(function(i) {
			//Stäng av bind på motspelarens pjäser
			$(this).off('click', selectToken);
		});
		$(disableP1k).each(function(i) {
			//Stäng av bind på motspelarens pjäser
			$(this).off('click', selectToken);
		});
	}else{ console.log('sug');}
}

//Funktion för att re-binda alla till selectToken

function bindAllSelectToken(){
	current_player;
	if(current_player == '0'){
		//$('.gameBox1').parent().off('click');
		//$('.gameBox1').off('click', moveToken);
		$('.playerToken1').off('click');
		$('.pt1k').off('click');
		$('.playerToken1').parent().bind('click', selectToken);	
		$('.pt1k').parent().bind('click', selectToken);	
	}
	if(current_player == '1'){
		//$('.gameBox1').off('click', moveToken);
		$('.playerToken2').off('click');
		$('.pt2k').off('click');
		$('.playerToken2').parent().bind('click', selectToken);
		$('.pt2k').parent().bind('click', selectToken);	
		//$('.gameBox1').parent().off('click');
	}
	
		//Sätt tillbaka binden till SelectToken
		//Bind alla till SelectToken med funktionen
	//disableOpponent();
}
// startkollningen
function selectToken() {
	console.log('Du klickade på: ' + mouseOverId);
	//console.log("Klick på spelpjäs.");	
	target = $(this).attr('id');
	thisTarget = ('#' + target);
	//Ajax variabel som berättar klassen för json hämtningen
	//Kolla om isRed är falskt
	if(!isRed) {
		//Get json object, 
		//Eventuellt baka in dessa i bindallSelectToken o göra om den till en bindfunktion för alla.
		$('.gameBox1').off('click');
		$('.gameBox1').bind('click', moveToken);
		$(thisTarget).off('click', moveToken);
		$(thisTarget).bind('click', selectToken);
		//Sätt bakgrunden till red
		$(thisTarget).css('background', 'red');
		//Sätt isRed till true
		isRed = true;
		
		// Kolla om isRed är sant
	}
	else if(isRed) {
		
		bindAllSelectToken();
		//Sätt bakgrunden till vit
		$(thisTarget).css('background', '');
		//Sätt isRed till falskt
		isRed = false;
		//Stäng av tidigare binds på gamebox och sätt den till SelectToken ist.
		//disable();
		
		
		//disable();
	} else {}

}
//SLUT SelectToken
function moveToken() {
	//Kolla om isred är sann och att man har en target att sno ifrån, och flytta
	if(isRed) {
		//Flytta div inuti target till mouseover targeten
		$.getJSON("app_dev.php/game?target="+target+"&tryTake="+mouseOverId, function(data){
			//översätt jsonobjektet till 2 möjliga drag
			works = data.works;
			moveId2 = data.tryTake;
			nextPlayersTurn = data.nextPlayersTurn;
			//$('#' + target + '>div').appendTo($('#' + moveId1));
			//$('#' + moveId2 + '>div').remove();		
			//console.log ('next turn'+nextPlayerTurn);	
			current_player = nextPlayersTurn;
			if (works === 1){
				console.log('Du gick till: ' + mouseOverId);
				updateBoard();	
			}else if(works === 0 ){
				$('#errorMsg').text('Du kan inte gå dit');
				$('#errorMsg').fadeIn(1000)
				setTimeout(function (e) {
					$('#errorMsg').fadeOut(1000);
				}, 2000);
					
				
				console.log('Du kan inte gå dit');
			}
			
		});
		
		$(thisTarget).css('background', '');
		//bindAllSelectToken();
		isRed = false;
		//sätt nästa spelares tur
		
	
	}
	//om det skulle bli grinigt och isred inte är sann, gå tillbaka till SelectToken
	else if(!isRed) {
		$(thisTarget).off('click', selectToken);
		$(thisTarget).click(selectToken);
	}
	//Slut moveToken
	
}

// Start BIND STARTBUTTON
function updateBoard () {
	console.log('Uppdaterar brädet');
	$('.playerToken1').remove();
	$('.playerToken2').remove();
	$('.pt1k').remove();
	$('.pt2k').remove();
	$.getJSON('app_dev.php/board', function (data) {
		zeAlert = data.jason;
		var playerToken1l = '<div class="playerToken1"></div>';
		var playerToken2l = '<div class="playerToken2"></div>';
		var pt1k = '<div class="pt1k"></div>';
		var pt2k = '<div class="pt2k"></div>';
		for (var x in zeAlert) {
			if (zeAlert[x].values == '1') {
				$('#' + zeAlert[x].keys).append(playerToken1l);
			} if (zeAlert[x].values == '11') {
				$('#' + zeAlert[x].keys).append(pt1k);
			} if (zeAlert[x].values == '2') {
				$('#' + zeAlert[x].keys).append(playerToken2l);
			} if (zeAlert[x].values == '22') {
				$('#' + zeAlert[x].keys).append(pt2k);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '1')) {
				$('.p1s').append(playerToken1l);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '11')) {
				$('.p1s').append(pt1k);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '2')) {
				$('.p2s').append(playerToken2l);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '22')) {
				$('.p2s').append(pt2k);
			}
		}
		disable();
		bindAllSelectToken();
	});
	
}

$('#startBtn').click(function () {
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
	updateBoard();
	checkMouse();
});
//funktion för att kolla mouseover ID
function checkMouse() {
	$('.gameBox1').mouseover(function() {
		mouseOverId = $(this).attr("id");
	});
	//Slut CHECKMOUSE
}
