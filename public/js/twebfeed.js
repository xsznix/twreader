//twebfeed.js - contains functions for retrieving feeds from TW

function getTWFeed(url,tags) {
	// make request
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
	// send request
	xmlhttp.open('POST','twebfeed?url='+encodeURIComponent(url)+'&tags='+tags+'&t='+(new Date()).valueOf(),false);
	xmlhttp.send();
	txt = xmlhttp.responseText;
	// process links
	if (txt.substr(0,4)=='<pre' || !tags) {
		return txt;
	} else {
		html = $(txt);
		links = html.find('a');
		// create the base url
		var urlparts = url.split('/');
		var baseurl = '';
		for (i=0;i<urlparts.length-1;i++) {
			baseurl += urlparts[i]+'/';
		}
		// process links
		if (!!links[0]) {
			for (i=0;i<links.length;i++) {
				// make all links absolute
				cururl = $(links[i]).attr('href');
				if (cururl.substr(0,4)!='http') {
					if (cururl.substr(0,1)=='/') {
						// links relative to the root directory
						$(links[i]).attr('href',urlparts[0]+'/'+urlparts[1]+'/'+urlparts[2]+cururl);
					} else {
						// links relative to the current directory
						$(links[i]).attr('href',baseurl+cururl);
					}
				}
				// make all links open in a separate window (IE) or tab (everything else)
				$(links[i]).attr('target','_blank');
			}
		}
		// process images
		imgs = html.find('img');
		if (!!imgs[0]) {
			for (i=0;i<imgs.length;i++) {
				cururl = $(imgs[i]).attr('src');
				if (cururl.substr(0,4)!='http') {
					if (cururl.substr(0,1)=='/') {
						// links relative to the root directory
						$(imgs[i]).attr('src',urlparts[0]+'/'+urlparts[1]+'/'+urlparts[2]+cururl);
					} else {
						// links relative to the current directory
						$(imgs[i]).attr('src',baseurl+cururl);
					}
				}
			}
		}
		return html.html();
	}
}
