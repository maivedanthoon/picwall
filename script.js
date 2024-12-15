// script.js
const collage = document.getElementById('photo-collage');

// Initial settings
let scale = 1; // Zoom level
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

// Zoom functionality
collage.addEventListener('wheel', (e) => {
  e.preventDefault();
  const scaleAmount = 0.1;
  if (e.deltaY < 0) {
    scale = Math.min(scale + scaleAmount, 3); // Max zoom level = 3x
  } else {
    scale = Math.max(scale - scaleAmount, 1); // Min zoom level = 1x
  }
  collage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
});

// Pan functionality
collage.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - translateX;
  startY = e.clientY - translateY;
  collage.style.cursor = 'grabbing';
});

collage.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  translateX = e.clientX - startX;
  translateY = e.clientY - startY;
  collage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
});

collage.addEventListener('mouseup', () => {
  isDragging = false;
  collage.style.cursor = 'grab';
});

collage.addEventListener('mouseleave', () => {
  isDragging = false;
  collage.style.cursor = 'grab';
});
