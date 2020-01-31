setInterval(function () {
	date = new Date();
	hour = date.getHours();
	minutes = date.getMinutes();

	if (hour < 10) {
		hour = "0" + hour;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	doc = document.getElementById("time");
	doc.innerHTML = `${hour}:${minutes}`;

	doc.style.textShadow = "2px 2px 7px #00000047";
	doc.style.webkitTextShadow = "2px 2px 5px #00000047";
	doc.style.mozTextShadow = "2px 2px 5px #00000047";
}, 1000);
