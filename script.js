let colors = [
  "pink",
  "purple",
  "blue",
  "orange",
  "brown",
  "teal",
  "red",
  "black",
  "#skyblue",
  "#darkblue",
  "crimson",
  "darkcyan",
  "palevioletred ",
  "seagreen",
  "olivedrab",
]





function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function ChangingColour() {
  const button = document.getElementById("diff-color");
  const heading = document.getElementById("heading");
  heading.style.color = getRandomColor()
  button.style.backgroundColor = getRandomColor();
  document.body.style.backgroundColor = getRandomColor();
}
