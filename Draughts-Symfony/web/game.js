/**
 * @author Rasmus
 */


var target;
var thisTarget;



function select1(){
	
	
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


	

;





console.log ('laddat sidan');
 $('#startBtn').click(function() {
 	var playerToken1 = '<div class="playerToken1"></div>';
	var playerToken2 = '<div class="playerToken2"></div>';
	
	
 	
 $("#64,#62,#60,#58,#55,#53,#51,#49,#48,#46,#44,#42").append(playerToken1);
 console.log ("gjort player1");
 $("#2,#4,#6,#8,#10,#12,#14,#16,#17,#19,#21,#23 ").append(playerToken2);
 console.log ("gjort player2");
    

 
 $('#startBtn').off('click');

$(".playerToken1").each(function(i) {
	
        $(this).attr('id', 'playerToken1'+(i+1));
        console.log ((i+1) + 'done');
        
        
}
);

}
);

/* Klicka på en div
då ska id som man har markerat först deletas från parent
och läggas till i nya diven
exempel för att flytta div :)
$('#64>div').appendTo( $('#56') );





*/



$('.gameBox1')
.mouseover(function(){
	var mouseOverId = $(this).attr("id");
	console.log(mouseOverId);
}

)

	
	 //if else { 
	 	//console.log('inte sann');
	 	//console.log('röd från början');
	 	//$(thisTarget).css('background', '#FFF');
	 	
		//$('#64>div').appendTo( $('#'+ mouseOverId) );
	 
	
	//}
	 
	
.click(select1);
	
	
	
	 
	 // var $target3 = $(event.target3);
  //if ( $target3.is("li") ) {
   // $target.css("background-color", "red");
  //}
	 
	 
	
	


	





	
	
	 
	


	





	//alert(($this).
 	
 	

