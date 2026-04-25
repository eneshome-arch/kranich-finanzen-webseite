document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect ──────────────────
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── Mobile menu ───────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── Active nav link ───────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Scroll to top ─────────────────────────
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Katalog filter ────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const katalogItems = document.querySelectorAll('.katalog-item[data-cat]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        katalogItems.forEach(item => {
          if (cat === 'all' || item.dataset.cat === cat) {
            item.style.display = '';
            item.style.animation = 'fadeIn 0.3s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Lightbox ──────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (lightbox && lightboxImg) {
    document.querySelectorAll('.galerie-item[data-src]').forEach(item => {
      item.addEventListener('click', () => {
        lightboxImg.src = item.dataset.src;
        lightboxImg.alt = item.dataset.label || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ── Contact form ──────────────────────────
  const form = document.getElementById('kontaktForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = 'Wird gesendet...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        form.reset();
        const success = document.getElementById('formSuccess');
        if (success) {
          success.style.display = 'block';
          setTimeout(() => success.style.display = 'none', 5000);
        }
      }, 1400);
    });
  }

  // ── Fade-in on scroll ─────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.leistung-card, .katalog-item, .value-card, .team-card, .galerie-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ── ROI Rechner ───────────────────────────
  const inpFenster = document.getElementById('inp-fenster');
  if (inpFenster) {
    const inpFlaeche = document.getElementById('inp-flaeche');
    const inpKosten  = document.getElementById('inp-kosten');
    const inpTyp     = document.getElementById('inp-typ');

    const calcROI = () => {
      const fenster = parseInt(inpFenster.value);
      const kosten  = parseInt(inpKosten.value);
      const saving  = parseFloat(inpTyp.value);

      document.getElementById('val-fenster').textContent = fenster;
      document.getElementById('val-flaeche').textContent = parseInt(inpFlaeche.value).toLocaleString('de-DE') + ' m²';
      document.getElementById('val-kosten').textContent  = kosten.toLocaleString('de-DE') + ' €';

      const jaehrlich   = Math.round(kosten * saving);
      const co2         = ((kosten / 0.10) * 0.201 * saving / 1000).toFixed(1);
      const investition = fenster * 600;
      const amor        = jaehrlich > 0 ? Math.ceil(investition / jaehrlich) : '–';

      document.getElementById('res-jaehrlich').textContent = jaehrlich.toLocaleString('de-DE') + ' €';
      document.getElementById('res-10jahre').textContent   = (jaehrlich * 10).toLocaleString('de-DE') + ' €';
      document.getElementById('res-co2').textContent       = co2.replace('.', ',') + ' t';
      document.getElementById('res-amor').textContent      = 'ca. ' + amor + ' Jahre';
    };

    [inpFenster, inpFlaeche, inpKosten, inpTyp].forEach(el => el.addEventListener('input', calcROI));
    calcROI();
  }

  // ── Counter animation ─────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const cObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 50);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = current + suffix;
        }, 30);
        cObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObserver.observe(c));

});
