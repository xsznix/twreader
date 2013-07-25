// fullfeedview.js - contains functions needed for the full feed view

function showfullfeedview(index) {
	$('#fullfeedview').stop().fadeOut(500,function(){
		$('#maintable').stop().fadeOut(500,function(){
			feed = getFeed(index);
			$('#fullfeedview')[0].innerHTML = '<h2>'+feed.name+' (<a href="'+feed.url+'" target="_blank">original</a>)</h2>'+feed.content;
			$('#fullfeedview').fadeIn(500);
			setTimeout(updfullfeedview, 500, index, feed);
		});
	});
}
function updfullfeedview(index, feed) {
	showBusy();
	if (!updFeed(index,1)=='') {
		$('#fullfeedview').html('<h2>'+feed.name+' (<a href="'+feed.url+'" target="_blank">original</a>)</h2>'+getFeed(index).content)
	}
	hideBusy();
}
/*
function _difffullfeedview(index, feed) {
	if (!updFeed(index,1)=='') {
		var feed_update = getFeed(index);
		var content = '';
		var difffail;
		var d = new diff_match_patch();
		var diff = d.diff_main(feed.content,feed_update.content);
		d.diff_cleanupSemantic(diff);
		if (feed.content != feed_update.content) {
			// process diffs
			for (i=0;i<diff.length;i++) {
				switch (diff[i][0]) {
				case 1:
					content += _diffwordformat(diff[i][1],'diff-ins');
					break;
				case 0:
					content += diff[i][1];
					break;
				case -1:
					content += _diffwordformat(diff[i][1],'diff-del');
					break;
				default:
					content += diff[i][1];
				} // end switch
			} // end for
		} else { difffail = true; }
	} else { difffail = true; }
	if (difffail) content = feed.content;
	$('#fullfeedview').html('<h2>'+feed.name+'</h2>'+content);
	localStorage['feed'+index+'diff'] = content;
}
*/
// ^^^ does not work

function hidefullfeedview() {
	$('#maintable').stop().fadeOut(500,function(){
		$('#fullfeedview').stop().fadeOut(500,function(){$('#maintable').fadeIn(500)})
	});
}

/*
// takes a series of words and applies classes to them word by word
// WARNING - lots of regex, stay away if you are easily confused
function _diffwordformat(words, diffclass) {
	// split into individual words
	var diffwords = words.split(/\s/g); // split at whitespace
	var tag = false;
	var content = '';
	var taglt;
	var taggt;
	for (i=0;i<diffwords.length;i++) {
		word = diffwords[i];
		// now split at "<" if present in current word
		if (/</.test(word)) {
			index = word.search(/</);
			diffwords.splice(i+1,0,word.substr(index));
			word = word.substr(0,--index);
		}
		taglt = /<(.*)/.exec(word);
		taggt = /(.*)>(.*)/.exec(word);
		if ( !!taglt || !!taggt || tag ) { // if word opens a tag or is inside a tag
			if ( !!taggt ) { // if word closes a tag
				content += (tag?'<':'')+taglt[1]+(tag?taggt[1]:'')+'>'+(taggt[2]?'<span class="'+diffclass+'">'+taggt[2]+'</span>':'');
			} else { // if word does not close a tag
				content += (tag?'<':'')+taglt[1];
				tag = true;
			}
		} // if word does not contain a tag open or close
		else if (word) content += '<span class="'+diffclass+'">'+word+'</span> ';
	}
	return content;
}
*/
// ^^^ does not work
