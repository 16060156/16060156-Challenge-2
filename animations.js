function time() {
    
    var datum = new Date();
    
    var minuut = datum.getMinutes();
    var uur = datum.getHours();
    
    var dagNummer = datum.getDay();
    
    var dag = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("dagNummerMaand").innerHTML = dag[datum.getDay()];
    
//    var maand = ["january","february","march","april","june","july","august","september","october","november","december"];
//    document.getElementById("dagNummerMaand").innerHTML = maand[datum.getMonth()];
    
    if(minuut < 10 ) {
        minuut = "0" + minuut;
    } 
    
    var tijd = uur + ":" + minuut;
    document.getElementById("urenMinuten").innerHTML = tijd; 
    
    var dagDagMaand = dag + ", " + dagNummer + maand;
    document.getElementById("dagNummerMaand").innerHTML = dagDagMaand;
}

setInterval(time, 100);