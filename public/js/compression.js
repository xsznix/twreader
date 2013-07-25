// http://jsolait.net/

// LZW-compress a string
function lzw_encode(s) {
	var dict = {};
	var data = (s + "").split("");
	var out = [];
	var currChar;
	var phrase = data[0];
	var code = 256;
	for (var i=1; i<data.length; i++) {
	currChar=data[i];
	if (dict[phrase + currChar] != null) {
	phrase += currChar;
	}
	else {
	out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
	dict[phrase + currChar] = code;
	code++;
	phrase=currChar;
	}
	}
	out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
	for (var i=0; i<out.length; i++) {
	out[i] = String.fromCharCode(out[i]);
	}
	return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
	var dict = {};
	var data = (s + "").split("");
	var currChar = data[0];
	var oldPhrase = currChar;
	var out = [currChar];
	var code = 256;
	var phrase;
	for (var i=1; i<data.length; i++) {
	var currCode = data[i].charCodeAt(0);
	if (currCode < 256) {
	phrase = data[i];
	}
	else {
	phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
	}
	out.push(phrase);
	currChar = phrase.charAt(0);
	dict[code] = oldPhrase + currChar;
	code++;
	oldPhrase = phrase;
	}
	return out.join("");
}

function feedToString(feed) {
	return '["'+encodeURIComponent(feed.name)+'","'+encodeURIComponent(feed.url)+'"]';
}

function compressFeeds() {
	var feedstr = '[';
	for (i=0;i<getNumOfFeeds();i++) {
		feed = getFeed(i);
		feedstr += feedToString(feed) + ',';
	}
	return lzw_encode(feedstr+']');
}
function deflateFeeds(str,append) {
	showBusy();
	// copy pasted feeds
	var feeds = eval(decodeURIComponent(lzw_decode(str)));

	if (append) {
		// don't delete existing feeds
		nf = getNumOfFeeds();
		for (j=0;j<feeds.length;j++) {
			setFeed(j+parseInt(nf),feeds[j][0],feeds[j][1]);
		}
	} else {
		// delete existing feeds
		while (getNumOfFeeds()>0) {
			delFeed(0);
		}
		for (j=0;j<feeds.length;j++) {
			setFeed(j,feeds[j][0],feeds[j][1]);
		}
	}
	makeNavbar();
	showMain();
	prepareeditfeeds();
	hideBusy();
}
