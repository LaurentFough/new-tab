document.getElementById("search").onclick = click;
document.getElementById("search").onmouseover = over;

clicked = null;

function click() {
	clicked = true;
	doc = document.getElementById("search");
	doc.style.borderStyle = "none";
	doc.style.boxShadow = "3px 3px 10px #00000030";
	doc.style.webkitBoxShadow = "3px 3px 5px #00000030";
	doc.style.mozBoxShadow = "3px 3px 5px #00000030";
}

function over() {
	doc = document.getElementById("search");
	doc.style.borderStyle = "none";
	doc.style.boxShadow = "3px 3px 10px #00000030";
	doc.style.webkitBoxShadow = "3px 3px 5px #00000030";
	doc.style.mozBoxShadow = "3px 3px 5px #00000030";
}

document.getElementById("bg").onclick = clickRestore;
document.getElementById("bookmark").onclick = clickRestore;
document.getElementById("foo").onclick = clickRestore;
document.getElementById("time").onclick = clickRestore;
document.getElementById("search").onmouseleave = overRestore;

function clickRestore() {
	clicked = false;
	doc = document.getElementById("search");
	doc.style.border = "solid 1px #fff";
}

function overRestore() {
	if (clicked == true) return;
	doc = document.getElementById("search");
	doc.style.border = "solid 1px #fff";
}