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

  document.querySelectorAll('.leistung-card, .katalog-item, .value-card, .galerie-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });


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
  if (teamGrid && !teamGrid.classList.contains('team-grid--duo')) {
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
        it.style.zIndex = isActive ? '10' : String(Math.max(1, Math.round(scale * 9)));
        it.classList.toggle('tc-show', isActive);
      });
    }

    tcItems.forEach((it, i) => {
      it.addEventListener('click', () => { tcStep = i; tcShow(i); });
    });

    requestAnimationFrame(() => {
      tcShow(0);
      setInterval(() => { tcStep = (tcStep + 1) % tcN; tcShow(tcStep); }, 3500);
    });
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


// ── Anfrage Modal ──────────────────────────
(function () {
  const modal    = document.getElementById('anfrageModal');
  const backdrop = document.getElementById('anfrageModalBackdrop');
  const closeBtn = document.getElementById('anfrageModalClose');
  const form     = document.getElementById('anfrageForm');
  const prodInput= document.getElementById('anfrageProdukt');
  const catEl    = document.getElementById('anfrageModalCat');
  const titleEl  = document.getElementById('anfrageModalTitle');
  const errorEl  = document.getElementById('anfrageError');
  const successEl= document.getElementById('anfrageSuccess');
  const successClose = document.getElementById('anfrageSuccessClose');
  const preview  = document.getElementById('anfragePreview');
  const previewImg    = document.getElementById('anfragePreviewImg');
  const previewCat    = document.getElementById('anfragePreviewCat');
  const previewName   = document.getElementById('anfragePreviewName');
  const previewTagline= document.getElementById('anfragePreviewTagline');

  if (!modal) return;

  function openModal(productId) {
    const product = (typeof PRODUCTS !== 'undefined')
      ? PRODUCTS.find(p => p.id === productId)
      : null;

    if (product) {
      prodInput.value = product.name;
      if (catEl) catEl.textContent = product.category;
      if (titleEl) titleEl.textContent = 'Anfrage stellen';

      // Produkt-Preview befüllen
      if (preview) {
        if (product.image && previewImg) {
          previewImg.src = product.image;
          previewImg.alt = product.name;
          previewImg.className = 'anfrage-produkt-img' + (product.imageContain ? ' img-contain' : '');
        }
        if (previewCat)    previewCat.textContent    = product.category;
        if (previewName)   previewName.textContent   = product.name;
        if (previewTagline) previewTagline.textContent = product.tagline || '';
        preview.style.display = '';
      }
    } else {
      prodInput.value = productId || '';
      if (catEl) catEl.textContent = '';
      if (titleEl) titleEl.textContent = 'Anfrage stellen';
      if (preview) preview.style.display = 'none';
    }

    // Reset
    form.style.display = '';
    successEl.style.display = 'none';
    if (errorEl) errorEl.style.display = 'none';
    form.reset();
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus first input
    setTimeout(() => {
      const first = modal.querySelector('input:not([type=hidden])');
      if (first) first.focus();
    }, 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Trigger buttons on the page
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-product-id], .shop-btn-anfrage, #pdpAnfrageBtn');
    if (!btn) return;

    let id = btn.dataset.productId;
    if (!id && btn.id === 'pdpAnfrageBtn') {
      // On product page: get id from URL
      id = new URLSearchParams(location.search).get('id') || '';
    }
    openModal(id);
  });

  // Close
  if (closeBtn)   closeBtn.addEventListener('click', closeModal);
  if (backdrop)   backdrop.addEventListener('click', closeModal);
  if (successClose) successClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Submit
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      form.querySelectorAll('[required]').forEach(el => {
        if (!el.value.trim()) {
          el.setAttribute('aria-invalid', 'true');
          valid = false;
        } else {
          el.removeAttribute('aria-invalid');
        }
      });

      if (!valid) {
        if (errorEl) {
          errorEl.textContent = 'Bitte füllen Sie die Pflichtfelder aus.';
          errorEl.style.display = 'block';
        }
        form.querySelector('[aria-invalid]')?.focus();
        return;
      }

      if (errorEl) errorEl.style.display = 'none';

      // Sende-Button deaktivieren während des Versands
      const submitBtn = form.querySelector('[type=submit]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Wird gesendet …'; }

      const data = {
        access_key: 'DEIN_WEB3FORMS_KEY', // ← hier deinen Key eintragen
        subject: 'Neue Anfrage: ' + (prodInput.value || 'Allgemein'),
        from_name: 'Özdemir Fensterbau – Anfrage',
        produkt: prodInput.value || '–',
        name:     form.querySelector('[name=name]')?.value || '–',
        kontakt:  form.querySelector('[name=kontakt]')?.value || '–',
        breite:   form.querySelector('[name=breite]')?.value || '–',
        hoehe:    form.querySelector('[name=hoehe]')?.value || '–',
        anzahl:   form.querySelector('[name=anzahl]')?.value || '–',
        nachricht:form.querySelector('[name=nachricht]')?.value || '–',
      };

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            form.style.display = 'none';
            successEl.style.display = 'block';
          } else {
            if (errorEl) {
              errorEl.textContent = 'Fehler beim Senden. Bitte versuchen Sie es erneut.';
              errorEl.style.display = 'block';
            }
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Anfrage absenden'; }
          }
        })
        .catch(() => {
          if (errorEl) {
            errorEl.textContent = 'Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung.';
            errorEl.style.display = 'block';
          }
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Anfrage absenden'; }
        });
    });

    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => el.removeAttribute('aria-invalid'));
    });
  }
})();


