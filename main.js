(() => {
  const links = window.RENA_LINKS || {};
  const ids = {
    fanvue: document.getElementById('fanvue-link'),
    telegramPublico: document.getElementById('telegram-link')
  };
  if (ids.fanvue && /^https:\/\//.test(links.fanvue || '')) ids.fanvue.href = links.fanvue;
  for (const [key, id] of [["instagram", "instagram-link"], ["facebook", "facebook-link"]]) {
    const node = document.getElementById(id);
    if (node && /^https:\/\//.test(links[key] || "")) node.href = links[key];
  }
  const telegram = links.telegramPublico;
  if (ids.telegramPublico && /^https:\/\/t\.me\//.test(telegram || '')) {
    ids.telegramPublico.href = telegram;
    ids.telegramPublico.removeAttribute('aria-disabled');
    ids.telegramPublico.target = '_blank';
    ids.telegramPublico.rel = 'noopener noreferrer';
    document.getElementById('telegram-label').textContent = 'Telegram · Acceso gratuito';
  } else if (ids.telegramPublico) {
    ids.telegramPublico.addEventListener('click', (event) => event.preventDefault());
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
