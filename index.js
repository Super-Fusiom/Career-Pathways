// JavaScript source code
window.onscroll = function () {myFunction()};

var topnav = document.getElementsByClassName("topnav");

var sticky = topnav.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
    var style1 = document.getElementById("Dark");
    var style2 = document.getElementById("Light");

    style1.onclick = swapStyleSheet("Dark.css");
    style2.onclick = swapStyleSheet("Light.css");
}
window.onload = initate;