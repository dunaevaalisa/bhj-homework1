const congratulations = function() {
  const timer = document.getElementById("timer");
  timer.textContent --;
}
var timerId = setInterval(congratulations, 1000);

const congratulations1 = function() {
  alert("Вы победили в конкурсе!");
  clearInterval(timerId);
}

setTimeout(congratulations1, 59000);

