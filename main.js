const car = document.querySelector('.car');

// Fixed track center & radius for GitHub Pages
const radius = 140;
const centerX = 150; // half of track width
const centerY = 150; // half of track height

let angle = 0;

function animateCar() {
  angle += 1;
  if (angle >= 360) angle = 0;

  const rad = angle * (Math.PI / 180);
  const x = centerX + radius * Math.cos(rad) - car.offsetWidth / 2;
  const y = centerY + radius * Math.sin(rad) - car.offsetHeight / 2;

  car.style.left = x + 'px';
  car.style.top = y + 'px';

  requestAnimationFrame(animateCar);
}

animateCar();
