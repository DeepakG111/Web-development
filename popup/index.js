var popup = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");

function show() {
    popup.style.display = "block";
    overlay.style.display = "block";
}
function hide(){
    popup.style.display="none";
    overlay.style.display="none";
}


var button = document.getElementById("btn");
button.addEventListener("click", function() {
    alert("vanakam");
});
