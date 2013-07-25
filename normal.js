showingsignin = false;
showingeditfeeds = false;
showingabout = false;
showingfeed = false;

function makeNavbar() {
	var navbar = $('#navbar')[0];
	navbar.innerHTML = '<li id="navtitle">TeacherWeb feed reader</li><li class="navitem" id="navhome"><a href="#">Home</a></li>';
	for (i=0;i<getNumOfFeeds();i++) {
		feed = getFeed(i);
		navbar.innerHTML += '<li class="navitem" onclick="showfullfeedview('+i+');void 0"><a href="#">'+feed.name+'</a></li>';
	}
	navbar.innerHTML += '<div style="height: 128px">&nbsp;</div>';
	_setEvents();
	
	// initial animation
	$('#navbar .navitem, #bottombar .navitem').delay(100).each(function(index){
		$(this).animate({left:'20px'},400+50*index,'easeOutExpo',
		function(){$(this).animate({left:0},400,'easeInExpo')});
	});
}

$(document).ready(function(){
	// make any <li> in the sidebarwith a child <a> go to to the target 
	// of the <a> when pressed
	$('#sidebar li > a').each(function(){
		$(this).parent().click(function(){
			window.location.hash = $($(this).children('a')[0]).attr('href');
		});
	});
	
	// make the items for the navbar
	makeNavbar();
	
	// great. now update
	showMain();
});
