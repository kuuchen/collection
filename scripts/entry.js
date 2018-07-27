$(document).ready(function(){

$(".cover").delay(400).fadeOut(300);

//with automatic zoom/show - regular 1 click toggle
$(".entry-layer").toggle(
	function(){
			$(".top-back").animate({opacity: 0});
			$(".top-quote").animate({opacity: 1});
			$(".top-back").delay(400).hide();
			$(".edit").animate({opacity: 1}, 500);
			$(".zoom-box").show();
			$(".entry").delay(200).addClass('eye-closed').removeClass('eye-open').removeClass('eye-open2');
		},
		function(){
			$(".top-back").show();
			$(".entry").addClass("eye-open").removeClass("eye-closed eye-open2");
			$(".top-back").delay(300).animate({opacity: 1});
			$(".top-quote").animate({opacity: 0});
			$(".edit").animate({opacity: 0});
			$(".zoom-box").hide();
		},
		);
$(".zoom-box").hover(
	function(){
		$(".zoom").delay(300).animate({opacity: 1},500);
		$(".entry").removeClass("eye-closed").removeClass("eye-open").addClass("eye-open2");

	},
	function(){
		$(".zoom").animate({opacity: 0},300);
		$(".entry").addClass("eye-closed").removeClass("eye-open").removeClass("eye-open2");
	},
	);
});