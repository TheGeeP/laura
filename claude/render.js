// Fills designs 05-08 from ../content.js. Decoration (mountain, map, stamps) stays in each page.
(() => {
  const d = window.CV;
  const design = document.body.dataset.design;
  const esc = x => String(x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fill = (sel, html) => document.querySelectorAll(sel).forEach(el => { el.innerHTML = html; });
  const range = (j, sep) => esc(j.date.replace(' - ', sep));
  const at = j => esc([j.company, j.place].filter(Boolean).join(', '));
  const desc = j => j.description ? `<p>${esc(j.description)}</p>` : '';
  const values = { ...d, languagesCount: d.languages.length, skiStart: d.jobs.find(j => j.kind === 'ski').from };

  // Single values: <span data-cv="countries"></span>; an <a data-cv="email"> also gets its mailto.
  document.querySelectorAll('[data-cv]').forEach(el => {
    el.textContent = values[el.dataset.cv];
    if (el.tagName === 'A' && el.dataset.cv === 'email') el.href = `mailto:${d.email}`;
  });

  const kindColor = { guide: 'var(--green)', ski: 'var(--blue)', manage: 'var(--red)', expedition: 'var(--black)' };
  const kindClass = { guide: 'g', ski: 'b', manage: 'r', expedition: 'k' };

  if (design === 'summit') {
    fill('[data-jobs]', d.jobs.map((j, i) => `<li${i ? '' : ' class="now"'}>
      <div class="meta"><span class="when">${range(j, ' — ')}</span> <span class="where">${at(j)}</span></div>
      <div class="what">${esc(j.title)}</div>${desc(j)}</li>`).join(''));
    fill('[data-languages]', d.languages.map(([l, lvl, pct]) =>
      `<li>${esc(l)} <span class="bar"><i style="width:${pct}%"></i></span><small>${esc(lvl)}</small></li>`).join(''));
    fill('[data-education]', d.education.map(([t, org, y]) => `<li><b>${esc(y)}</b> ${esc(t)}, ${esc(org)}</li>`).join(''));
    fill('[data-interests]', d.interests.map(x => `<span>${esc(x)}</span>`).join(''));
  }

  if (design === 'passport') {
    fill('[data-jobs]', d.jobs.map((j, i) => `<div class="stamp s${i + 1}">
      <div class="t">${esc(j.title)}</div><div class="d">${range(j, ' → ')}</div>
      <p>${esc([j.company, j.description].filter(Boolean).join('. '))}</p></div>`).join(''));
    fill('[data-languages]', d.languages.map(([l, lvl]) => `<li><b>${esc(l)}</b> ${esc(lvl.toLowerCase())}</li>`).join(''));
    fill('[data-education]', d.education.map(([t, org, y]) => `<li><b>${esc(y)}</b> ${esc(t)} — ${esc(org)}</li>`).join(''));
    fill('[data-interests]', `<li>${d.interests.map(esc).join(', ')}</li>`);
  }

  if (design === 'riso') {
    fill('[data-jobs]', d.jobs.map(j => `<li><div class="yr">${esc(j.from)}${j.to ? `<span class="date-end">– ${esc(j.to === 'now' ? d.labels.now : j.to)}</span>` : ''}</div>
      <div><h3>${esc(j.title)} <span class="at">${esc(j.company)}</span></h3>${desc(j)}</div></li>`).join(''));
    fill('[data-languages]', d.languages.map(([l, lvl]) => `<li><b>${esc(l)}</b> ${esc(lvl.toLowerCase())}</li>`).join(''));
    fill('[data-education]', d.education.map(([t, org, y]) => `<li>${esc(t)}, ${esc(org)} — ${esc(y)}</li>`).join(''));
    fill('[data-interests]', d.interests.map(x => `<span>${esc(x)}</span>`).join(''));
  }

  if (design === 'piste') {
    const runs = [...d.jobs].reverse(); // oldest is run 1, matching the map's left-to-right order
    fill('[data-jobs]', runs.map((j, i) => `<li><span class="mark ${kindClass[j.kind]}">${i + 1}</span><div>
      <h3>${esc(j.title)}</h3><div class="meta">${at(j)} · ${range(j, '–')}</div>${desc(j)}</div></li>`).join(''));
    runs.forEach((j, i) => {
      document.querySelectorAll(`[data-run="${i + 1}"]`).forEach(el =>
        el.setAttribute(el.tagName === 'path' ? 'stroke' : 'fill', kindColor[j.kind]));
    });
    fill('[data-languages]', d.languages.map(([l, lvl]) => `<li><strong>${esc(l)}</strong> ${esc(lvl.toLowerCase())}</li>`).join(''));
    fill('[data-education]', d.education.map(([t, org, y]) => `<li>${esc(t)}, ${esc(org)} — ${esc(y)}</li>`).join(''));
    fill('[data-interests]', `<li>${d.interests.map(esc).join(', ')}</li>`);
  }
})();
