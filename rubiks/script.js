function start(){
var xVal = 0;
var xVal1 = 0;
var xVal2 = 0;

var xElement = null;
var xElement1 = null;
var xElement2 = null;

xElement = document.getElementById("test");
xElement1 = document.getElementById("test1");
xElement2 = document.getElementById("test2");

var Interval = window.setInterval(startWatch, 1);
var Interval1 = window.setInterval(startWatch1, 1000);
var Interval2 = window.setInterval(startWatch2, 60000);






function startWatch2(){


      xVal1 += 01;

    xElement2.innerHTML = xVal2;

}
function startWatch1(){


xVal1 += 01;

    xElement1.innerHTML = xVal1%60;

}
function startWatch(){


      xVal += 01;

    xElement.innerHTML = xVal%1000;

}}
