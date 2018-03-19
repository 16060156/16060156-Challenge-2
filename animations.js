function maintime() {
    
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var day = weekday[d.getDay()];
    var dayNumber = d.getDate();
    
    var monthname = new Array(12);
        weekday[0] = "january";
        weekday[1] = "february";
        weekday[2] = "march";
        weekday[3] = "april";
        weekday[4] = "may";
        weekday[5] = "june";
        weekday[6] = "july";
        weekday[7] = "august";
        weekday[8] = "september";
        weekday[9] = "october";
        weekday[10] = "november";
        weekday[11] = "december";
    
    var month = monthname[d.getMonth()];
    
    document.getElementById("mainTime").innerHTML = hours+":"+mins;
    document.getElementById("mainDay").innerHTML = day+", "+dayNumber+" "+month;
    
}

setInterval(maintime, 100);