import { grid } from './game.js';

grid.init();

// Touch support for mobile devices
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const minSwipeDistance = 30; // Minimum distance for a swipe to be registered

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  let direction = null;

  // Check if swipe distance is significant enough
  if (
    Math.abs(deltaX) < minSwipeDistance &&
    Math.abs(deltaY) < minSwipeDistance
  ) {
    return;
  }

  // Determine direction based on which axis has greater movement
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    direction = deltaX > 0 ? 'RIGHT' : 'LEFT';
  } else {
    // Vertical swipe
    direction = deltaY > 0 ? 'DOWN' : 'UP';
  }

  if (direction !== null && grid.playable && !grid.gameOver && !grid.gameWon) {
    grid.slide(direction);
  }
}

// Event listeners for keyboard
document.addEventListener('keydown', ({ key }) => {
  let direction = null;

  if (key === 'ArrowUp') {
    direction = 'UP';
  } else if (key === 'ArrowRight') {
    direction = 'RIGHT';
  } else if (key === 'ArrowDown') {
    direction = 'DOWN';
  } else if (key === 'ArrowLeft') {
    direction = 'LEFT';
  }

  if (direction !== null && grid.playable && !grid.gameOver && !grid.gameWon) {
    grid.slide(direction);
  }

  return false;
});

const reset_btn = document.getElementById('restart-btn');
reset_btn.addEventListener('click', () => grid.restart());

const reset_btn_2 = document.getElementById('restart-btn-2');
reset_btn_2.addEventListener('click', () => grid.restart());

const reset_btn_3 = document.getElementById('restart-btn-3');
reset_btn_3.addEventListener('click', () => grid.restart());
