/**
 * @author Rasmus
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
	deleteId1 = null;
	deleteId2 = null;
	target = $(this).attr("id");
	
	
	
	thisTarget = ('#' + target);
	//Ajax test
	var thisClass = $(thisTarget).children().attr("class");
	console.log(thisClass);

	
	//slut ajaxtest

	//Kolla om isRed är falskt
	if(!isRed) {
		//console.log(target +'select1');
		$.getJSON("app_dev.php/game?target="+target+"&token="+thisClass, function(data){
		
		moveId1 = data.newId1;
		moveId2 = data.newId2;
		
		moveWithId1 = $('#'+moveId1);
		moveWithId2 = $('#'+moveId2);
		
		hasChild1 = $('#'+moveId1+' > *').length > 0;
		hasChild2 = $('#'+moveId2+' > *').length > 0;
		
		if (current_player == 0) {
			console.log("nu kan vit ta svart");
			if (hasChild2 && $('#'+moveId2+'>div').hasClass("playerToken2")){
				moveId2 = target - 18;
				deleteId2 = moveId2 + 9;
				movers = moveId2;
				
				console.log(moveId2+'kan inte gå fram till vänster');
			}
			if (hasChild2 && $('#'+moveId2+'>div').hasClass("playerToken1")){
				moveId2 = null;
			}
			if (hasChild1 && $('#'+moveId1+'>div').hasClass("playerToken2")){
				moveId1 = target -14;
				deleteId1 = moveId1 + 7;
				movers = moveId1;
				
				console.log('kan inte gå fram till höger');

			}
			if (hasChild1 && $('#'+moveId1+'>div').hasClass("playerToken1")){
					moveId1 = null;
			}
		} else {
			console.log("nu kan svart ta vit");
			if (hasChild2 && $('#'+moveId2+'>div').hasClass("playerToken1")){
				var target1 = parseInt(target);
				moveId2 = (target1 + 18);
				deleteId2 = moveId2 - 9;
				

			}
			if (hasChild2 && $('#'+moveId2+'>div').hasClass("playerToken2")){
				moveId2 = null;
			}
			if (hasChild1 && $('#'+moveId1+'>div').hasClass("playerToken1")){
				var target1 = parseInt(target);
				moveId1 = (target1 +14);
				deleteId1 = moveId1 - 7;
				

			}
			if (hasChild1 && $('#'+moveId1+'>div').hasClass("playerToken2")){
				moveId1 = null;
			}
			/*if(hasChild1){
				moveId1 = null;
			}
			if(hasChild2){
				moveId2 = null;
			}*/
		}
		
		if (!hasChild1 && !hasChild2){console.log('Inga brickor ivägen');}
		
		
		hasChild1 = $('#'+moveId1+' > *').length > 0;
		hasChild2 = $('#'+moveId2+' > *').length > 0;
		if (hasChild1) {
			
			moveId1 = null;
			deleteId1 = null;
		}
		if (hasChild2) {
			moveId2 = null;
			deleteId2 = null;
			
		}
		console.log('deleteid1: '+deleteId1);
		console.log('deleteid2: '+deleteId2);
		console.log(moveId1);
		console.log(moveId2);
		
		
		$('.gameBox1').off('click');
		$('#'+moveId1).bind('click', select3);
		$('#'+moveId2).bind('click', select3);
		$(thisTarget).bind('click', select1);
		
		
		});
		


		//Sätt bakgrunden till red
		$(thisTarget).css('background', 'red');
		
		isRed = true;
		//Sätt isRed till true
		
		

		//stäng av alla boxars gamla och sätt dom till select3 ist.
		
		console.log('bindat select 3 på 2 saker');
		//stäng dennas select3 och gör den till select1 istället.
		//$(this).off('click', select3);
		

		// Kolla om isRed är sant
	} else if(isRed) {
		console.log('is red');

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




function select3() {

	//Kolla om isred är sann och att man har en target att sno ifrån, och flytta
	if(isRed) {

		//Flytta div inuti target till mouseover targeten
		$('#' + target + '>div').appendTo($('#' + mouseOverId));
		console.log('isred sant select3');
		if(deleteId2 != null) {
			$('#'+deleteId2+'>div').remove();
				console.log("tog bort: " + deleteId2);
				deleteId2 = null;
		 }
		if(deleteId1 != null) {
			$('#'+deleteId1+'>div').remove();
				console.log("tog bort: " + deleteId1);
				deleteId1 = null;
		} else {
			
		}
		
		
		//Sätt bakgrunden på förra till vit igen
		$(thisTarget).css('background', '');
		
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
	$("#64,#62,#60,#58,#55,#53,#51,#49,#48,#46,#44,#42").append(playerToken1);
	console.log("gjort player1");
	$("#1,#3,#5,#7,#10,#12,#14,#16,#17,#19,#21,#23").append(playerToken2);
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




