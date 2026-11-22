(() => {
  const links = window.RENA_LINKS || {};

  const pages = {
    fanvue: 'fanvue-link',
    telegramPublico: 'telegram-link',
    instagram: 'instagram-link',
    facebook: 'facebook-link',
    tiktok: 'tiktok-link'
  };

  for (const [key, id] of Object.entries(pages)) {
    const element = document.getElementById(id);
    const url = links[key];
    if (!element) continue;

    if (typeof url === 'string' && /^https:\/\//.test(url)) {
      element.href = url;
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
      element.removeAttribute('aria-disabled');
    } else {
      element.href = '#';
      element.setAttribute('aria-disabled', 'true');
      element.addEventListener('click', (event) => event.preventDefault());
    }
  }

  const label = document.getElementById('telegram-label');
  if (label && links.telegramPublico) label.textContent = 'Telegram · Acceso gratuito';

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
