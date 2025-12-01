// Run when DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  /* =============================
     Year in footer
     ============================= */
  const yearSpans = document.querySelectorAll(
    "#year, #year2, #year3, #year4, #year5, #year6, #year7, #year8"
  );
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(el => {
    if (el) el.textContent = currentYear;
  });

  /* =============================
     Dark mode
     ============================= */
  const themeToggles = document.querySelectorAll('input[id^="theme-toggle"]');

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggles.forEach(t => (t.checked = true));
  }

  themeToggles.forEach(toggle => {
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      if (isDark) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      // keep all switches in sync
      themeToggles.forEach(t => (t.checked = isDark));
    });
  });

  /* =============================
     Mobile nav toggle
     ============================= */
  const navToggles = document.querySelectorAll(".nav-toggle");
  navToggles.forEach(btn => {
    const navLinks = btn.parentElement.querySelector(".nav-links");
    btn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  });

  // Close nav when clicking a link (mobile)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const wrapper = link.closest(".nav-links");
      if (wrapper && wrapper.classList.contains("open")) {
        wrapper.classList.remove("open");
      }
    });
  });

  /* =============================
     Scroll animations
     ============================= */
  const animated = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animated.forEach(el => observer.observe(el));
});
