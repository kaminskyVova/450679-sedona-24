
// модальное окно

var modal = document.getElementById('myModal');
var btn = document.getElementById('open_modal');

btn.onclick = function () {
    modal.style.display = "block";
 }

 btn.ondblclick = function () {
    modal.style.display = "none";
 }

 btn.oncontextmenu = function() {
    modal.style.display = "none";
    return false;
 }

 /*btn.onmousedown = function() {
    btn.style.background = "#503e33";
 }*/


