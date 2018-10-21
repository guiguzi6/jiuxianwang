

var oDay = document.querySelector(".shopCountdownCon .day");
var oHour = document.querySelector(".shopCountdownCon .hour");
var oMinute = document.querySelector(".shopCountdownCon .minute");
var oSecond = document.querySelector(".shopCountdownCon .second");

var timer = null;
timer = setInterval(function(){
    var endTime = new Date("2018/10/30 00:00:00");
    var endS = endTime.getTime() / 1000;
    var nowTime = new Date();
    var nowS = nowTime.getTime() / 1000;

    var reduce = endS - nowS;

    if(reduce <= 0 ){
        clearInterval(timer);
        return 0 ;
    }
    var nDay = parseInt(reduce / (60 * 60 *24));
    var nHour = parseInt((reduce / (60*60) %24));
    var nMinute = parseInt((reduce / 60) %60);
    var nSecond = parseInt(reduce % 60);

    if(nDay < 10){
        nDay = "0" + nDay;
    }
    if(nHour < 10){
        nHour = "0" + nHour
    }
    if(nMinute < 10){
        nMinute = "0" + nMinute
    }
    if(nSecond < 10){
        nSecond = "0" + nSecond
    }
    oDay.innerHTML = nDay;
    oHour.innerHTML = nHour;
    oMinute.innerHTML = nMinute;
    oSecond.innerHTML = nSecond;
},1000)