const timer = document.getElementById("timer");
const congratulations = function() {
  timer.textContent --;
  if (timer.textContent == 0) {
  alert ("Вы победили в конкурсе!");
  clearInterval (timerId);
}
}

var timerId = setInterval(congratulations, 1000);


