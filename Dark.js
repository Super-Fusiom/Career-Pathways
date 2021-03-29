// JavaScript source code
window.onscroll = function () {myFunction()};
//sticky code
var topnav = document.getElementsByClassName("topnav");

var sticky = topnav.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}
// themes for the website
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
    var style1 = document.getElementById("Dark");
    var style2 = document.getElementById("Light");

    style1.onclick = function () { swapStyleSheet("Dark.css") };
    style2.onclick = function () { swapStyleSheet("Light.css") };
}

window.onload = initate;
// Optimized for mobile
if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    
}