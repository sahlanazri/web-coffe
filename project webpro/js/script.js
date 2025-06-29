// Toggle class 'active' pada navbar
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menutup navbar
document.addEventListener('click', function (e) {
  const hamburger = document.querySelector('#hamburger-menu');
  
  // Jika yang diklik bukan navbar-nav dan bukan hamburger menu
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
