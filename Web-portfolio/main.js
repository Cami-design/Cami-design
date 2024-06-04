import './styles/modern-normalize.css';
import './styles/style.css';
import './styles/utils.css';


// Get the menu element
const menu = document.querySelector('.header__menu');

// Get the hamburger menu button
const hamburger = document.querySelector('.header__bars');

// Add event listener to hamburger button
hamburger.addEventListener('click', () => {
  // Toggle the menu open/closed state
  menu.classList.toggle('open');
});

// Add event listener to window resize
window.addEventListener('resize', () => {
  // Check if the screen width is below a certain threshold (e.g. 640px)
  if (window.innerWidth < 640) {
    // Move the menu to the right and transform it into a hamburger menu
    menu.classList.add('mobile');
  } else {
    // Remove the mobile class and restore the original menu layout
    menu.classList.remove('mobile');
  }
});

// Add event listener to document click
document.addEventListener('click', (e) => {
  // If the click is outside the menu, close it
  if (!menu.contains(e.target) &&!hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});
