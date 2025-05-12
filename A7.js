const star = document.getElementById('star');
const button = document.getElementById('trigger-btn');

const isBouncing = localStorage.getItem('isBouncing') === 'true';

if (isBouncing) {
  star.classList.add('bouncing');
}

button.addEventListener('click', () => {
  const currentlyBouncing = star.classList.toggle('bouncing');
  localStorage.setItem('isBouncing', currentlyBouncing);
});
