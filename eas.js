const container = document.querySelector('#container');
let dimension = 16;

document.querySelector('#size').addEventListener('click', e => {
  const newDimension = parseInt(prompt("Please enter a grid size", dimension.toString()));
  if (newDimension === dimension || !newDimension) return;
  dimension = newDimension;
  updateGrid();
});

function makePixels(dimension) {
  container.style.setProperty('grid-template', `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`)
  for (let step = 0; step < dimension ** 2; step++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', e => {
      const opacity = getComputedStyle(e.target).getPropertyValue('opacity');
      e.target.style.setProperty('opacity', `${Math.min(parseFloat(opacity) + 0.1, 1)}`);
    })
    container.appendChild(pixel);
  }
}

function clearPixels() {
  const pixels = container.querySelectorAll('.pixel');
  pixels.forEach(pixel => container.removeChild(pixel));
}

function updateGrid() {
  clearPixels();
  makePixels(dimension);
}

makePixels(dimension);
