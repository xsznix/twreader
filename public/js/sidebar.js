//sidebar.js - contains functions to manipulate the sidebar

function widensidebar(callback) {
	$('#navbar, #bottombar').stop().fadeOut(500,function(){
		$('#sidebar').stop().animate({width:'350px'},500,'easeOutExpo').css('padding-left','20px');
		$('#maincontainer').stop().animate({left:'350px'},500,'easeOutExpo',function(){
			$('#backbar').stop().fadeIn(500);
			if(callback)callback();
			// bug - sidebar's overflow sets itself to hidden. idkwai. here's workaround
			$('#sidebar').css('overflow','auto');
		});
	});
}
function unwidensidebar(callback) {
	$('#backbar').stop().fadeOut(500,function(){
		$('#sidebar').stop().animate({width:'200px'},500,'easeOutExpo').css('padding-left','0px');
		$('#maincontainer').stop().animate({left:'200px'},500,'easeOutExpo',function(){
			$('#navbar, #bottombar').stop().fadeIn(500);
			if(callback)callback();
		});
	});
}
