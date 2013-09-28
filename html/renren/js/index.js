$(function(){
	initEleEvents();
});



function initEleEvents(){
	var openflag=0;
	 
	$("#menu3").click(function(){

		if (openflag == 0) {
			
			$(this).addClass("texiao");
		    $(this).find("a").css({
			"color":"rgb(51,51,51)",
			"background-position":"20px -18px"
		     });

		     $(".clearfix").show();
		     openflag=1;
		     return;
		};

		if (openflag == 1) {
			$(this).removeClass("texiao");
		$(this).find("a").css({
			"color":"#cee1ee",
			"background-position":"20px 3px"
		});
		$(".clearfix").hide();
		openflag=0;
		};
		
	});

}