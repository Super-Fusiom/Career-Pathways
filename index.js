// Sidebar opening and closing

var sidebar =  document.getElementById("Sidebar")
var main =  document.getElementById("main")


function sideopen() {
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
}

function sideclose() {
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
}
