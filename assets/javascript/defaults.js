function defaults() {
	// ======================================================================
	// Header
	document.getElementById("header").innerHTML =
		'<div class="sidebarIcon sidebarIconClose" onclick="sidebarOpen()"></div>' +
		'<div class="sidebarIcon sidebarIconOpen sidebarIconHide" onclick="sidebarClose()"></div>' +
		'<div class="logoWiki"></div>' +
		'<a class="headerTitle" href="index.html">MCBE Command Wiki</a>' +
		'<div class="search">' +
		'<div class="searchBar">' +
		'<div class="searchIcon" onclick="searchEnter()"></div>' +
		'<input class="searchInput" placeholder="Nhập để tìm kiếm..." type="search">' +
		'</div>' +
		'<div class="searchBox searchBoxHide"></div>' +
		'</div>';
	// ======================================================================
	// Tạo tag script sidebar
	var script = document.createElement('script');
	script.src = "assets/javascript/sidebar.js";
	document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script suggestion
	var script = document.createElement('script');
	script.src = "assets/javascript/suggestion.js";
	document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script clipboard
	// var script = document.createElement('script');
	// script.src = "assets/javascript/clipboard.js";
	// document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script search
	var script = document.createElement('script');
	script.src = "assets/javascript/search.js";
	document.getElementById("header").appendChild(script);
	// ======================================================================
	// Footer
	document.getElementById("footer").innerHTML =
		'<a class="socialLogo logoYoutube" href="https://youtube.com/c/HgVN23?sub_confirmation=1" target="_blank">Youtube HgVN</a><br>' +
		'<a class="socialLogo logoDiscord" href="https://discord.gg/4N3zuWn" target="_blank">Discord Server Hg`s apartment</a><br>' +
		'<a class="socialLogo logoTwitter" href="https://twitter.com/HgVN23?s=0" target="_blank">Twitter @HgVN23</a><br>' +
		'<a class="socialLogo logoFacebook" href="https://www.facebook.com/HgVN23" target="_blank">Facebook Minh Hoàng</a><br>' +
		'Copyright © 2021 - 2022 | Wiki by HgVN | Hosted by <a class="textLink" href="https://github.com/" target="_blank">Github</a>';
}