

window.onload = function() {

	function printTime() {

		// Define Variables
		var date 	= new Date();
		var hours	= date.getHours();
		var mins	= date.getMinutes();
		var secs	= date.getSeconds();

		// Touching up logic
		if(secs < 10) {
			secs = '0' + secs;
		}
		if(mins < 10) {
			mins = '0' + mins;
		}
		if(hours < 10) {
			hours = '0' + hours;
		}

		// Inject element with value
		document.getElementById('clock').innerHTML = hours + ':' + mins + ':' + secs;
	};

	function printDay() {

		// Define Variables
		var date 	= new Date();
		var day		= date.getDay();
		var datum 	= date.getDate();
		var month	= date.getMonth();
		var year 	= date.getFullYear();

		// Touching up logic
		if(datum == 1 || datum == 21 || datum == 31) {
			datum = datum + 'st';
		}
		else if(datum == 2 || datum == 22) {
			datum = datum + 'nd';
		}
		else if(datum == 3 || datum == 23) {
			datum = datum + 'rd';
		}
		else {
			datum = datum + 'th';
		}

		switch(day) {
			case 1:
				day = 'Monday';
				break;
			case 2:
				day = 'Tuesday';
				break;
			case 3:
				day = 'Wednesday';
				break;
			case 4:
				day = 'Thursday';
				break;
			case 5:
				day = 'Friday';
				break;
			case 6:
				day = 'Saturday';
				break;
			case 7:
				day = 'Sunday';
				break;
			default:
				day = 'Unknown day.';
		}

		switch(month) {
			case 0:
				month = 'January';
				break;
			case 1:
				month = 'February';
				break;
			case 2:
				month = 'March';
				break;
			case 3:
				month = 'April';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'June';
				break;
			case 6:
				month = 'July';
				break;
			case 7:
				month = 'August';
				break;
			case 8:
				month = 'September';
				break;
			case 9:
				month = 'October';
				break;
			case 10:
				month = 'November';
				break;
			case 11:
				month = 'December';
				break;
		}

		// Inject element with value
		document.getElementById('day').innerHTML = day;
		document.getElementById('datum').innerHTML = datum + ' ' + month + ' ' + year;

	}

	// Set Function Timers
	setTimeout(printTime, 1);
	setInterval(printTime, 1000);

	setTimeout(printDay, 1);
	setInterval(printDay, 1000);	

};

function changeTheme(color) {
		var	colorClass 	= color;

		if(colorClass == undefined)		 {
			colorClass = 'green';
		} else {
			colorClass = color;
		}
		document.getElementById('overall').className = '';
		document.getElementById('overall').className += colorClass;
}

// Set Function Timers
setTimeout(changeTheme,1);
