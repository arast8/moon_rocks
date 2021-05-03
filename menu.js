var menuButton = document.getElementById("menu-button");
var menuList = document.getElementById("menu-list");
var body = document.getElementById("body");
var rem = parseInt(window.getComputedStyle(body, null).getPropertyValue("font-size"));
var breakPoint = rem * 40;
var toggled = false;

function setVisibility() {
	if (window.innerWidth < breakPoint) {
		menuButton.style.display = "block";
		if (!toggled) {
			menuButton.innerHTML = "Menu&triangledown;";
			menuList.style.display = "none";
		} else {
			menuButton.innerHTML = "Menu&triangle;";
			menuList.style.display = "block";
		}
	} else {
		menuButton.style.display = "none";
		menuList.style.display = "flex";
		toggled = false;
	}
}

function toggleVisibility() {
	if (menuList.style.display == "none") {
		menuList.style.display = "block";
		menuButton.innerHTML = "Menu&triangle;";
		toggled = true;
	} else {
		menuList.style.display = "none";
		menuButton.innerHTML = "Menu&triangledown;";
		toggled = false;
	}
}
	
setVisibility();
menuButton.addEventListener("click", toggleVisibility);
window.addEventListener("resize", setVisibility);
