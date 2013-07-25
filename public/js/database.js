//database.js - contains functions to interact with localStorage

// http://diveintohtml5.org/storage.html
function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

if (!getNumOfFeeds()) {setNumOfFeeds(0)}

// NOTE: feeds are zero-indexed
function getFeed(index) {
	return {
		name: localStorage['feed'+index+'name'],
		url: localStorage['feed'+index+'url'],
		content: localStorage['feed'+index+'content'],
		content_plain: localStorage['feed'+index+'content_plain'],
		diff: localStorage['feed'+index+'diff'],
		diff_plain: (!(dp=localStorage['feed'+index+'diff_plain'])?'No updates':dp)
	};
}
function updFeed(index, tags) {
	return (localStorage['feed'+index+'content'+(tags?'':'_plain')]
		= getTWFeed(getFeed(index).url,tags));
}
function setFeed(index, name, url) {
	localStorage['feed'+index+'name'] = name;
	localStorage['feed'+index+'url'] = url;
	localStorage['feed'+index+'content'] = getTWFeed(url,1);
	localStorage['feed'+index+'content_plain'] = getTWFeed(url,0);
	localStorage['feed'+index+'diff'] = localStorage['feed'+index+'content'];
	localStorage['feed'+index+'diff_plain'] = 'No updates.';
	if (++index > getNumOfFeeds()) setNumOfFeeds(index);
	return true;
}
function delFeed(index) {
	// delete feed by changing the 'indexes' of all following arrays
	for (i=index+1;i<getNumOfFeeds();i++) {
		i1 = i - 1;
		localStorage['feed'+i1+'name'] = localStorage['feed'+i+'name'];
		localStorage['feed'+i1+'url'] = localStorage['feed'+i+'url'];
		localStorage['feed'+i1+'content'] = localStorage['feed'+i+'content'];
		localStorage['feed'+i1+'content_plain'] = localStorage['feed'+i+'content_plain'];
		localStorage['feed'+i1+'diff'] = localStorage['feed'+i+'diff'];
		localStorage['feed'+i1+'diff_plain'] = localStorage['feed'+i+'diff_plain'];
	}
	// -1 bug workaround
	if (index==0) {
		delete localStorage['feed-1name'];
		delete localStorage['feed-1url'];
		delete localStorage['feed-1content'];
		delete localStorage['feed-1content_plain'];
		delete localStorage['feed-1diff'];
		delete localStorage['feed-1diff_plain'];
	}
	// delete last feed
	nf = getNumOfFeeds();
	delete localStorage['feed'+(--nf)+'name'];
	delete localStorage['feed'+nf+'url'];
	delete localStorage['feed'+nf+'content'];
	delete localStorage['feed'+nf+'content_plain'];
	delete localStorage['feed'+nf+'diff'];
	delete localStorage['feed'+nf+'diff_plain'];
	setNumOfFeeds(nf);
	return true;
}
function swpFeed(index1, index2) {
	// assign the values of feed index1 to a temp variable
	tempname = localStorage['feed'+index1+'name'];
	tempurl = localStorage['feed'+index1+'url'];
	tempcontent = localStorage['feed'+index1+'content'];
	tempcontent_plain = localStorage['feed'+index1+'content_plain'];
	tempdiff = localStorage['feed'+index1+'diff'];
	tempdiff_plain = localStorage['feed'+index1+'diff_plain'];
	// copy feed index2 values into feed index1
	localStorage['feed'+index1+'name'] = localStorage['feed'+index2+'name'];
	localStorage['feed'+index1+'url'] = localStorage['feed'+index2+'url'];
	localStorage['feed'+index1+'content'] = localStorage['feed'+index2+'content'];
	localStorage['feed'+index1+'content_plain'] = localStorage['feed'+index2+'content_plain'];
	localStorage['feed'+index1+'diff'] = localStorage['feed'+index2+'diff'];
	localStorage['feed'+index1+'diff_plain'] = localStorage['feed'+index2+'diff_plain'];
	// move temp values from index1 to index2
	localStorage['feed'+index2+'name'] = tempname;
	localStorage['feed'+index2+'url'] = tempurl;
	localStorage['feed'+index2+'content'] = tempcontent;
	localStorage['feed'+index2+'content_plain'] = tempcontent_plain;
	localStorage['feed'+index2+'diff'] = tempdiff;
	localStorage['feed'+index2+'diff_plain'] = tempdiff_plain;
	return true;
}

function getNumOfFeeds() { return localStorage['NumOfFeeds']; }
function setNumOfFeeds(num) { return localStorage['NumOfFeeds'] = num; }
function getUpdated() { return localStorage['updated']; }
function setUpdated(date) { return localStorage['updated'] = date; }
