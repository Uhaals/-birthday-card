function releaseBalloons() {
  const balloonContainer = document.getElementById('balloon-container');

  for (let i = 0; i < 50; i++) { // 50 balloons!
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Random colors
    balloon.style.backgroundColor = getRandomColor();
    
    // Random horizontal position
    balloon.style.left = Math.random() * 100 + 'vw';
    
    // Random animation speed
    balloon.style.animationDuration = (4 + Math.random() * 3) + 's';
    
    balloonContainer.appendChild(balloon);
    
    // Remove balloon after animation
    balloon.addEventListener('animationend', () => {
      balloon.remove();
    });
  }
}

function getRandomColor() {
  const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}
