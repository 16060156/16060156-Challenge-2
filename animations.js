function maintime() {
    
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    
                                                        // Voegt een 0 toe aan tijd, so 8:3 = 8:03 door dit stukje code
    if (mins < 10) {
        mins = "0"+mins;
    }

    if (hours < 10) {
        hours = "0"+hours;
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
    
                                                        // Visualisatie verandert op tijd
   if (hours >= 0 && hours <= 6) {
            document.getElementById('background').style.background = "linear-gradient(to top, #214CA2 0%, #263C85 100%)";
            document.getElementById('sun').style.backgroundImage = "url('images/moon.png')";
       }
    
    else if (hours >= 7 && hours <= 11) {
            document.getElementById('background').style.background = "linear-gradient(to top, #CFD2E4 0%, #AFDCFA 100%)";
            document.getElementById('sun').style.backgroundImage = "url('images/sun.png')";
       }
    
    else if (hours >= 12 && hours <= 18) {
            document.getElementById('background').style.background = "linear-gradient(to top, #87D5F8 0%, #41B8EF 100%)";
            document.getElementById('sun').style.backgroundImage = "url('images/sun.png')";
       }
    
    else if (hours >= 19 && hours <= 23) {
            document.getElementById('background').style.background = "linear-gradient(to top, #319FE4 0%, #136DD4 100%)";
            document.getElementById('sun').style.backgroundImage = "none";
       }
}

setInterval(maintime, 100);

var sun = document.getElementById('sun');
var fullTime = document.getElementById('fullTime');
var mainTime = document.getElementById('mainTime');
var mainDay = document.getElementById('mainDay');


                                                            // Animaties
var tl1 = new TimelineMax({repeat: -1, repeatDelay: 2});
tl1.from('#sun', 5, {top: 130, opacity: 0})
tl1.to('#sun', 4, {top: 130, opacity: 1});

var tl2 = new TimelineMax();
tl2.from('#fullTime', 0.6, {top: 225, ease: Bounce.easeOut})
tl2.to('#fullTime', 0.3, {opacity: 1});

var tl3 = new TimelineMax();
tl3.from('#mainTime', 2, {opacity: 0})
tl3.to('#mainTime', 1, {opacity: 1.0,});

var tl4 = new TimelineMax();
tl4.from('#mainDay', 3, {opacity: 0})
tl4.to('#mainDay', 1, {opacity: 1.0});

                                                            // Tekst highlighten op mouseover/mouseout
function textShadowShow() {
    document.getElementById("fullTime").style.textShadow = "1px 1px 25px rgba(255,255,255, 0.5)";
}

function textShadowHide() {
    document.getElementById("fullTime").style.textShadow = "none";
}
















