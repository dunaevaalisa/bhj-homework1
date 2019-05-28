const hole = document.getElementById("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

if (hole.classList.contains( 'hole_has-mole' )) {
  hole.onclick;
  dead.textContent = dead.textContent + 1;
} else {
    lost.textContent = lost.textContent + 1;
}

console.log("Убито " + dead.textContent);
console.log("Промахов " + lost.textContent);

if (lost === 5) {
    alert ("Вы проиграли");
} else if (dead === 10) {
    alert ("Победа!");
}
