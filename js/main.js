document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect ──────────────────
  const header = document.getElementById('header');
  if (header) {
    const heroEl = document.querySelector('.hero, .page-hero');
    window.addEventListener('scroll', () => {
      const pastDark = heroEl
        ? heroEl.getBoundingClientRect().bottom <= header.offsetHeight
        : window.scrollY > 50;
      header.classList.toggle('scrolled', pastDark);
    }, { passive: true });
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

  // ── Leistungen Carousel (mobile) ─────────
  const leistungenGrid = document.querySelector('.leistungen-grid');
  if (leistungenGrid) {
    const lWrap = document.createElement('div');
    lWrap.className = 'leistungen-carousel-wrap';
    leistungenGrid.parentNode.insertBefore(lWrap, leistungenGrid);
    lWrap.appendChild(leistungenGrid);

    const lCards = Array.from(leistungenGrid.querySelectorAll('.leistung-card'));
    const lTotal = lCards.length;
    let lCurrent = 0;
    let lActive = false;

    const lDotsWrap = document.createElement('div');
    lDotsWrap.className = 'carousel-dots';
    lCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Leistung ' + (i + 1));
      dot.addEventListener('click', () => lGoTo(i));
      lDotsWrap.appendChild(dot);
    });
    lWrap.appendChild(lDotsWrap);
    const lDots = Array.from(lDotsWrap.querySelectorAll('.carousel-dot'));

    function lGoTo(idx) {
      lCurrent = ((idx % lTotal) + lTotal) % lTotal;
      leistungenGrid.scrollTo({ left: lCurrent * leistungenGrid.offsetWidth, behavior: 'smooth' });
      lDots.forEach((d, i) => d.classList.toggle('active', i === lCurrent));
    }

    let lRaf;
    leistungenGrid.addEventListener('scroll', () => {
      cancelAnimationFrame(lRaf);
      lRaf = requestAnimationFrame(() => {
        const idx = Math.round(leistungenGrid.scrollLeft / leistungenGrid.offsetWidth);
        if (idx !== lCurrent) {
          lCurrent = idx;
          lDots.forEach((d, i) => d.classList.toggle('active', i === lCurrent));
        }
      });
    }, { passive: true });

    function initLeistungen() {
      const mobile = window.innerWidth <= 768;
      if (mobile && !lActive) {
        lActive = true;
        leistungenGrid.scrollLeft = 0;
        lCurrent = 0;
        lDots.forEach((d, i) => d.classList.toggle('active', i === 0));
      } else if (!mobile && lActive) {
        lActive = false;
      }
    }
    window.addEventListener('resize', initLeistungen);
    initLeistungen();
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
    let active = false;

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Vorteil ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    wrap.appendChild(dotsWrap);
    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    function goTo(idx) {
      current = ((idx % total) + total) % total;
      benefitsGrid.scrollTo({ left: current * benefitsGrid.offsetWidth, behavior: 'smooth' });
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
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

    function initCarousel() {
      const mobile = window.innerWidth <= 768;
      if (mobile && !active) {
        active = true;
        benefitsGrid.scrollLeft = 0;
        current = 0;
        dots.forEach((d, i) => d.classList.toggle('active', i === 0));
      } else if (!mobile && active) {
        active = false;
      }
    }
    window.addEventListener('resize', initCarousel);
    initCarousel();
  }

  // ── Values Carousel (mobile) ─────────────
  const valuesGrid = document.querySelector('.values-grid');
  if (valuesGrid) {
    const vWrap = document.createElement('div');
    vWrap.className = 'values-carousel-wrap';
    valuesGrid.parentNode.insertBefore(vWrap, valuesGrid);
    vWrap.appendChild(valuesGrid);

    const vCards = Array.from(valuesGrid.querySelectorAll('.value-card'));
    const vTotal = vCards.length;
    let vCurrent = 0;
    let vActive = false;

    const vDotsWrap = document.createElement('div');
    vDotsWrap.className = 'carousel-dots';
    vCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Wert ' + (i + 1));
      dot.addEventListener('click', () => vGoTo(i));
      vDotsWrap.appendChild(dot);
    });
    vWrap.appendChild(vDotsWrap);
    const vDots = Array.from(vDotsWrap.querySelectorAll('.carousel-dot'));

    function vGoTo(idx) {
      vCurrent = ((idx % vTotal) + vTotal) % vTotal;
      valuesGrid.scrollTo({ left: vCurrent * valuesGrid.offsetWidth, behavior: 'smooth' });
      vDots.forEach((d, i) => d.classList.toggle('active', i === vCurrent));
    }

    let vRaf;
    valuesGrid.addEventListener('scroll', () => {
      cancelAnimationFrame(vRaf);
      vRaf = requestAnimationFrame(() => {
        const idx = Math.round(valuesGrid.scrollLeft / valuesGrid.offsetWidth);
        if (idx !== vCurrent) {
          vCurrent = idx;
          vDots.forEach((d, i) => d.classList.toggle('active', i === vCurrent));
        }
      });
    }, { passive: true });

    function initValues() {
      const mobile = window.innerWidth <= 768;
      if (mobile && !vActive) {
        vActive = true;
        valuesGrid.scrollLeft = 0;
        vCurrent = 0;
        vDots.forEach((d, i) => d.classList.toggle('active', i === 0));
      } else if (!mobile && vActive) {
        vActive = false;
      }
    }
    window.addEventListener('resize', initValues);
    initValues();
  }

  // ── Timeline 3D Carousel ─────────────────
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    timeline.classList.add('timeline-animated');

    const track = document.createElement('div');
    track.className = 'timeline-track';
    Array.from(timeline.children).forEach(child => track.appendChild(child));
    timeline.appendChild(track);

    const tlItems = Array.from(track.querySelectorAll('.timeline-item'));
    const n = tlItems.length;
    let tlStep = 0;

    function tlShow(idx) {
      const r = Math.min(180, Math.max(80, timeline.offsetWidth / 3.8));
      const P = r * 3.5;

      tlItems.forEach((it, i) => {
        let off = i - idx;
        if (off > n / 2) off -= n;
        if (off < -n / 2) off += n;

        const theta = (2 * Math.PI * off) / n;
        const z = r * Math.cos(theta);
        const x3d = r * Math.sin(theta);
        const scale = P / (P + r - z);
        const xScreen = Math.round(x3d * scale);

        const isActive = off === 0;
        const opacity = isActive ? 1 : Math.max(0.18, scale * 0.75);

        it.style.transform = `translateX(calc(-50% + ${xScreen}px)) scale(${scale.toFixed(3)})`;
        it.style.opacity = opacity.toFixed(2);
        it.style.zIndex = isActive ? '10' : String(Math.round(z + r + 1));
        it.classList.toggle('tl-show', isActive);
      });
    }

    tlShow(0);
    setInterval(() => { tlStep = (tlStep + 1) % n; tlShow(tlStep); }, 3500);
    window.addEventListener('resize', () => tlShow(tlStep));
  }

  // ── Team 3D Carousel ─────────────────────
  const teamGrid = document.querySelector('.team-grid');
  if (teamGrid) {
    teamGrid.classList.add('team-3d');

    const tcTrack = document.createElement('div');
    tcTrack.className = 'team-3d-track';
    Array.from(teamGrid.children).forEach(child => tcTrack.appendChild(child));
    teamGrid.appendChild(tcTrack);

    const tcItems = Array.from(tcTrack.querySelectorAll('.team-card'));
    const tcN = tcItems.length;
    let tcStep = 0;

    function tcShow(idx) {
      const r = Math.min(220, Math.max(100, teamGrid.offsetWidth / 3.2));
      const P = r * 3.5;

      tcItems.forEach((it, i) => {
        let off = i - idx;
        if (off > tcN / 2) off -= tcN;
        if (off < -tcN / 2) off += tcN;

        const theta = (2 * Math.PI * off) / tcN;
        const z = r * Math.cos(theta);
        const x3d = r * Math.sin(theta);
        const scale = P / (P + r - z);
        const xScreen = Math.round(x3d * scale);

        const isActive = off === 0;
        const opacity = isActive ? 1 : Math.max(0.2, scale * 0.7);

        it.style.transform = `translateX(calc(-50% + ${xScreen}px)) scale(${scale.toFixed(3)})`;
        it.style.opacity = opacity.toFixed(2);
        it.style.zIndex = isActive ? '10' : String(Math.round(z + r + 1));
        it.classList.toggle('tc-show', isActive);
      });
    }

    tcItems.forEach((it, i) => {
      it.addEventListener('click', () => { tcStep = i; tcShow(i); });
    });

    tcShow(0);
    setInterval(() => { tcStep = (tcStep + 1) % tcN; tcShow(tcStep); }, 3500);
    window.addEventListener('resize', () => tcShow(tcStep));
  }

  // ── Trust Bar Animation ───────────────────
  const trustInner = document.querySelector('.trust-bar-inner');
  if (trustInner) {
    const trItems = Array.from(trustInner.querySelectorAll('.trust-item'));
    let trStep = 0;

    function trShow(idx) {
      trItems.forEach((it, i) => it.classList.toggle('tr-show', i === idx));
      setTimeout(() => {
        trItems[idx].classList.remove('tr-show');
        setTimeout(() => {
          trStep = (idx + 1) % trItems.length;
          trShow(trStep);
        }, 500);
      }, 3000);
    }

    trustInner.classList.add('trust-animated');
    setTimeout(() => trShow(0), 80);
  }

  // ── Counter animation ─────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const cObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2200;
        const startTime = performance.now();
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        const tick = now => {
          const progress = Math.min((now - startTime) / duration, 1);
          el.textContent = Math.round(easeOut(progress) * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObserver.observe(c));

});
