var a = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var d = weekday[a.getDay()];
var d1 = a.getDate
var m = a.getMonth;
var y = a.getYear;
var date = d + d1 + m + y;
document.getElementById("date").innerHTML = Date();
