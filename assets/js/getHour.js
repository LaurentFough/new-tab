setInterval(async function() {
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
}, 1000);

