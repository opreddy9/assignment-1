const button = document.getElementById("btn");
const body = document.body;

const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

button.addEventListener("click", changebackground);

function changebackground() {
  const colorsindexs = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorsindexs];
}
