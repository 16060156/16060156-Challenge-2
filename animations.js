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
    
   if (hours >= 0 && hours <= 6) {
           document.getElementById('background').style.background = "linear-gradient(to top, #1868D6 0%, #263C85 100%)";   
       }
    
    else if (hours >= 7 && hours <= 11) {
           document.getElementById('background').style.background = "linear-gradient(to top, #CFD2E4 0%, #AFDCFA 100%)";   
       }
    
    else if (hours >= 12 && hours <= 18) {
           document.getElementById('background').style.background = "linear-gradient(to top, #87D5F8 0%, #41B8EF 100%)";   
       }
    
    else if (hours >= 19 && hours <= 23) {
           document.getElementById('background').style.background = "linear-gradient(to top, #319FE4 0%, #136DD4 100%)";   
       }
    
//    var symbol = document.getElementById("sun");
//    symbol.src = "moon.png"
}

setInterval(maintime, 100);