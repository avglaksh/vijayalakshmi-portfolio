// DARK MODE TOGGLE
const toggles = document.querySelectorAll('input[type="checkbox"]');
toggles.forEach(t => {
  t.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggles.forEach(t => t.checked = true);
}

// MOBILE NAV MENU
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Animation on scroll
const animatedItems = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
animatedItems.forEach(item => observer.observe(item));

// Footer year
document.querySelectorAll("#year, #year2, #year3, #year4, #year5, #year6, #year7, #year8")
  .forEach(y => y.textContent = new Date().getFullYear());
