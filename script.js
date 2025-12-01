// Theme toggle with saved preference, nav toggle, intersection observer for animations and year population
document.addEventListener('DOMContentLoaded', ()=> {
  // year fill
  const years = ['year','year2','year3','year4','year5','year6','year7','year8'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // theme
  const getPreferredTheme = () => localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    // set toggles
    document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4, #theme-toggle-5, #theme-toggle-6, #theme-toggle-7, #theme-toggle-8').forEach(cb => {
      if(cb) cb.checked = theme === 'dark';
    });
  };

  applyTheme(getPreferredTheme());

  document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4, #theme-toggle-5, #theme-toggle-6, #theme-toggle-7, #theme-toggle-8').forEach(cb => {
    if(!cb) return;
    cb.addEventListener('change', (e) => {
      const theme = e.target.checked ? 'dark' : 'light';
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    });
  });

  // nav toggle for mobile
  const navToggle = document.querySelectorAll('.nav-toggle');
  navToggle.forEach(btn => {
    btn.addEventListener('click', ()=> {
      const navLinks = btn.parentElement.querySelector('.nav-links');
      if(navLinks.style.display === 'flex') {
        navLinks.style.display = '';
      } else {
        navLinks.style.display = 'flex';
      }
    });
  });

  // click outside to hide mobile nav
  document.addEventListener('click', (e)=> {
    const openNav = document.querySelector('.nav-links[style]');
    if(openNav && !openNav.contains(e.target) && !e.target.matches('.nav-toggle, .nav-toggle *')) {
      openNav.style.display = '';
    }
  });

  // Intersection Observer for animations
  const obs = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.animate').forEach(el => obs.observe(el));

});
