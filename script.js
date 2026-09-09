// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('is-active', isOpen);
  });

  // Fecha o menu ao clicar em um link
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Header: leve encolhimento ao rolar (classe utilitária opcional) =====
const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (header) {
    header.style.boxShadow = current > 8 ? '0 8px 24px -18px rgba(23,38,31,.35)' : 'none';
  }
  lastScroll = current;
}, { passive: true });

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: mostra tudo direto
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===== Trilha de fundo acompanhando o progresso do scroll =====
const trilhaPath = document.getElementById('trilha-path');

if (trilhaPath) {
  const pathLength = trilhaPath.getTotalLength();
  trilhaPath.style.strokeDasharray = `${pathLength}`;
  trilhaPath.style.strokeDashoffset = `${pathLength}`;

  const updateTrilha = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    trilhaPath.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
  };

  window.addEventListener('scroll', updateTrilha, { passive: true });
  window.addEventListener('resize', updateTrilha);
  updateTrilha();
}
