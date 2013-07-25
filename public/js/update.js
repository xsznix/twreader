//update.js - contains functions to update the webpage

function updateMain() {
	showBusy();
	nf = getNumOfFeeds();
	if (nf!='0') {
		d = new diff_match_patch();
		main = $('#maintable > tbody');
		main.html('');
		// main update loop - for each feed
		for (i=0;i<nf;i++) {
			feed = getFeed(i);
			plain_content = '';
			newupdate = false;
			diff = d.diff_main(updFeed(i,0),feed.content_plain);
			d.diff_cleanupSemantic(diff);
			if (diff.length!=1) {
				// process diffs
				for (j=0;j<diff.length;j++) {
					if (diff[j][0]==-1) plain_content += diff[j][1];
				}
				localStorage['feed'+i+'diff_plain'] = plain_content;
				newupdate = true;
			} else { plain_content = feed.diff_plain; }
			main.html(main.html()+'<tr><td onclick="javascript:showfullfeedview('+i+');void 0"><a href="#">'+feed.name+'</a></td><td'+(newupdate?' class="newupdate"':'')+'>'+plain_content+'</td></tr>');
		}
		$('#updated')[0].innerHTML = setUpdated((new Date()).toString());
	}
	else showStart();
	hideBusy();
}
function showMain() {
	var nf = getNumOfFeeds();
	if (nf!='0') {
		var d = new diff_match_patch();
		var main = $('#maintable > tbody');
		main.html('');
		// main update loop - for each feed
		for (i=0;i<nf;i++) {
			var feed = getFeed(i);
			main.html(main.html()+'<tr><td onclick="javascript:showfullfeedview('+i+');void 0"><a href="#">'+feed.name+'</a></td><td>'+feed.diff_plain+'</td></tr>');
		}
		$('#updated').html(getUpdated());
	}
	else showStart();
}
function showStart() {
	$('#maintable > tbody').html('<tr><td><a onclick="$(\'#showabout\').click()">Get Started</a></td><td>To get started, please click "Add/Edit Feeds" on the left side.</td></tr>');
	return true;
}

// functions needed for spinning busy gif
function pageWidth() { return window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:null; }
function pageHeight() { return window.innerHeight != null? window.innerHeight: document.body != null? document.body.clientHeight:null; }
function reposBusy(){ $('#busy').css('left', parseInt(pageWidth()/2-40)+'px').css('top', parseInt(pageHeight()/2-40)+'px'); }

// spinning busy gif!
function showBusy() {
	$('#busy').show();
	$(window).resize(function(){reposBusy();});
	reposBusy();
}
function hideBusy() {
	$('#busy').hide();
	$(window).unbind('resize');
}
