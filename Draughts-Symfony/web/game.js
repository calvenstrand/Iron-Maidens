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
var testArray;
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
				$('#errorMsg').fadeIn(500)
				$('#errorMsg').append("<audio id ='sound' src='/IronsActual/Iron-Maidens/Draughts-Symfony/web/error.wav' hidden='false' autoplay='autoplay'></audio>");
				setTimeout(function (e) {
					$('#errorMsg').fadeOut(500);
				}, 3500);
					
				
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
				$('.p2s').append(playerToken1l);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '11')) {
				$('.p2s').append(pt1k);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '2')) {
				$('.p1s').append(playerToken2l);
			} if ((zeAlert[x].keys == '0') && (zeAlert[x].values == '22')) {
				$('.p1s').append(pt2k);
			}
		}
		
		disable();
		bindAllSelectToken();
		
		if (current_player == 0) {
			randomMessageWhite();
		} else if (current_player == 1) {
			randomMessageBlack();
		}
		
		whiteArray = new Array();
		for (var x in zeAlert) {
			if (((zeAlert[x].keys == '0') && (zeAlert[x].values == '1')) || ((zeAlert[x].keys == '0') && (zeAlert[x].values == '11'))) {
				whiteArray.push("Dead black");
			} else {}
		}
		if (whiteArray.length == 12) {
			$.getJSON('app_dev.php/flush', function (data) {
				console.log('Nytt bräde');
			});
			$('#bubbleText').text('Svart vann!');
			$('#startBtn').attr('value', 'Starta nytt spel');
			$('#startBtn').bind('click', function (e) {
				location.reload();
			});
			$('#startBtn').fadeIn(1000);
		}
		
		blackArray = new Array();
		for (var x in zeAlert) {
			if (((zeAlert[x].keys == '0') && (zeAlert[x].values == '2')) || ((zeAlert[x].keys == '0') && (zeAlert[x].values == '22'))) {
				blackArray.push("Dead black");
			} else {}
		}
		if (blackArray.length == 12) {
			$.getJSON('app_dev.php/flush', function (data) {
				console.log('Nytt bräde');
			});
			$('#bubbleText').text('Vit vann!');
			$('#startBtn').attr('value', 'Starta nytt spel');
			$('#startBtn').bind('click', function (e) {
				location.reload();
			});
			$('#startBtn').fadeIn(1000);
		}
	});
	
}

$('#startBtn').click(function (e) {
			
	
        console.log('knapp funkar');
        bindForm();
        e.preventDefault();
        });
        //funktion för att kolla mouseover ID
        function checkMouse() {
        $('.gameBox1').mouseover(function() {
        mouseOverId = $(this).attr("id");
        });
        //Slut CHECKMOUSE
        }

        function bindForm(){
        $('#formId').submit(function(e) {
        e.preventDefault();
        });
        var name1 = $('#playerName1').val();
        var name2 = $('#playerName2').val();
        if ((name1 != '') && (name2 != '')){
        $.getJSON("app_dev.php/form?player1="+name1+"&player2="+name2, function (formData) {
        var spelare1 = formData.player1;
        var spelare2 = formData.player2;

        $('#loginBoard').html('<h2>Välkommen '+spelare1+' och '+spelare2+'!</h2><br/>'
        +'<p><span style="font-size:20px;">VIT: '+spelare1+' </span></p><br/>'
        +'<p><span style="font-size:20px;">SVART: '+spelare2+' </span></p><br/>'
        +'Felmeddelande: <span style="font-size: 16pt; color: red;" id="errorMsg"><audio id="ljud"></audio> </span>'
        );
        $('#player1').html(spelare1 + " - Vit");
        $('#player2').html(spelare2 + " - Svart");
        });
        $('#startBtn').hide();
        $(".playerToken1").each(function(i) {
        $(this).attr('id', 'playerToken1' + (i + 1));
        });
        //PlayerToken 2 GE ID!
        $(".playerToken2").each(function(i) {
        $(this).attr('id', 'playerToken2' + (i + 1));
        });
        updateBoard();
        checkMouse();
        console.log('json körs');
        }else{}
}
	

// Notification

$('.notification').hide();
summonDaPaperclip();

function summonDaPaperclip () {
	$('.notification').fadeIn(3000);
	$('#bubbleText').text("Välkommen till detta Draughts-spel, lycka till!");
}

function randomMessageWhite () {
	var messageWhite = new Array(
					"Jag hatar mitt jobb..."
					,"Hej! Jag tänkte bara berätta att det nu är vits tur att spela."
					,"Goddag, nu är det vits tur att flytta på pjäserna, lycka till!"
					,"Fråga mig om du behöver hjälp! Oj, nu är det vits tur..."
					,"Hawaiis nationalfisk heter: Humuhumu- nukunukuapua'a"
					,"Behöver du hjälp? Fråga mig!"
					,"Visste du att en snigel kan sova i tre år?"
					,"Visste du att en struts öga är större än dess hjärna?"
					,"Visste du att alla isbjörnar är vänsterhänta?"
					,"Visste du att en krokodil inte kan sticka ut tungan?"
					,"Visste du att en ankas kvackande inte ekar?"
					);
	$('.notification').show();
	var white = messageWhite[Math.floor(Math.random() * 11)];
	$('#bubbleText').text(white);
}

function randomMessageBlack () {
	var messageBlack = new Array(
					"Jag hatar mitt jobb..."
					,"Hej! Jag tänkte bara berätta att det nu är svarts tur att spela."
					,"Goddag, nu är det svarts tur att flytta på pjäserna, lycka till!"
					,"Fråga mig om du behöver hjälp! Oj, nu är det svarts tur..."
					,"Visste du att man nyser i en hastighet av 160km/tim?"
					,"Visste du att första bokstaven i Hej är H?"
					,"Visste du att champinjoner bara innehåller 0,2% fett?"
					,"Visste du att man tillbringar 6 månader av sitt liv på toaletten?"
					,"Visste du att fjärilar smakar med fötterna?"
					,"Visste du att alla isbjörnar är vänsterhänta?"
					,"Visste du att 100 personer dör årligen av att ha satt en kulspets- penna i halsen?"
					);
	$('.notification').show();
	var black = messageBlack[Math.floor(Math.random() * 11)];
	$('#bubbleText').text(black);
}
