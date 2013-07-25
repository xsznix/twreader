<?php
require_once('Browser.php');
if (!$_GET['ua']=='no'||$_GET['m']='yes') {
	$br = new Browser();
	$browser = $br->getBrowser();
	$mcss = '';
	if ($browser==Browser::BROWSER_IPHONE || $browser==Browser::BROWSER_IPOD) {
		$mcss = 'apple.css';
		require_once('m/index.php');
	} elseif ($browser==Browser::BROWSER_ANDROID) {
		$mcss = 'android.css';
		require_once('m/index.php');
	} elseif ($browser==Browser::BROWSER_BLACKBERRY) {
		$mcss = 'bb6.css';
		require_once('m/index.php');
	} elseif ($_GET['m']='yes') {
		$mcss = 'sencha-touch.css';
		require_once('m/index.php');
	} else {
		require_once('normal.php');
	}
} else {
	require_once('normal.php');
}
?>