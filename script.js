const container = document.querySelector(".container");
const url = "https://source.unsplash.com/random/";

const rows = 20;

for (let i = 0; i < rows * 4; i++) {
  const img = document.createElement("img");
  img.src = `${url}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 50 + 300);
}
