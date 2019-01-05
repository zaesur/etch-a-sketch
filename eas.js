const dimension = 16;
const container = document.querySelector('#container');
container.style.setProperty('grid-template-rows', `repeat(${dimension}, 10px`);
container.style.setProperty('grid-template-columns', `repeat(${dimension}, 10px`);
for (let step = 0; step < dimension ** 2; step++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  container.appendChild(pixel);
}
pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', e => e.target.style.backgroundColor = "black"));
