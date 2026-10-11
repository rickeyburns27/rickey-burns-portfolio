/* Progressive enhancement: content cards, low-cost motion, navigation, accessibility. No dependencies. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_CONTENT;
  if (!data) return;
  const qs = (selector, from = document) => from.querySelector(selector);
  const qsa = (selector, from = document) => [...from.querySelectorAll(selector)];
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderMetrics() {
    const wrap = qs('#metrics-grid');
    data.metrics.forEach((m, index) => {
      const card = el('article', `metric-card ${m.accent}`);
      card.setAttribute('data-reveal', '');
      card.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * .08}s`);
      const top = el('div', 'metric-top');
      const roundIcon = el('div', 'metric-icon');
      roundIcon.innerHTML = icon(m.icon);
      top.append(roundIcon, el('span', 'metric-index', String(index + 1).padStart(2, '0')));
      const number = el('div', 'metric-number');
      number.setAttribute('aria-label', `${m.prefix || ''}${m.value.toLocaleString()}${m.suffix}`);
      if (m.prefix) number.append(el('span', 'metric-prefix', m.prefix));
      const digits = el('span', 'metric-digits', m.value.toLocaleString());
      digits.dataset.target = m.value;
      number.append(digits);
      if (m.suffix) number.append(el('span', 'metric-suffix', m.suffix));
      card.append(top, number, el('p', 'metric-label', m.label), el('p', 'metric-detail', m.detail));
      wrap.append(card);
    });
  }

  function renderCareer() {
    const wrap = qs('#career-timeline');
    data.career.forEach((stage, index) => {
      const item = el('div', 'timeline-item');
      item.setAttribute('data-reveal', '');
      item.style.setProperty('--reveal-delay', `${index * .07}s`);
      const num = el('span', 'timeline-number', String(index + 1));
      const card = el('div', 'timeline-card');
      const iconBox = el('div', 'timeline-card-icon');
      iconBox.innerHTML = icon(stage.icon);
      const text = el('div');
      text.append(el('div', 'timeline-stage', `STAGE ${stage.stage}`), el('h3', '', stage.title), el('p', '', stage.details));
      card.append(iconBox, text);
      item.append(num, card);
      wrap.append(item);
    });
  }

  function renderCases() {
    const wrap = qs('#case-grid');
    data.cases.forEach((entry, index) => {
      const card = el('article', 'case-card');
      card.setAttribute('data-reveal', '');
      card.style.setProperty('--reveal-delay', `${index * .1}s`);
      const figure = el('div', 'case-image');
      const img = el('img');
      img.src = entry.image;
      img.alt = entry.alt;
      img.loading = 'lazy';
      img.width = 1248; img.height = 528;
      figure.append(img, el('span', 'case-number', entry.number));
      const body = el('div', 'case-content');
      body.append(el('div', 'case-kicker', entry.kicker), el('h3', '', entry.title), el('p', 'case-description', entry.detail));
      const tags = el('div', 'case-tags');
      entry.tags.forEach(tag => tags.append(el('span', '', tag)));
      body.append(tags);
      card.append(figure, body);
      wrap.append(card);
    });
  }

  function renderPrinciples() {
    const wrap = qs('#principles-grid');
    data.principles.forEach((entry, index) => {
      const item = el('article', 'principle');
      item.setAttribute('data-reveal', '');
      item.style.setProperty('--reveal-delay', `${index * .07}s`);
      item.innerHTML = icon(entry.icon);
      item.append(el('h3', '', entry.title), el('p', '', entry.detail));
      wrap.append(item);
    });
  }

  function animateCounters(entries) {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(items => {
      for (const item of items) {
        if (!item.isIntersecting) continue;
        const node = item.target;
        observer.unobserve(node);
        const target = Number(node.dataset.target);
        const start = performance.now();
        const duration = 1150;
        const frame = time => {
          const t = Math.min(1, (time - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          node.textContent = Math.round(target * eased).toLocaleString();
          if (t < 1) requestAnimationFrame(frame);
          else node.textContent = target.toLocaleString();
        };
        requestAnimationFrame(frame);
      }
    }, { threshold: .5 });
    entries.forEach(node => observer.observe(node));
  }

  function initReveals() {
    const nodes = qsa('[data-reveal]');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(items => {
      items.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('visible');
          observer.unobserve(item.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -22px 0px' });
    nodes.forEach(node => observer.observe(node));
  }

  function initProgressAndTimeline() {
    const progress = qs('#scroll-progress');
    const timeline = qs('#career-timeline');
    const stages = qsa('.timeline-item');
    const process = qs('.process-section');
    let ticking = false;
    const update = () => {
      const distance = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${distance > 0 ? Math.max(0, Math.min(1, scrollY / distance)) : 0})`;
      const box = timeline.getBoundingClientRect();
      const fraction = Math.max(0, Math.min(1, (innerHeight * .7 - box.top) / Math.max(1, box.height)));
      timeline.style.setProperty('--timeline-progress', `${Math.round(fraction * 100)}%`);
      stages.forEach((stage, i) => stage.classList.toggle('is-active', fraction > (i + .15) / stages.length));
      if (process.getBoundingClientRect().top < innerHeight * .85) process.classList.add('in-view');
      ticking = false;
    };
    const requestUpdate = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    addEventListener('scroll', requestUpdate, { passive: true });
    addEventListener('resize', requestUpdate, { passive: true });
    requestUpdate();
  }

  function initMobileNav() {
    const toggle = qs('#menu-toggle');
    const nav = qs('#mobile-nav');
    const setOpen = open => {
      nav.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    toggle.addEventListener('click', () => setOpen(nav.hidden));
    qsa('a', nav).forEach(link => link.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
    addEventListener('resize', () => { if (innerWidth > 800) setOpen(false); });
  }


  function initBackToTop() {
    qsa('[data-scroll-top]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }));
  }

  function initContactLinks() {
    qs('#linkedin-link').href = data.contact.linkedin;
    qs('#email-link').href = `mailto:${data.contact.email}`;
  }

  renderMetrics(); renderCareer(); renderCases(); renderPrinciples();
  initContactLinks(); initMobileNav(); initBackToTop(); initReveals();
  animateCounters(qsa('.metric-digits'));
  initProgressAndTimeline();
})();
