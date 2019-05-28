const hole = document.getElementById("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

if (hole.classList.contains( 'hole_has-mole' )) {
    function getHole( index ) {
        for (let i = 0; i < 2; i++) {
        hole.onclick;
        }
        dead.textContent = dead.textContent + 1;
        dead = dead.textContent;
        return dead;
    }
} else {
    lost.textContent = lost.textContent + 1;
    lost = lost.textContentж
    return lost;
}

console.log("Убито " + dead);
console.log("Промахов " + lost);

if (lost === 5) {
    alert ("Вы проиграли");
} else if (dead === 10) {
    alert ("Победа!");
}
