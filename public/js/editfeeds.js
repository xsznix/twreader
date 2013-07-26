// editfeeds.js - contains functions needed for the feed editing interface

// creating the interface
function prepareeditfeeds() {
	editdiv = $('#editfeeds')[0];
	editdiv.innerHTML = "<h2>Edit Feeds</h2>";
	for (i=0;i<getNumOfFeeds();i++) {
		feed = getFeed(i);
		var item = '';
		item += '<form id="f'+i+'"><h3>Feed '+i+'</h3>'; // e.g. Feed 0; index
		item += '<span>Title:</span>'; // Feed name; label
		item += '<input type="text" class="fname" size="35" value="'+feed.name+'" /><br />';
		item += '<span>URL:</span>'; // Feed URL; label
		item += '<input type="text" class="furl" size="35" value="'+feed.url+'" /><br />';
		item += '<input type="button" value="Delete" onclick="finfodelete('+i+')" />'; // Delete the feed
		item += '<input type="button" value="Update" onclick="finfoupdate(this)" />'; // Update the feed
		item += '<input type="button" value="Up"     onclick="finfomoveup(this)" />'; // Move up
		item += '<input type="button" value="Down"   onclick="finfomovedn(this)" /></form><hr />'; // Move down
		editdiv.innerHTML += item;
	}
	// copy and paste feeds
	editdiv.innerHTML += '<form id="f'+getNumOfFeeds()+'"><input type="button" value="Add feed" onclick="$(this).parent()[0].innerHTML=createeditfeedentry();void 0" /></form>';
	editdiv.innerHTML += '<form id="fcopy"><input type="button" value="Export feeds" onclick="copyfeeddata()">';
	editdiv.innerHTML += '<input type="button" value="Import feeds" onclick="pastefeeddata()"><br />';
	editdiv.innerHTML += '<input type="text" id="feeddata" side="35"></form>';
	editdiv.innerHTML += '<div style="height: 64px">&nbsp;</div>';
}
function createeditfeedentry() {
	i = getNumOfFeeds();
	var item = '';
	item += '<h3>Feed '+i+'</h3>'; // e.g. Feed 0; index
	item += '<p>Feed name:</p>'; // Feed name; label
	item += '<input type="text" class="fname" size="35" value="" /><br />';
	item += '<p>Feed URL:</p>'; // Feed URL; label
	item += '<input type="text" class="furl" size="35" value="" /><br />';
	item += '<input type="button" value="Cancel" onclick="prepareeditfeeds()" />'; // Delete the feed
	item += '<input type="button" value="Update" onclick="finfoupdate(this)" /></form>'; // Update the feed
	return item;
}

// update, delete, move
function finfoupdate(ref) {
	index = $(ref).parent().attr('id').substr(1);
	setFeed(
		index, // index of the feed
		$(ref).siblings('.fname').eq(0).val(), // name of the feed
		$(ref).siblings('.furl').eq(0).val()); // url of the feed
	makeNavbar();
	showMain();
	prepareeditfeeds();
}
function finfodelete(index) {
	if (confirm('Are you sure you want to delete this feed? This action cannot be undone.'))
		delFeed(index);
	makeNavbar();
	showMain();
	prepareeditfeeds();
}
function finfomoveup(ref) {
	index = $(ref).parent().attr('id').substr(1);
	if (index!=0) {
		swpFeed(index,--index);
		makeNavbar();
		showMain();
		prepareeditfeeds();
	}
}
function finfomovedn(ref) {
	index = $(ref).parent().attr('id').substr(1);
	if (index<getNumOfFeeds()-1) {
		swpFeed(index,++index);
		makeNavbar();
		showMain();
		prepareeditfeeds();
	}
}

// import, export
function copyfeeddata() {
	$('#feeddata').attr('value',compressFeeds());
	$('#feeddata').focus().select();
}
function pastefeeddata() {
	append = confirm('Do you want to add these feeds to the end of your current feeds? If not, they will replace your current feeds.');
	deflateFeeds($('#feeddata').attr('value'),append);
}
