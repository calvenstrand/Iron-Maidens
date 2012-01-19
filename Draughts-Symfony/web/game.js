/**
 * @author Rasmus
 */

var target;
var thisTarget;
var mouseOverId;
var isRed;




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





function fest(){
if(current_player == 0){
	var disableP2 = $('.playerToken2').parent();
	
	
<<<<<<< HEAD
	
	$(disableP2).each(function(i) {
=======
	var target = $(this).attr("id");
	 console.log(target);
	 var thisTarget = ('#' + target);
	 
	 // var $target3 = $(event.target3);
  //if ( $target3.is("li") ) {
   // $target.css("background-color", "red");
  //}
	 
	 
	 if(divIsWhite = true){ 
	 	var divIsWhite = $(thisTarget).css('background', '#FFF');
	 	
	 	console.log(' vit sannsSANN!1');
	 console.log('vit från början');
	 $(thisTarget).css('background', 'red');
		$(thisTarget).unbind("click");
		$(thisTarget).bind("click", select2); 
	}	
	}
	function select2(){
	if(divIsRed = true){ 
		var divIsRed = $(thisTarget).css('background', 'red');
		
	 	
	 	console.log('röd SANN!1');
	 console.log('vit från början');
	 $(this).css('background', '#FFF');
	 $(this).unbind("click");
	 
	 //Mustesta flytta
	 $(this'>div').appendTo( $('#56');
	 
	 $(this).bind("click", select1);
	}
	}
>>>>>>> 542e6cf3428c90b01c6ac07dd1a543eeee3dc1ef

		//$(this).attr('id', 'playerToken1' + (i + 1));
		console.log((i + 1) + 'disabled');
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	
	
	
	
	console.log('Disablat blåa ?');
}else if(current_player == 1){
	var disableP1 = $('.playerToken1').parent();
	
	
	$(disableP1).each(function(i) {

		//$(this).attr('id', 'playerToken1' + (i + 1));
		console.log((i + 1) + 'disabled');
	
	$(this).off('click', select3);
	$(this).off('click', select1);
	
	});
	
}
}











// startkollningen
function select1() {
	
	target = $(this).attr("id");
	console.log(target);
	thisTarget = ('#' + target);

	//Kolla om isRed är falskt
	if(!isRed) {
		console.log('SELECT1');

		//Sätt bakgrunden till red
		$(thisTarget).css('background', 'red');

		//Sätt isRed till true
		isRed = true;
		console.log('ändrat till röd');

		//Stäng av binden på select1
		$(thisTarget).off('click', select1);

		//stäng av alla boxars gamla och sätt dom till select3 ist.
		$('.gameBox1').off('click');
		$('.gameBox1').bind('click', select3);

		//stäng dennas select3 och gör den till select1 istället.
		$(this).off('click', select3);
		$(this).bind('click', select1);
		
		
		

		// Kolla om isRed är sant
	} else if(isRed) {
		console.log('röd bakgrund är satt');

		//Sätt bakgrunden till vit
		$(thisTarget).css('background', '#FFF');

		//Sätt isRed till falskt
		isRed = false;

		//Stäng av tidigare binds på gamebox och sätt den till select1 ist.
		$('.gameBox1').off('click');
		$('.gameBox1').bind('click', select1);
		$(thisTarget).off('click', select1);
		$(thisTarget).bind("click", select1);
		
		//om någonting kukat ur ( obs. borde inte hända eftersom kung-Rasmus skrivit koden :) )
	} else {
		$(thisTarget).css('background', '#FFF');
		isRed = false;
		console.log('ifsatsen fuckar');
	}
fest();
	//SLUT SELECT1
}








function select3() {

	console.log('SELECT3');

	//Kolla om isred är sann och att man har en target att sno ifrån, och flytta
	if(isRed) {

		//Flytta div inuti target till mouseover targeten
		$('#' + target + '>div').appendTo($('#' + mouseOverId));
		console.log('flyttat');
		$('.gameBox1').off('click');
		console.log('tagit bort bind på gamebox');

		//Sätt tillbaka binden till select1
		$('.gameBox1').bind('click', select1);
		console.log('satt bind till select1 på gamebox');
		//Sätt bakgrunden på förra till vit igen
		$(thisTarget).css('background', '#FFF');
		console.log('ändrar till vit igen');
		
		//sätt nästa spelares tur
		current_player = (++current_player) % players.length;
		//Berätta vems tur
		console.log(players[current_player].name);
		
		isRed = false;
		console.log('isred är falsk');
		
		fest();
	}

	//om det skulle bli grinigt och isred inte är sann, gå tillbaka till select1
	else if(!isRed) {
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
	$("#64,#62,#60,#58,#55,#53,#51,#49,#48,#46,#44,#42").append(playerToken1);
	console.log("gjort player1");
	$("#2,#4,#6,#8,#10,#12,#14,#16,#17,#19,#21,#23 ").append(playerToken2);
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
	$('.gameBox1').click(select1);
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
