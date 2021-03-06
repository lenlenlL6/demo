const search = document.querySelector(".search");
const searchInput = search.querySelector(".searchInput");
const searchBox = search.querySelector(".searchBox");

searchInput.onkeyup = (e)=>{
	let userData = e.target.value;
	let emptyArray = [];
	if(userData){
		emptyArray = filter.filter((data)=>{
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data)=>{
			return data = '<li>' + data + '</li>';
		});
		searchBox.classList.remove("searchBoxHide");
		showSuggestions(emptyArray);
		let allList = searchBox.querySelectorAll("li");
		for (let i = 0; i < allList.length; i++) {
			allList[i].setAttribute("onclick", "select(this)");
		}
	}else{
		searchBox.classList.add("searchBoxHide");
	}
}

function select(element){
	let selectUserData = element.textContent;
	searchInput.value = selectUserData;
	searchBox.classList.add("searchBoxHide");

	searchFilter(searchInput.value);
}

function showSuggestions(list){
	let listData;
	if(!list.length){
		// userValue = searchInput.value;
		// listData = '<li>' + userValue + '</li>';
		listData = '<li>Không có dữ liệu trong Wiki</li>';
	}else{
		listData = list.join('');
	}
	searchBox.innerHTML = listData;
}

function searchFilter(searchValue){
	if(mucLuc.includes(searchValue)) {
		window.open("https://hgvn23.github.io/mucLuc/" + searchValue + ".html", "_self");
	}else if(danhSachId.includes(searchValue)) {
		window.open("https://hgvn23.github.io/danhSachId/" + searchValue + ".html", "_self");
	}else if(thongTinLienQuan.includes(searchValue)) {
		window.open("https://hgvn23.github.io/thongTinLienQuan/" + searchValue + ".html", "_self");
	}else if(searchValue === "?"){
		window.open("https://hgvn23.github.io/commands/1help.html", "_self");
	}else if(commands.includes(searchValue)){
		window.open("https://hgvn23.github.io/commands/" + searchValue + ".html", "_self");
	}else{
		window.open("https://hgvn23.github.io/404.html", "_self");
	}
}

var enter = document.querySelector(".searchInput");
enter.addEventListener("keydown", (e)=>{
	if (e.keyCode === 13) {
		searchEnter(e)
	}
});

function searchEnter(){
	var searchEnter = document.querySelector(".searchInput").value.toLocaleLowerCase();
	searchFilter(searchEnter);
}