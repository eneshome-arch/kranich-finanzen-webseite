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
    const setOpen = (open) => {
      hamburger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      hamburger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    };
    hamburger.addEventListener('click', () => setOpen(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
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

  // ── Contact form (Web3Forms) ──────────────
  const form = document.getElementById('kontaktForm');
  if (form) {
    const success = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    // Erfolg-Hinweis nach Web3Forms-Redirect (?ok=1)
    if (new URLSearchParams(location.search).get('ok') === '1' && success) {
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const setInvalid = (el, invalid) => {
      if (invalid) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    };

    form.addEventListener('submit', async (e) => {
      // Native Validierung
      let valid = true;
      form.querySelectorAll('[required]').forEach(el => {
        const empty = el.type === 'checkbox' ? !el.checked : !el.value.trim();
        const badEmail = el.type === 'email' && el.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
        const ok = !empty && !badEmail;
        setInvalid(el, !ok);
        if (!ok) valid = false;
      });
      if (!valid) {
        e.preventDefault();
        if (errorEl) {
          errorEl.textContent = '✗ Bitte füllen Sie die markierten Pflichtfelder korrekt aus.';
          errorEl.style.display = 'block';
        }
        const firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      // Wenn kein Web3Forms-Key gesetzt → fallback (kein echtes Senden)
      const accessKey = form.querySelector('[name="access_key"]')?.value;
      if (!accessKey || accessKey === 'DEIN_WEB3FORMS_ACCESS_KEY') {
        e.preventDefault();
        console.warn('[Web3Forms] Access-Key fehlt – Demo-Modus aktiv.');
        if (success) {
          success.style.display = 'block';
          form.reset();
          setTimeout(() => success.style.display = 'none', 6000);
        }
        return;
      }

      // Echter Submit per fetch (kein Page-Reload)
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = 'Wird gesendet...';
      btn.disabled = true;
      if (errorEl) errorEl.style.display = 'none';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.success !== false) {
          form.reset();
          if (success) {
            success.style.display = 'block';
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          throw new Error(data.message || 'Senden fehlgeschlagen');
        }
      } catch (err) {
        console.error(err);
        if (errorEl) {
          errorEl.textContent = '✗ Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.';
          errorEl.style.display = 'block';
        }
      } finally {
        btn.innerHTML = orig;
        btn.disabled = false;
      }
    });

    // aria-invalid bei Korrektur entfernen
    form.querySelectorAll('input,textarea,select').forEach(el => {
      el.addEventListener('input', () => setInvalid(el, false));
      el.addEventListener('change', () => setInvalid(el, false));
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

  // ── Benefits Carousel (mobile) ───────────
  const benefitsGrid = document.querySelector('.benefits-grid');
  if (benefitsGrid) {
    const wrap = document.createElement('div');
    wrap.className = 'benefits-carousel-wrap';
    benefitsGrid.parentNode.insertBefore(wrap, benefitsGrid);
    wrap.appendChild(benefitsGrid);

    const cards = Array.from(benefitsGrid.querySelectorAll('.benefit-card'));
    const total = cards.length;
    let current = 0;
    let autoTimer = null;
    let active = false;

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Vorteil ' + (i + 1));
      dot.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsWrap.appendChild(dot);
    });
    wrap.appendChild(dotsWrap);
    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    function goTo(idx) {
      current = ((idx % total) + total) % total;
      benefitsGrid.scrollTo({ left: current * benefitsGrid.offsetWidth, behavior: 'smooth' });
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goTo(current + 1), 3500);
    }

    // Dots per nativem Scroll synchron halten
    let raf;
    benefitsGrid.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.round(benefitsGrid.scrollLeft / benefitsGrid.offsetWidth);
        if (idx !== current) {
          current = idx;
          dots.forEach((d, i) => d.classList.toggle('active', i === current));
        }
      });
    }, { passive: true });

    benefitsGrid.addEventListener('touchstart', () => clearInterval(autoTimer), { passive: true });
    benefitsGrid.addEventListener('touchend', resetAuto, { passive: true });

    function initCarousel() {
      const mobile = window.innerWidth <= 768;
      if (mobile && !active) {
        active = true;
        benefitsGrid.scrollLeft = 0;
        current = 0;
        dots.forEach((d, i) => d.classList.toggle('active', i === 0));
        resetAuto();
      } else if (!mobile && active) {
        active = false;
        clearInterval(autoTimer);
      }
    }
    window.addEventListener('resize', initCarousel);
    initCarousel();
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
