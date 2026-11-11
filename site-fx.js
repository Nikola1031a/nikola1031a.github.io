/* savicweb.com — motion layer. Everything here is progressive: with JS off or reduced motion, content stays fully visible and static. Animates transform/opacity only. */
(function () {
  if (window.__savicFx) return; window.__savicFx = true;
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var EASE = 'cubic-bezier(.2,.8,.2,1)';
  var T0 = performance.now();
  var seen = new WeakSet();
  function first(el) { if (seen.has(el)) return false; seen.add(el); return true; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  /* film grain */
  function grain() {
    if (document.getElementById('sv-grain') || !document.body) return;
    var g = document.createElement('div');
    g.id = 'sv-grain'; g.setAttribute('aria-hidden', 'true');
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>";
    Object.assign(g.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '9990', opacity: '.035', backgroundImage: 'url("data:image/svg+xml;utf8,' + svg + '")', backgroundSize: '220px 220px' });
    document.body.appendChild(g);
  }

  /* reveals */
  var hidden = [];
  var io = (!RM && 'IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); show(e.target); } });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0 }) : null;
  function show(el) {
    var d = (parseInt(el.getAttribute('data-reveal'), 10) || 0) % 8 * 70;
    el.style.transition = 'opacity .8s ' + EASE + ' ' + d + 'ms, transform .8s ' + EASE + ' ' + d + 'ms';
    el.style.opacity = ''; el.style.transform = '';
    hidden = hidden.filter(function (x) { return x !== el; });
    setTimeout(function () { el.style.transition = ''; }, 900 + d);
  }
  function showAll() { hidden.slice().forEach(function (el) { if (io) io.unobserve(el); show(el); }); }
  function reveal(el) {
    if (!io) return;
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 40) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    hidden.push(el); io.observe(el);
  }
  window.addEventListener('beforeprint', showAll);

  /* hero intro */
  function intro(el) {
    if (RM || performance.now() - T0 > 3000 || !el.animate) return;
    var k = el.getAttribute('data-intro'), i = parseInt(el.getAttribute('data-intro-i'), 10) || 0;
    if (k === 'line') el.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 700, delay: i * 90, easing: EASE, fill: 'backwards' });
    else if (k === 'fade') el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 550, delay: 340 + i * 70, easing: EASE, fill: 'backwards' });
    else el.animate([{ opacity: 0, transform: 'scale(1.04)' }, { opacity: 1, transform: 'none' }], { duration: 700, delay: 450, easing: EASE, fill: 'backwards' });
  }

  /* loops */
  function setRate(a, r) { if (a.updatePlaybackRate) a.updatePlaybackRate(r); else a.playbackRate = r; }
  function marquee(el) {
    if (RM || !el.animate) return;
    var a = el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: parseInt(el.getAttribute('data-marquee'), 10) || 40000, iterations: Infinity });
    var h = el.parentElement;
    h.addEventListener('mouseenter', function () { setRate(a, 0.25); });
    h.addEventListener('mouseleave', function () { setRate(a, 1); });
  }
  function spin(el) { if (!RM && el.animate) el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 22000, iterations: Infinity }); }
  function pulse(el) { if (!RM && el.animate) el.animate([{ transform: 'scale(1)', opacity: 0.7 }, { transform: 'scale(2.8)', opacity: 0 }], { duration: 1800, iterations: Infinity, easing: 'ease-out' }); }

  /* counters */
  var cio = (!RM && 'IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { cio.unobserve(e.target); runCount(e.target); } });
  }, { threshold: 0.5 }) : null;
  function runCount(el) {
    var node = el.firstChild; if (!node || node.nodeType !== 3) return;
    var target = parseInt(el.getAttribute('data-count'), 10) || 0, t0 = performance.now(), dur = target > 9 ? 1300 : 900;
    (function step(now) {
      var p = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
      node.nodeValue = String(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* scroll-linked: word highlight + process line */
  var scrubs = [], lines = [], ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; updScroll(); }); } }
  function updScroll() {
    var vh = window.innerHeight;
    scrubs = scrubs.filter(function (c) { return c.isConnected; });
    scrubs.forEach(function (c) {
      var r = c.getBoundingClientRect();
      var p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.25), 0, 1);
      var ws = c.querySelectorAll('[data-word]'), n = ws.length;
      for (var i = 0; i < n; i++) {
        var w = ws[i], o = (i + 0.5) / n <= p ? '1' : '0.28';
        if (!w.__t) { w.__t = 1; w.style.transition = 'opacity .3s ease'; }
        if (w.style.opacity !== o) w.style.opacity = o;
      }
    });
    lines = lines.filter(function (l) { return l.isConnected; });
    lines.forEach(function (l) {
      var root = l.closest('[data-progress-root]') || l.parentElement, r = root.getBoundingClientRect();
      var p = clamp((vh * 0.7 - r.top) / (r.height * 0.8), 0, 1);
      l.style.transform = l.getAttribute('data-progress') === 'y' ? 'scaleY(' + p + ')' : 'scaleX(' + p + ')';
      var steps = root.querySelectorAll('[data-step-on]'), n = steps.length;
      for (var i = 0; i < n; i++) { var o = p >= i / n ? '1' : '0'; if (steps[i].style.opacity !== o) { steps[i].style.transition = 'opacity .3s'; steps[i].style.opacity = o; } }
    });
    if (hidden.length && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) showAll();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* pointer: magnetic, cursor, glow, cards */
  var mags = [], glows = [], mx = -999, my = -999, pTick = false;
  function onMove(e) {
    mx = e.clientX; my = e.clientY;
    if (dot && !cVis) { cVis = 1; dot.style.opacity = '1'; }
    if (!pTick) { pTick = true; requestAnimationFrame(function () { pTick = false; updMagnets(); }); }
  }
  function updMagnets() {
    mags = mags.filter(function (el) { return el.isConnected; });
    mags.forEach(function (el) {
      var r = el.getBoundingClientRect(), ox = el.__mx || 0, oy = el.__my || 0;
      var cx = r.left + r.width / 2 - ox, cy = r.top + r.height / 2 - oy, dx = mx - cx, dy = my - cy;
      var near = Math.abs(dx) < r.width / 2 + 36 && Math.abs(dy) < r.height / 2 + 36;
      var tx = near ? Math.round(dx * 0.22) : 0, ty = near ? Math.round(dy * 0.32) : 0;
      if (tx !== ox || ty !== oy) {
        el.style.transition = near ? 'transform .25s ease-out' : 'transform .7s cubic-bezier(.3,1.8,.5,1)';
        el.style.transform = tx || ty ? 'translate(' + tx + 'px,' + ty + 'px)' : '';
        el.__mx = tx; el.__my = ty;
      }
    });
  }
  var dot, dotLabel, cx = -100, cy = -100, cs = 0.12, cTarget = 0.12, cVis = 0;
  function cursorInit() {
    var st = document.createElement('style');
    st.textContent = 'html,body,*{cursor:none!important}';
    document.head.appendChild(st);
    dot = document.createElement('div'); dot.setAttribute('aria-hidden', 'true');
    Object.assign(dot.style, { position: 'fixed', left: '0', top: '0', width: '88px', height: '88px', marginLeft: '-44px', marginTop: '-44px', borderRadius: '50%', background: '#E3262E', pointerEvents: 'none', zIndex: '10000', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0', transition: 'opacity .2s', willChange: 'transform' });
    dotLabel = document.createElement('span');
    Object.assign(dotLabel.style, { font: '600 14px/1 Manrope, sans-serif', color: '#F3F0EB', letterSpacing: '.02em', opacity: '0', transition: 'opacity .2s' });
    dotLabel.textContent = (window.SAVIC && window.SAVIC.t().work.view) || 'View';
    dot.appendChild(dotLabel); document.body.appendChild(dot);
    document.addEventListener('pointerover', function (e) {
      var t = e.target && e.target.closest ? e.target : null; if (!t) return;
      var v = t.closest('[data-cursor="view"]');
      if (v) { cTarget = 1; dotLabel.textContent = v.getAttribute('data-cursor-label') || (window.SAVIC && window.SAVIC.t().work.view) || 'View'; dotLabel.style.opacity = '1'; return; }
      dotLabel.style.opacity = '0';
      cTarget = t.closest('a,button,summary,[role="button"],label') ? 0.07 : 0.12;
    });
    document.addEventListener('pointerleave', function () { dot.style.opacity = '0'; cVis = 0; });
    document.addEventListener('pointerdown', function () { cs *= 0.8; });
    (function loop() {
      cx += (mx - cx) * 0.3; cy += (my - cy) * 0.3; cs += (cTarget - cs) * 0.2;
      dot.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px) scale(' + cs.toFixed(3) + ')';
      glowStep();
      requestAnimationFrame(loop);
    })();
  }
  function glowStep() {
    glows = glows.filter(function (g) { return g.el.isConnected; });
    glows.forEach(function (g) {
      var a = g.area.getBoundingClientRect();
      var inside = mx >= a.left && mx <= a.right && my >= a.top && my <= a.bottom;
      var tx = inside ? mx - a.left - g.bx : 0, ty = inside ? my - a.top - g.by : 0;
      g.x += (tx - g.x) * 0.06; g.y += (ty - g.y) * 0.06;
      g.el.style.transform = 'translate(' + g.x.toFixed(1) + 'px,' + g.y.toFixed(1) + 'px)';
    });
  }
  function glowAdd(el) {
    var area = el.closest('[data-glow-area]'); if (!area) return;
    el.style.transform = '';
    var r = el.getBoundingClientRect(), a = area.getBoundingClientRect();
    glows.push({ el: el, area: area, bx: r.left - a.left + r.width / 2, by: r.top - a.top + r.height / 2, x: 0, y: 0 });
  }
  function card(el) {
    if (!FINE) return;
    var z = el.querySelector('[data-card-zoom]'), o = el.querySelector('[data-card-overlay]'), t = el.querySelector('[data-card-title]');
    function set(on) {
      if (z && !RM) { z.style.transition = 'transform 1.4s ' + EASE; z.style.transform = on ? 'scale(1.04)' : ''; }
      if (o) { o.style.transition = 'opacity .5s ' + EASE + ', transform .6s ' + EASE; o.style.opacity = on ? '1' : '0'; o.style.transform = on || RM ? 'translateY(0)' : 'translateY(30%)'; }
      if (t) { t.style.transition = 'transform .6s ' + EASE + ' .05s'; t.style.transform = on || RM ? 'translateY(0)' : 'translateY(120%)'; }
    }
    el.addEventListener('mouseenter', function () { set(true); });
    el.addEventListener('mouseleave', function () { set(false); });
  }

  /* scan */
  function each(sel, fn) { document.querySelectorAll(sel).forEach(function (el) { if (first(el)) fn(el); }); }
  function scan() {
    grain();
    each('[data-intro]', intro);
    each('[data-reveal]', reveal);
    each('[data-marquee]', marquee);
    each('[data-spin]', spin);
    each('[data-pulse]', pulse);
    each('[data-count]', function (el) { if (cio) cio.observe(el); });
    each('[data-scrub]', function (el) { if (!RM) scrubs.push(el); });
    each('[data-progress]', function (el) { if (!RM) lines.push(el); });
    each('[data-card]', card);
    if (FINE && !RM) {
      each('[data-magnetic]', function (el) { mags.push(el); });
      each('[data-glow]', glowAdd);
    }
    updScroll();
  }
  var sTick = false;
  function queue() { if (!sTick) { sTick = true; requestAnimationFrame(function () { sTick = false; scan(); }); } }
  function boot() {
    scan();
    new MutationObserver(queue).observe(document.body, { childList: true, subtree: true });
    if (FINE) { window.addEventListener('pointermove', onMove, { passive: true }); if (!RM) cursorInit(); }
    window.addEventListener('resize', function () { glows.forEach(function (g) { g.el.style.transform = ''; var r = g.el.getBoundingClientRect(), a = g.area.getBoundingClientRect(); g.bx = r.left - a.left + r.width / 2; g.by = r.top - a.top + r.height / 2; g.x = 0; g.y = 0; }); });
  }
  if (document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
