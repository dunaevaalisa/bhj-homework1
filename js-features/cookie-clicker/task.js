const cookie = document.getElementById ("cookie");
const clicker__counter = document.getElementById ("clicker__counter");
function changeCount() {
  clicker__counter.textContent ++;
  cookie.width = 100;
}
cookie.onclick = changeCount;
