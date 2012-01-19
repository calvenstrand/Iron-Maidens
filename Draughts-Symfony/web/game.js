/**
 * @author Rasmus
 */



console.log ('laddat sidan');
 $('#startBtn').click(function() {
 	var playerToken1 = '<div class="playerToken1"></div>';
	var playerToken2 = '<div class="playerToken2"></div>';
 	
 $("#64,#62,#60,#58,#55,#53,#51,#49,#48,#46,#44,#42 ").append(playerToken1);
 console.log ("gjort player1");
 $("#2,#4,#6,#8,#10,#12,#14,#16,#17,#19,#21,#23 ").append(playerToken2);
 console.log ("gjort player2");
    

 
 $('#startBtn').off('click');

$(".playerToken1").each(function(i) {
	
        $(this).attr('id', (i+1));
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
$('.gameBox1').click(function(event){
	
	
	 var target = $(this).attr("id");
	 console.log(target);
	 var thisTarget = $('#' + target);
	 
	 if($(thisTarget).css('background','red')){ 
	 	
		$('#64>div').appendTo( $('#56') );
	 
	
	}
	 
	if($(thisTarget).css('background','#FFF')){ 
	 
	 $(thisTarget).css('background', 'red');
	}
	
	
	 
	 
	 
	
});





	//alert(($this).
 	
 	

