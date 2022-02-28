function clipboard() {
	var copyText = document.querySelector(".textCommand");
	navigator.clipboard.writeText(copyText);
}