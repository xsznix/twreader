<!DOCTYPE html>
<html>
<head>
<title>TeacherWeb feed reader</title>
<link rel="icon" type="image/png" href="favicon.png" />
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link type="text/css" rel="stylesheet" href="normal.css" />
<script type="text/javascript"
 src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.easing.1.3.js"></script>
<script type="text/javascript" src="jquery.color.js"></script>
<script type="text/javascript" src="diff_match_patch.js"></script>
<script type="text/javascript" src="twebfeed.js"></script>
<script type="text/javascript" src="database.js"></script>
<script type="text/javascript" src="compression.js"></script>
<script type="text/javascript" src="update.js"></script>
<script type="text/javascript" src="sidebar.js"></script>
<script type="text/javascript" src="fullfeedview.js"></script>
<script type="text/javascript" src="editfeeds.js"></script>
<script type="text/javascript" src="events.js"></script>
<script type="text/javascript" src="normal.js"></script>
</head>
<body>
<!-- sidebar -->
<div id="sidebar">
	<ul id="navbar">
	</ul>
	<ul id="bottombar">
		<li class="navitem" id="showsignin"><a href="#">Sign In/Sign Up</a></li>
		<li class="navitem" id="showeditfeeds"><a href="#">Add/Edit Feeds</a></li>
		<li class="navitem" id="showabout"><a href="#">About</a></li>
	</ul>
	<ul id="backbar" class="hidden">
		<li id="backbutton"><a href="#">Back</a></li>
	</ul>
	
	<!-- hidden sections -->
	<div class="hidden" id="signin">
		<h2>Sign In</h2>
		<p>Not implemented</p>
		<h2>Sign Up</h2>
		<p>Not implemented</p>
		<div style="height: 64px">&nbsp;</div>
	</div>
	<div class="hidden" id="editfeeds"></div>
	<div class="hidden" id="about">
		<h2>About this webpage</h2>
		<p>This application is licensed under CC-BY-NC-SA 3.0.</p>
		<p>You are responsible for any actions you do using this webpage.
		No copyright infringement is intended, and any infringement resulting
		from your use is your problem, not mine.</p>
		<p>This webpage does not willingly send any personal information to any
		third-party. Your feed data is stored on your own computer, and is never
		sent to the server except to retrieve the feeds, which must be done because
		of technical limitations.</p>
		<p>This webpage is based on a work originally by Yash Aggarwal.</p>
		<h2>How to use</h2>
		<p>Before you begin, it is recommended that you get AdBlock.</p>
		<p>To start, click "Add/Edit Feeds". Add a feed and give it a name. Under
		URL, paste the location of the feed from TeacherWeb that you want to
		subscribe to. When you click "Update", Main screen turn on. You must click
		"Update" for every feed you want to add or edit individually.</p>
		<p>To update main screen, just click "Update Now" at the top. After a few
		seconds, all of your feed subscriptions will update. You must do this every
		time you want to update.</p>
		<p>Main screen shows you the changes made to your subscriptions. When a feed
		is updated, it will be highlighted on main screen. The next time you update,
		that feed will not be highlighted anymore unless it was updated again.</p>
		<p>At any time, you may look at the actual feeds, with changes highlighted,
		without leaving this webpage. Simply click on the title of the feed you want
		to view, either in the navigation bar at the left or on the left side of
		Main screen. To go back to Main screen, click "Home".</p>
		<h2>Credits</h2>
		<p>This webpage contains:</p>
		<ul>
			<li><a href="http://jquery.com">jQuery 1.5.1</a></li>
			<li><a href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">jQuery easing plugin</a></li>
			<li><a href="http://plugins.jquery.com/project/color" target="_blank">jQuery color plugin</a></li>
			<li><a href="http://code.google.com/p/google-diff-match-patch/" target="_blank">google-diff-match-patch</a></li>
			<li><a href="http://stackoverflow.com/questions/294297/javascript-implementation-of-gzip" target="_blank">LZMA compression algorithm</a></li>
			<li><a href="http://www.andrewdavidson.com/articles/spinning-wait-icons/" target="_blank">Andrew Davidson's spinning wait icon</a></li>
			<li><a href="http://www.softicons.com/free-icons/food-drinks-icons/paradise-fruit-icon-set-by-artbees/apple-icon">An apple icon</a></li>
			<li>and lots of hacker love!</li>
		</ul>
		<h2>Notes</h2>
		<p>Supported browsers:</p>
		<ul>
			<li>Firefox 4</li>
			<li>Chrome 10</li>
			<li>Opera 11</li>
			<li>Internet Explorer 8 (partial)</li>
		</ul>
		<p>Unsupported browsers:</p>
		<ul>
			<li>Internet Explorer 7</li>
		</ul>
		<h2>Changelog</h2>
		<h3>Version 0.3.1</h3>
		<ul>
			<li>Added favicon</li>
		</ul>
		<h3>Version 0.3</h3>
		<ul>
			<li>Prettify Main screen (moar suggestions plz, contact me)</li>
			<li>Added better support for feeds</li>
			<li>Fixed choppy animation</li>
			<li>Made obvious that clicking the table cell that contains the feed name
			in Main screen goes to the feed</li>
			<li>Made feed links open in new tab</li>
			<li>Indication when updating</li>
			<li>Relative links in feeds now go to their original location</li>
			<li>Images with relative sources now come from their original location</li>
			<li>Added ability to import feed data to the end of the existing data</li>
			<li>Minor changes</li>
		</ul>
		<h3>Version 0.2.3</h3>
		<ul>
			<li>Better line breaks in Main screen</li>
			<li>Link to original TeacherWeb page</li>
			<li>Minor changes</li>
		</ul>
		<h3>Version 0.2.2</h3>
		<ul>
			<li>Removed buggy diff for HTML with tags</li>
			<li>Added link to source at bottom of About section</li>
			<li>Minor changes</li>
		</ul>
		<h3>Version 0.2.1</h3>
		<ul>
			<li>Added support for more feeds</li>
			<li>Added "Get Started" section for n00bs</li>
			<li>Better IE 8 support (still not perfect)</li>
			<li>Added more text in the About section</li>
		</ul>
		<h3>Version 0.2</h3>
		<ul>
			<li>Added ability to move feeds up and down</li>
			<li>Sped up editing feeds</li>
			<li>Added support to import/export feed lists</li>
			<li>Added partial support for Internet Explorer 8</li>
			<li>Added HOWTO in About section</li>
			<li>Added changelog</li>
			<li>Added proper credits</li>
			<li>Added support for more types of TeacherWeb feeds</li>
			<li>Bug fixes, minor changes</li>
		</ul>
		<h3>Version 0.1</h3>
		<ul>
			<li>Initial release</li>
		</ul>
		<p>Any comments, questions, suggestions, criticisms, or flames can be sent
		to me through Facebook. If there is any problem, send me a message with any
		relevant information that would help in fixing it.</p>
		<p>Created and maintained by Xuming Zeng.</p>
		<p><a href="teacherweb-reader.tar.bz2">Source</a></p>
		<div style="height: 64px">&nbsp;</div>
	</div>
</div>
<!-- main container -->
<div id="maincontainer">
	<table id="maintable">
		<!-- head -->
		<thead>
			<tr>
				<th>Updates</th>
			</tr>
			<tr>
				<td>Last updated:</td>
				<td id="updates">
				<span id="updated">never</span> <a href="javascript:updateMain();void 0" id="update">Update Now</a>
				</td>
			</tr>
		</thead>
		<!-- body -->
		<tbody></tbody>
		<!-- foot; idk why this is here -->
		<tfoot>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		</tfoot>
	</table>
	<div class="hidden" id="fullfeedview"></div>
</div>
<div class="hidden" id="busy"><img src="wait30trans.gif" /><p>Updating...</p></div>
</body>
</html>