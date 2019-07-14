 function getHole( index ) {
  return document.getElementByClassName(hole[index]);
}

for (i= 0; i < 9; i ++) {
  hole.onclick = function findMole() {
   if (hole.className.includes("hole_has-mole") == true) {
    dead.textContent ++;
  } else {
        lost.textContent ++;
    }
   
  if (dead.textContent == 10) {
    alert("Победа!");
    dead.textContent = 0;
    lost.textContent = 0;
    } else if ( lost.textContent == 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
}
