/**
 * @author Rasmus
 */

var target;
var thisTarget;
var mouseOverId;
var isRed;
var thisData;



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
  
 
 */

function fest(){
if(current_player == 0){
	var disableP2 = $('.playerToken2').parent();
	console.log('p2 disabled');
	$(disableP2).each(function(i) {
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	

}else if(current_player == 1){
	var disableP1 = $('.playerToken1').parent();
	console.log('p1 disabled');
	$(disableP1).each(function(i) {
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	
}
}

function bindAllSelect1(){
	$('.gameBox1').off('click');
		console.log('tagit bort bind på gamebox');

		//Sätt tillbaka binden till select1
		$('.gameBox1').bind('click', select1);
		console.log('satt bind till select1 på gamebox');
	
	fest();
}





// startkollningen
function select1() {
	
	target = $(this).attr("id");
	
	thisTarget = ('#' + target);
	//Ajax test
	

	
	//slut ajaxtest

	//Kolla om isRed är falskt
	if(!isRed) {
		console.log('not red select1');
		$.getJSON("app_dev.php/game?target="+target, function(data){
		thisData = data;
		
		console.log('1'+data);
		});
		
//console.log(color);

		//Sätt bakgrunden till red
		$(thisTarget).css('background', 'red');

		//Sätt isRed till true
		isRed = true;
		

		//stäng av alla boxars gamla och sätt dom till select3 ist.
		$('.gameBox1').off('click');
		$('.gameBox1').bind('click', select3);
		
		//stäng dennas select3 och gör den till select1 istället.
		$(this).off('click', select3);
		$(this).bind('click', select1);
		

		// Kolla om isRed är sant
	} else if(isRed) {
		console.log('isred är sant select1');

		//Sätt bakgrunden till vit
		$(thisTarget).css('background', '#FFF');

		//Sätt isRed till falskt
		isRed = false;

		//Stäng av tidigare binds på gamebox och sätt den till select1 ist.
		bindAllSelect1();
		fest();
		
	
	}

	//SLUT SELECT1
}




function select3() {

	//Kolla om isred är sann och att man har en target att sno ifrån, och flytta
	if(isRed) {

		//Flytta div inuti target till mouseover targeten
		$('#' + target + '>div').appendTo($('#' + mouseOverId));
		console.log('isred sant select3');
		
		
		
		//Sätt bakgrunden på förra till vit igen
		$(thisTarget).css('background', '#FFF');
		
		//sätt nästa spelares tur
		current_player = (++current_player) % players.length;
		//Berätta vems tur
		console.log(players[current_player].name);
		bindAllSelect1();
		isRed = false;
		
		
		
	}

	//om det skulle bli grinigt och isred inte är sann, gå tillbaka till select1
	else if(!isRed) {
		console.log('isred inte sann select3')
		$(thisTarget).off('click', select3);
		$(thisTarget).click(select1);
	}

	//Slut SELECT3
}






// Start BIND STARTBUTTON

console.log('laddat sidan');
$('#startBtn').click(function() {
	var playerToken1 = '<div class="playerToken1"></div>';
	var playerToken2 = '<div class="playerToken2"></div>';

	// Lägg ut alla brickor, playertokens på dessa IDn
	$("#63,#61,#59,#57,#55,#53,#51,#49,#47,#45,#43,#41").append(playerToken1);
	console.log("gjort player1");
	$("#1,#3,#5,#7,#9,#11,#13,#15,#17,#19,#21,#23 ").append(playerToken2);
	console.log("gjort player2");

	//Stäng av startknapp
	$('#startBtn').off('click');

	//Playertoken 1 GE ID!
	$(".playerToken1").each(function(i) {

		$(this).attr('id', 'playerToken1' + (i + 1));
		console.log((i + 1) + 'done');
	});
	//PlayerToken 2 GE ID!
	$(".playerToken2").each(function(i) {

		$(this).attr('id', 'playerToken2' + (i + 1));
		console.log((i + 1) + 'done');
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




