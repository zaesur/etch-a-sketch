const dimension = 16;
const container = document.querySelector('#container');
//container.style.gridTemplateColumns = '16';
//container.style.gridTemplateRows = '16';
for (let step = 0; step < dimension**2; step++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  container.appendChild(pixel);
}
