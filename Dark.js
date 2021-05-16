
// themes for the website
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
    var style1 = document.getElementById("Dark");
    var style2 = document.getElementById("Light");

    style1.onclick = function () { swapStyleSheet("Dark.css"); };
    style2.onclick = function () { swapStyleSheet("Light.css"); };
}

window.onload = initate;
// Sidebar opening and closing
function sideopen() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function sideclose() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}