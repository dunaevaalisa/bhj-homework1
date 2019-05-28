const clicker__counter = document.getElementById("clicker__counter");
console.log("Всего касаний" + clicker__counter.textContent); 
const image = document.getElementById("cookie");
function changeSizes() {
  image.width = 200;
  image.height = 200;
};
image.onclick = changeSizes;
