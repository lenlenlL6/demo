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
	// Sidebar
	document.getElementById("sidebar").innerHTML =
		'<div class="sidebar sidebarClose">' +
		'<div class="sidebarTitle">Mục lục</div>' +
		'<div class="sidebarLine"></div>' +
		'<li><a class="textLink" href="index.html">Trang chủ</a></li>' +
		'<li><a class="textLink" href="mucLuc/feedback.html">Feedback</a></li>' +
		'<div>' +
		'<li class="dropdown">Commands</li>' +
		'<div class="dropdownHide">' +
		'<li><a class="textLink" href="../commands/1help.html">/?</a></li>' +
		'<li><a class="textLink" href="../commands/ability.html">/ability</a></li>' +
		'<li><a class="textLink" href="../commands/alwaysday.html">/alwaysday</a></li>' +
		'<li><a class="textLink" href="../commands/camerashake.html">/camerashake</a></li>' +
		'<li><a class="textLink" href="../commands/clear.html">/clear</a></li>' +
		'<li><a class="textLink" href="../commands/clearspawnpoint.html">/clearspawnpoint</a></li>' +
		'<li><a class="textLink" href="../commands/clone.html">/clone</a></li>' +
		'<li><a class="textLink" href="../commands/connect.html">/connect</a></li>' +
		'<li><a class="textLink" href="../commands/damage.html">/damage</a></li>' +
		'<li><a class="textLink" href="../commands/daylock.html">/daylock</a></li>' +
		'<li><a class="textLink" href="../commands/deop.html">/deop</a></li>' +
		'<li><a class="textLink" href="../commands/dialogue.html">/dialogue</a></li>' +
		'<li><a class="textLink" href="../commands/difficulty.html">/difficulty</a></li>' +
		'<li><a class="textLink" href="../commands/effect.html">/effect</a></li>' +
		'<li><a class="textLink" href="../commands/enchant.html">/enchant</a></li>' +
		'<li><a class="textLink" href="../commands/event.html">/event</a></li>' +
		'<li><a class="textLink" href="../commands/execute.html">/execute</a></li>' +
		'<li><a class="textLink" href="../commands/fill.html">/fill</a></li>' +
		'<li><a class="textLink" href="../commands/fog.html">/fog</a></li>' +
		'<li><a class="textLink" href="../commands/function.html">/function</a></li>' +
		'<li><a class="textLink" href="../commands/gamemode.html">/gamemode</a></li>' +
		'<li><a class="textLink" href="../commands/gamerule.html">/gamerule</a></li>' +
		'<li><a class="textLink" href="../commands/gametest.html">/gametest</a></li>' +
		'<li><a class="textLink" href="../commands/give.html">/give</a></li>' +
		'<li><a class="textLink" href="../commands/help.html">/help</a></li>' +
		'<li><a class="textLink" href="../commands/immutableworld.html">/immutableworld</a></li>' +
		'<li><a class="textLink" href="../commands/kick.html">/kick</a></li>' +
		'<li><a class="textLink" href="../commands/kill.html">/kill</a></li>' +
		'<li><a class="textLink" href="../commands/list.html">/list</a></li>' +
		'<li><a class="textLink" href="../commands/locate.html">/locate</a></li>' +
		'<li><a class="textLink" href="../commands/loot.html">/loot</a></li>' +
		'<li><a class="textLink" href="../commands/me.html">/me</a></li>' +
		'<li><a class="textLink" href="../commands/mobevent.html">/mobevent</a></li>' +
		'<li><a class="textLink" href="../commands/msg.html">/msg</a></li>' +
		'<li><a class="textLink" href="../commands/music.html">/music</a></li>' +
		'<li><a class="textLink" href="../commands/op.html">/op</a></li>' +
		'<li><a class="textLink" href="../commands/particle.html">/particle</a></li>' +
		'<li><a class="textLink" href="../commands/playanimation.html">/playanimation</a></li>' +
		'<li><a class="textLink" href="../commands/playsound.html">/playsound</a></li>' +
		'<li><a class="textLink" href="../commands/reload.html">/reload</a></li>' +
		'<li><a class="textLink" href="../commands/replaceitem.html">/replaceitem</a></li>' +
		'<li><a class="textLink" href="../commands/ride.html">/ride</a></li>' +
		'<li><a class="textLink" href="../commands/say.html">/say</a></li>' +
		'<li><a class="textLink" href="../commands/schedule.html">/schedule</a></li>' +
		'<li><a class="textLink" href="../commands/scoreboard.html">/scoreboard</a></li>' +
		'<li><a class="textLink" href="../commands/script.html">/script</a></li>' +
		'<li><a class="textLink" href="../commands/setblock.html">/setblock</a></li>' +
		'<li><a class="textLink" href="../commands/setmaxplayers.html">/setmaxplayers</a></li>' +
		'<li><a class="textLink" href="../commands/setworldspawn.html">/setworldspawn</a></li>' +
		'<li><a class="textLink" href="../commands/spawnpoint.html">/spawnpoint</a></li>' +
		'<li><a class="textLink" href="../commands/spreadplayers.html">/spreadplayers</a></li>' +
		'<li><a class="textLink" href="../commands/stopsound.html">/stopsound</a></li>' +
		'<li><a class="textLink" href="../commands/structure.html">/structure</a></li>' +
		'<li><a class="textLink" href="../commands/summon.html">/summon</a></li>' +
		'<li><a class="textLink" href="../commands/tag.html">/tag</a></li>' +
		'<li><a class="textLink" href="../commands/teleport.html">/teleport</a></li>' +
		'<li><a class="textLink" href="../commands/tell.html">/tell</a></li>' +
		'<li><a class="textLink" href="../commands/tellraw.html">/tellraw</a></li>' +
		'<li><a class="textLink" href="../commands/testfor.html">/testfor</a></li>' +
		'<li><a class="textLink" href="../commands/testforblock.html">/testforblock</a></li>' +
		'<li><a class="textLink" href="../commands/testforblocks.html">/testforblocks</a></li>' +
		'<li><a class="textLink" href="../commands/tickingarea.html">/tickingarea</a></li>' +
		'<li><a class="textLink" href="../commands/time.html">/time</a></li>' +
		'<li><a class="textLink" href="../commands/title.html">/title</a></li>' +
		'<li><a class="textLink" href="../commands/titleraw.html">/titleraw</a></li>' +
		'<li><a class="textLink" href="../commands/toggledownfall.html">/toggledownfall</a></li>' +
		'<li><a class="textLink" href="../commands/tp.html">/tp</a></li>' +
		'<li><a class="textLink" href="../commands/w.html">/w</a></li>' +
		'<li><a class="textLink" href="../commands/wb.html">/wb</a></li>' +
		'<li><a class="textLink" href="../commands/weather.html">/weather</a></li>' +
		'<li><a class="textLink" href="../commands/worldbuilder.html">/worldbuilder</a></li>' +
		'<li><a class="textLink" href="../commands/wsserver.html">/wsserver</a></li>' +
		'<li><a class="textLink" href="../commands/xp.html">/xp</a></li>' +
		'</div>' +
		'</div>' +
		'<div>' +
		'<li class="dropdown">Danh sách Id</li>' +
		'<div class="dropdownHide">' +
		'<li><a class="textLink" href="../danhSachId/animationId.html">Animation</a></li>' +
		'<li><a class="textLink" href="../danhSachId/blockstateId.html">Blockstate</a></li>' +
		'<li><a class="textLink" href="../danhSachId/componentId.html">Component</a></li>' +
		'<li><a class="textLink" href="../danhSachId/effectId.html">Effect</a></li>' +
		'<li><a class="textLink" href="../danhSachId/enchantmentId.html">Enchantment</a></li>' +
		'<li><a class="textLink" href="../danhSachId/eventId.html">Event</a></li>' +
		'<li><a class="textLink" href="../danhSachId/gameruleId.html">Gamerule</a></li>' +
		'<li><a class="textLink" href="../danhSachId/particleId.html">Particle</a></li>' +
		'<li><a class="textLink" href="../danhSachId/rawMessageId.html">Raw message</a></li>' +
		'<li><a class="textLink" href="../danhSachId/trackId.html">Track</a></li>' +
		'</div>' +
		'</div>' +
		'<div>' +
		'<li class="dropdown">Thông tin liên quan</li>' +
		'<div class="dropdownHide">' +
		'<li><a class="textLink" href="../thongTinLienQuan/target.html">Target</a></li>' +
		'<li><a class="textLink" href="../thongTinLienQuan/ki-hieu.html">Kí hiệu</a></li>' +
		'<li><a class="textLink" href="../thongTinLienQuan/command-block.html">Command Block</a></li>' +
		'</div>' +
		'</div>' +
		'<div class="sidebarEnd"></div>' +
		'</div>' +
		'<div class="sidebarBlur sidebarClose" onclick="sidebarClose()"></div>'
	// Tạo tag script sidebar
	var script = document.createElement('script');
	script.src = "assets/javascript/sidebar.js";
	document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script filter
	var script = document.createElement('script');
	script.src = "assets/javascript/filter.js";
	document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script clipboard
	// var script = document.createElement('script');
	// script.src = "assets/javascript/clipboard.js";
	// document.getElementById("script").appendChild(script);
	// ======================================================================
	// Tạo tag script và chạy dropdown
	// var script = document.createElement('script');
	// script.src = "assets/javascript/dropdown.js";
	// document.getElementById("script").appendChild(script);
	var toggler = document.getElementsByClassName("dropdown");
	var i;
	for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", dropdownActive);
	}
	// ======================================================================
	// Tạo tag script search
	var script = document.createElement('script');
	script.src = "assets/javascript/search.js";
	document.getElementById("header").appendChild(script);
	// ======================================================================
	// Footer
	document.getElementById("footer").innerHTML =
		'<div>' +
		'<a class="social footerLink linkYoutube" href="https://youtube.com/c/HgVN23?sub_confirmation=1" target="_blank"><div class="socialLogo logoYoutube"></div>Youtube HgVN</a>' +
		'<a class="social footerLink linkDiscord" href="https://discord.gg/4N3zuWn" target="_blank"><div class="socialLogo logoDiscord"></div>Discord Server Hg`s apartment</a>' +
		'<a class="social footerLink linkTwitter" href="https://twitter.com/HgVN23?s=0" target="_blank"><div class="socialLogo logoTwitter"></div>Twitter @HgVN23</a>' +
		'<a class="social footerLink linkFacebook" href="https://www.facebook.com/HgVN23" target="_blank"><div class="socialLogo logoFacebook"></div>Facebook Minh Hoàng</a>' +
		'</div>' +
		'<div class="copyright">' +
		'<div>Copyright © 2021 - 2022</div><div class="copyrightSide"></div>' +
		'<div>Wiki by HgVN</div><div class="copyrightSide"></div>' +
		'<div>Hosted by <a class="textLink" href="https://github.com/" target="_blank">Github</a></div>' +
		'</div>'
}

function dropdownActive() {
	this.classList.toggle("dropdownActive");
	this.parentElement.querySelector(".dropdownHide").classList.toggle("dropdownShow");
}