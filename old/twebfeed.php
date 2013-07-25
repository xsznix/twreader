<?php
// required for DOM Traversal
require_once("simple_html_dom.php");

/**
* Universal function to get a TeacherWeb feed
* @return string HTML string containing a TWeb feed
*/
function getTWFeed($url) {
	$html = file_get_html($url);
	$htmlcontent = $html->find('div#mainContent');
	if (!$htmlcontent) {
		$htmlcontent = $html->find('div.apt');
	}
	// check if what we want is a <pre>
	$pre = $html->find('pre.owner');
	if (isset($pre[0])) {
		$htmlcontent = $pre;
		str_replace("\n",'<br />',$htmlcontent[0]);
	}
	return $htmlcontent[0];
}

// MAIN: return what was requested
if ($_GET['tags']=='0') { // if user wants plaintext
	echo strip_tags(getTWFeed($_GET['url']));
} else { // if user wants original formatted text 
	echo getTWFeed($_GET['url']);
}
?>