// ── Produkt Detail Page (produkt.html) ────
(function () {
  if (!document.getElementById('pdpName')) return;
  if (typeof PRODUCTS === 'undefined') return;

  const id = new URLSearchParams(location.search).get('id');
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.getElementById('pdpName').textContent = 'Produkt nicht gefunden';
    return;
  }

  // <title> & meta
  document.title = product.name + ' – Özdemir Fensterbau';
  const metaDesc = document.getElementById('pdpDesc');
  if (metaDesc) metaDesc.content = product.tagline + ' – ' + product.shortDesc;

  // Breadcrumb
  document.getElementById('pdpBreadcrumbName').textContent = product.name;

  // Main image
  const mainImg = document.getElementById('pdpMainImg');
  mainImg.src = product.image;
  mainImg.alt = product.name;
  mainImg.style.display = '';
  if (product.imageContain) mainImg.classList.add('img-contain');

  // Badge
  const badgeEl = document.getElementById('pdpBadge');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.style.display = '';
  }

  // Thumbnails (just repeat the main image for now)
  const thumbsEl = document.getElementById('pdpThumbs');
  const thumbImages = product.gallery || [product.image];
  thumbImages.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'pdp-thumb' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = src;
    img.alt = product.name + ' – Ansicht ' + (i + 1);
    img.loading = 'lazy';
    div.appendChild(img);
    div.addEventListener('click', () => {
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = '1';
      }, 150);
      thumbsEl.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      div.classList.add('active');
    });
    thumbsEl.appendChild(div);
  });

  // Category & name
  document.getElementById('pdpCategory').textContent = product.category;
  document.getElementById('pdpName').textContent = product.name;
  document.getElementById('pdpTagline').textContent = product.tagline;

  // Spec pills (first 5 specs)
  const pillsEl = document.getElementById('pdpSpecPills');
  (product.specs || []).slice(0, 5).forEach(s => {
    const span = document.createElement('span');
    span.className = 'pdp-spec-pill';
    span.textContent = s.label + ': ' + s.value;
    pillsEl.appendChild(span);
  });

  // Badges / Zertifikate
  const badgesEl = document.getElementById('pdpBadges');
  if (badgesEl && product.badges && product.badges.length) {
    product.badges.forEach(b => {
      const div = document.createElement('div');
      div.className = 'pdp-emblem pdp-emblem--' + b.type;
      if (b.type === 'german-market') {
        div.innerHTML =
          '<div class="pdp-emblem-flag">' +
            '<span class="pdp-flag-black"></span>' +
            '<span class="pdp-flag-red"></span>' +
            '<span class="pdp-flag-gold"></span>' +
          '</div>' +
          '<span class="pdp-emblem-label">' + b.label + '</span>';
      } else if (b.type === 'passivhaus') {
        div.innerHTML =
          '<div class="pdp-emblem-icon pdp-emblem-icon--passivhaus">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
          '</div>' +
          '<span class="pdp-emblem-label">' + b.label + '</span>';
      } else if (b.type === 'rc2') {
        div.innerHTML =
          '<div class="pdp-emblem-icon pdp-emblem-icon--rc2">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' +
            '<span class="pdp-emblem-icon-text">RC2</span>' +
          '</div>' +
          '<span class="pdp-emblem-label">' + b.label + '</span>';
      } else if (b.type === 'ce') {
        div.innerHTML =
          '<div class="pdp-emblem-icon pdp-emblem-icon--ce">' +
            '<span class="pdp-emblem-icon-text pdp-emblem-icon-text--ce">CE</span>' +
          '</div>' +
          '<span class="pdp-emblem-label">' + b.label + '</span>';
      } else if (b.type === 'ift') {
        div.innerHTML =
          '<div class="pdp-emblem-icon pdp-emblem-icon--ift">' +
            '<span class="pdp-emblem-icon-text pdp-emblem-icon-text--ift">ift</span>' +
          '</div>' +
          '<span class="pdp-emblem-label">' + b.label + '</span>';
      }
      badgesEl.appendChild(div);
    });
  }

  // Variants
  const variantsWrap = document.getElementById('pdpVariantsWrap');
  const variantsEl = document.getElementById('pdpVariants');
  if (variantsWrap && variantsEl && product.variants && product.variants.length) {
    product.variants.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.className = 'pdp-variant-btn' + (i === 0 ? ' active' : '');
      btn.title = v.name;
      btn.type = 'button';
      btn.innerHTML =
        '<span class="pdp-variant-swatch" style="background:' + v.color + ';border-color:' + v.border + ';"></span>' +
        '<span class="pdp-variant-name">' + v.name + '</span>';
      btn.addEventListener('click', () => {
        variantsEl.querySelectorAll('.pdp-variant-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (v.image) {
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src = v.image;
            mainImg.style.opacity = '1';
          }, 150);
          thumbsEl.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
        }
      });
      variantsEl.appendChild(btn);
    });
    variantsWrap.style.display = '';
  }

  // Description
  const descEl = document.getElementById('pdpDescription');
  descEl.textContent = product.description;

  // Features list
  const featEl = document.getElementById('pdpFeatures');
  (product.features || []).forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featEl.appendChild(li);
  });

  // Specs table
  const tbody = document.querySelector('#pdpSpecsTable tbody');
  (product.specs || []).forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>' + s.label + '</td><td>' + s.value + '</td>';
    tbody.appendChild(tr);
  });

  // Specs footnote
  const specsNoteEl = document.getElementById('pdpSpecsNote');
  if (specsNoteEl && product.specsNote) {
    specsNoteEl.textContent = product.specsNote;
    specsNoteEl.style.display = '';
  }

  // Related products (same category, max 3)
  const relatedEl = document.getElementById('pdpRelated');
  const related = PRODUCTS
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  if (related.length < 3) {
    // Fill up from other categories
    const others = PRODUCTS
      .filter(p => p.id !== product.id && p.category !== product.category)
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  related.forEach(p => {
    const art = document.createElement('article');
    art.className = 'shop-card';
    art.innerHTML = `
      <a href="produkt/?id=${p.id}" class="shop-card-img-wrap">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" class="shop-card-img${p.imageContain ? ' img-contain' : ''}">` : ''}
        ${p.badge ? `<span class="shop-card-badge">${p.badge}</span>` : ''}
      </a>
      <div class="shop-card-body">
        <span class="shop-card-cat">${p.category}</span>
        <h2 class="shop-card-name"><a href="produkt/?id=${p.id}">${p.name}</a></h2>
        <p class="shop-card-tagline">${p.tagline}</p>
        <div class="shop-card-actions">
          <a href="produkt/?id=${p.id}" class="btn btn-ghost shop-btn-detail">Details ansehen</a>
          <button class="btn btn-blue shop-btn-anfrage" data-product-id="${p.id}">Anfragen</button>
        </div>
      </div>`;
    relatedEl.appendChild(art);
  });
})();


// ── Hero Browser Preview: scroll to products ──
(function () {
  const iframe = document.querySelector('.hb-screen iframe');
  if (!iframe) return;
  iframe.addEventListener('load', function () {
    try {
      const doc = this.contentDocument || this.contentWindow.document;
      const grid = doc.getElementById('shopGrid');
      if (grid) {
        doc.documentElement.scrollTop = grid.offsetTop - 24;
        doc.body.scrollTop = grid.offsetTop - 24;
      }
    } catch (e) {}
  });
})();

// ── Hero Trust Animation ──────────────────────
(function () {
  const items = document.querySelectorAll('.hero-trust-item');
  if (!items.length) return;
  let current = 0;
  items[0].classList.add('ht-active');
  setInterval(function () {
    items[current].classList.remove('ht-active');
    current = (current + 1) % items.length;
    items[current].classList.add('ht-active');
  }, 2500);
})();

// ── Möglichkeiten Karussell Dots ─────────────
(function () {
  const grid = document.getElementById('moegGrid');
  const dots = document.querySelectorAll('.moeg-dot');
  if (!grid || !dots.length) return;

  function updateDots() {
    const cards = grid.querySelectorAll('.moeg-card');
    if (!cards.length) return;
    const cardW = cards[0].offsetWidth + 16; // width + gap
    const idx = Math.min(Math.round(grid.scrollLeft / cardW), dots.length - 1);
    dots.forEach((d, i) => d.classList.toggle('moeg-dot--active', i === idx));
  }

  grid.addEventListener('scroll', updateDots, { passive: true });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const cards = grid.querySelectorAll('.moeg-card');
      if (!cards.length) return;
      const cardW = cards[0].offsetWidth + 16;
      grid.scrollTo({ left: i * cardW, behavior: 'smooth' });
    });
  });
})();
