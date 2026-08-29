/* =====================================================================
   DISEASE CHRONICLES — RENDER LOGIC
   Bu faylni o'zgartirish shart emas. Yangi kasallik qo'shish uchun
   faqat diseases-data.js faylini tahrirlang.
   ===================================================================== */

let currentLang = 'uz';

function esc(str) {
  return String(str).replace(/&/g, '&amp;');
}

function bilingual(obj) {
  return `<span class="uz-text">${obj.uz}</span><span class="en-text">${obj.en}</span>`;
}

/* ---------- CARD ---------- */
function cardHTML(d) {
  const hasDetail = !!d.detail;
  const stampClass = d.stampStyle ? ' ' + d.stampStyle : '';
  const yearHTML = d.year.uz === d.year.en ? esc(d.year.uz) : bilingual(d.year);
  const actionHTML = hasDetail
    ? bilingual({ uz: "Ish faylini o'qish →", en: "Read case file →" })
    : bilingual({ uz: "Tez orada", en: "Coming soon" });

  return `
    <article class="card" data-cat="${d.category}" ${hasDetail ? `data-case="${d.id}" tabindex="0"` : ''}>
      <div class="stamp${stampClass}">${bilingual(d.stamp)}</div>
      <div class="rowtop"><span>${d.categoryLabel}</span><span>№ ${d.caseNo}</span></div>
      <h3>${bilingual(d.title)}</h3>
      <p>${bilingual(d.hook)}</p>
      <div class="foot"><span>${yearHTML}</span><span>${actionHTML}</span></div>
    </article>`;
}

/* ---------- CASE FILE (detail) PAGE ---------- */
function sectionHTML(s) {
  if (s.type === 'text') {
    return `
    <section class="section">
      <h2><span class="no">${s.no}</span>${bilingual(s.heading)}</h2>
      ${s.paragraphs.map(p => `<p>${bilingual(p)}</p>`).join('')}
    </section>`;
  }
  if (s.type === 'timeline') {
    return `
    <section class="section">
      <h2><span class="no">${s.no}</span>${bilingual(s.heading)}</h2>
      <div class="timeline">
        ${s.items.map(it => `
        <div class="tl-item">
          <div class="era">${bilingual(it.era)}</div>
          <h4>${bilingual(it.title)}</h4>
          <p>${bilingual(it.text)}</p>
        </div>`).join('')}
      </div>
    </section>`;
  }
  if (s.type === 'living') {
    return `
    <section class="section">
      <h2><span class="no">${s.no}</span>${bilingual(s.heading)}</h2>
      <div class="living-box">
        <h3>${bilingual(s.title)}</h3>
        <p>${bilingual(s.text)}</p>
      </div>
    </section>`;
  }
  return '';
}

function caseViewHTML(d) {
  const det = d.detail;
  return `
  <div class="case-view" id="case-${d.id}">
    <button class="back-link">${bilingual({ uz: "← Arxivga qaytish", en: "← Back to the archive" })}</button>
    <section class="case-hero">
      <div class="eyebrow">№ ${d.caseNo} · ${d.categoryLabel}</div>
      <h1>${bilingual(d.title)}</h1>
      <p class="sub">${bilingual(det.quote)}</p>
    </section>
    <div class="vitals">
      ${det.vitals.map(v => `<div><div class="label">${bilingual(v.label)}</div><div class="value">${bilingual(v.value)}</div></div>`).join('')}
    </div>
    ${det.sections.map(sectionHTML).join('')}
    <footer>
      <span>${bilingual({ uz: `№ ${d.caseNo} — ${d.categoryLabel} bo'limida saqlanadi`, en: `Case No. ${d.caseNo} — filed under ${d.categoryLabel}` })}</span>
      <span>${bilingual(det.nextCase)}</span>
    </footer>
  </div>`;
}

/* ---------- LANGUAGE ---------- */
function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.uz-text').forEach(el => el.style.display = (lang === 'uz') ? 'inline' : 'none');
  document.querySelectorAll('.en-text').forEach(el => el.style.display = (lang === 'en') ? 'inline' : 'none');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang;
}

/* ---------- INIT ---------- */
function init() {
  const archive = document.getElementById('archive');
  const caseContainer = document.getElementById('case-container');

  archive.innerHTML = DISEASES.map(cardHTML).join('');
  caseContainer.innerHTML = DISEASES.filter(d => d.detail).map(caseViewHTML).join('');

  const homeView = document.getElementById('home-view');
  const allCaseViews = document.querySelectorAll('.case-view');

  function openCase(id) {
    const target = document.getElementById('case-' + id);
    if (!target) return;
    homeView.classList.add('hidden');
    allCaseViews.forEach(cv => cv.classList.remove('active'));
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  function closeCase() {
    allCaseViews.forEach(cv => cv.classList.remove('active'));
    homeView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  archive.querySelectorAll('[data-case]').forEach(card => {
    card.addEventListener('click', () => openCase(card.dataset.case));
    card.addEventListener('keypress', e => { if (e.key === 'Enter') openCase(card.dataset.case); });
  });

  caseContainer.querySelectorAll('.back-link').forEach(btn => {
    btn.addEventListener('click', closeCase);
  });

  const shelfButtons = document.querySelectorAll('#shelf button');
  const cards = archive.querySelectorAll('.card');
  shelfButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      shelfButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);
}

document.addEventListener('DOMContentLoaded', init);
