// Language switcher: EN is the default; the choice is remembered per browser.
const root = document.documentElement;
const buttons = document.querySelectorAll('[data-set-lang]');

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)));
  try { localStorage.setItem('lang', lang); } catch (_) { /* storage may be blocked */ }
}

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (_) { /* ignore */ }
if (saved === 'es' || saved === 'en') setLang(saved);

buttons.forEach(b => b.addEventListener('click', () => setLang(b.dataset.setLang)));


// Click-to-enlarge for evidence screenshots.
const lightbox = document.getElementById('lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  const big = lightbox.querySelector('img');
  document.querySelectorAll('.shot img').forEach(img => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    const open = () => { big.src = img.src; big.alt = img.alt; lightbox.showModal(); };
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  lightbox.addEventListener('click', () => lightbox.close());
}
