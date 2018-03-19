function maintime() {
    
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    
    if (mins < 10) {
        mins = "0"+mins;
    }
    
    var weekDay = new Array(7);
        weekDay[0] = "Sunday";
        weekDay[1] = "Monday";
        weekDay[2] = "Tuesday";
        weekDay[3] = "Wednesday";
        weekDay[4] = "Thursday";
        weekDay[5] = "Friday";
        weekDay[6] = "Saturday";

    var day = weekDay[d.getDay()];
    var dayNumber = d.getDate();
    
    var monthName = new Array(12);
        monthName[0] = "january";
        monthName[1] = "february";
        monthName[2] = "march";
        monthName[3] = "april";
        monthName[4] = "may";
        monthName[5] = "june";
        monthName[6] = "july";
        monthName[7] = "august";
        monthName[8] = "september";
        monthName[9] = "october";
        monthName[10] = "november";
        monthName[11] = "december";
    
    var month = monthName[d.getMonth()];
    
    document.getElementById("mainTime").innerHTML = hours+":"+mins;
    document.getElementById("mainDay").innerHTML = day+", "+dayNumber+" "+month;
    
   if (hours >= 0 && hours <= 23) {
           document.getElementById('background').style.background = '-webkit-linear-gradient('
        + 'rgba(4, 24, 35, 0.80)' + ', ' + 'rgba(18, 9, 40, 0.80)' + '), url(alleen voor background)';   
       }
}

setInterval(maintime, 100);