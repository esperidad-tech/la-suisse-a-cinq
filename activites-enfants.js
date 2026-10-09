'use strict';
(() => {
  const cards = [...document.querySelectorAll('.discovery-card')];
  const buttons = [...document.querySelectorAll('[data-day-filter]')];
  const budget = document.getElementById('activity-budget');
  const count = document.getElementById('activity-count');
  let day = 'all';
  function filter() {
    let visible = 0;
    cards.forEach(card => {
      const price = Number(card.dataset.price);
      const match = budget.value === 'all' || (budget.value === 'free' && price === 0) || (budget.value === 'small' && price <= 35) || (budget.value === 'indoor' && card.dataset.indoor === 'true');
      card.hidden = !((day === 'all' || card.dataset.day === day) && match);
      if (!card.hidden) visible++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dayFilter === day)));
    count.textContent = visible + (visible === 1 ? ' découverte à explorer' : ' découvertes à explorer');
    document.getElementById('no-activities').hidden = visible > 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => { day = button.dataset.dayFilter; filter(); }));
  budget.addEventListener('change', filter);
  document.getElementById('reset-activities').addEventListener('click', () => { day = 'all'; budget.value = 'all'; filter(); buttons[0].focus(); });
  // Anchor links to a card also work after narrowing the list.
  function revealAnchor() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = cards.find(card => card.id === id);
    if (target?.hidden) { day = 'all'; budget.value = 'all'; filter(); target.scrollIntoView({ block: 'start' }); }
  }
  window.addEventListener('hashchange', revealAnchor);
  const requested = new URLSearchParams(location.search).get('jour');
  if (['2','3','4'].includes(requested)) { day = requested; filter(); }
  revealAnchor();
})();
