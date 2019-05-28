const status = document.getElementById("status");
let theStartValue = status;
function arr () {
    theStartValue -=1;
  }
var timerId = setInterval(arr());
if (status === 0 ) {
    alert ("Вы победили в конкурсе");
 }
