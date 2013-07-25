function _setEvents() {
	//
	// animations in the sidebar
	//
	
	// navigation bar animations
	$('#navbar .navitem, #bottombar .navitem').mouseenter(function(){ // on mouse enter, do hover animation
		$(this).stop().animate({left:0,color:'#f80',backgroundColor:'#444',paddingLeft:'30px'},
		200,'easeOutExpo');})
	.mouseleave(function(){ // on mouse out, undo hover animation
		$(this).stop().animate({left:0,color:'#ddd',backgroundColor:'#383838',paddingLeft:'20px'},
		200,'easeOutExpo');})
	.click(function(){$(this).mouseleave()}); // simulate mouseleave() on click
	
	// show sign in animation
	$('#showsignin').click(function(){
		showingsignin = true;
		widensidebar(function(){
			$('#signin').stop().fadeIn(500);
		});
	});
	// show edit feeds animation
	$('#showeditfeeds').click(function(){
		showingeditfeeds = true;
		prepareeditfeeds();
		widensidebar(function(){
			$('#editfeeds').stop().fadeIn(500);
		});
	});
	// show about animation
	$('#showabout').click(function(){
		showingabout = true;
		widensidebar(function(){
			$('#about').stop().fadeIn(500);
		});
	});
	// hide fullfeedview animation
	$('#navhome').click(function(){hidefullfeedview();});
	
	// back button hover animation
	$('#backbutton').mouseenter(function(){ // on mouse enter, do hover animation
		$(this).stop().animate({color:'#f80',backgroundColor:'#444',paddingLeft:'30px'},
		200,'easeOutExpo');})
	.mouseleave(function(){ // on mouse out, undo hover animation
		$(this).stop().animate({color:'#ddd',backgroundColor:'#383838',paddingLeft:'20px'},
		200,'easeOutExpo');});
	
	// back button click animation
	$('#backbutton').click(function(){
		$(this).mouseleave();
		if (showingsignin) {
			showingsignin = false;
			$('#signin').fadeOut(500);
			unwidensidebar();
		} else if (showingeditfeeds) {
			showingeditfeeds = false;
			$('#editfeeds').fadeOut(500);
			unwidensidebar();
		} else if (showingabout) {
			showingabout = false;
			$('#about').fadeOut(500);
			unwidensidebar();
		}
	});
}
