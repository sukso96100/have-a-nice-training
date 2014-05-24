/* Author : Cfrim
 * http://jsfiddle.net/RUTVj/2/
 */

countIt();

function countIt(){
    year = 2014;
    month = 06;
    day = 21;
    hours = 07;
    minutes = 00;
    seconds = 00;

    setTimeout(function(){
    endDate = new Date(year, month, day, hours, minutes, seconds, 00);
    thisDate  = new Date();
    thisDate  = new Date(thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate(), thisDate.getHours(), thisDate.getMinutes(), thisDate.getSeconds(), 00, 00);

    var daysLeft = parseInt((endDate-thisDate)/86400000);
    var hoursLeft = parseInt((endDate-thisDate)/3600000);
    var minutsLeft = parseInt((endDate-thisDate)/60000);
    var secondsLeft = parseInt((endDate-thisDate)/1000);

    seconds = minutsLeft*60;
    seconds = secondsLeft-seconds;

    minutes = hoursLeft*60;
    minutes = minutsLeft-minutes;

    hours = daysLeft*24;
    hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;

    days = daysLeft;

    startCount(days, hours, minutes,seconds);
    }, 1000);
}

function startCount(days, hours, minutes, seconds){
    document.getElementById("counter").innerHTML=days+"일 "+hours+"시간 "+minutes+"분 "+seconds+"초";
    countIt();
}
