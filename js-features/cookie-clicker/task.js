const cookie = document.getElementById ("cookie");
const clicker__counter = document.getElementById ("clicker__counter");
function changeCount() {
  clicker__counter.textContent ++;
  if (clicker__counter.textContent % 2 == 0) {
    cookie.width = 100;
  } else {
      cookie.width = 200;
  }
}
cookie.onclick = changeCount;

