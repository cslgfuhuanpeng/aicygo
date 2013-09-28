$(function(){
	alert(5);
	initEleEvents();
	initPosition();
});


function initPosition(){
	$.each($(".tbmenu"),function(i){
		$(this).css("left",i*110+"px");


	});
}
function initEleEvents(){
	$(".tries").mouseover(function(){
		$(".tries").css({
			"background-color":"#f0f0f0",
			"color":"#3300ff"
		});
      $(this).css({
      	"background-color":"#ff0033",
      	"color":"#33ff00"
      });
	});
	$(".tbmenu").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();
	});
	$(".tbmenu").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();

	});
}
