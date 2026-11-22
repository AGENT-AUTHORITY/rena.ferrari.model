(() => {
  'use strict';
  const links = window.RENA_LINKS || {};
  for (const anchor of document.querySelectorAll('a[data-link]')) {
    const key = anchor.dataset.link;
    const url = links[key];
    if (typeof url === 'string' && /^https:\/\//i.test(url)) {
      anchor.href = url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.removeAttribute('href');
      anchor.setAttribute('aria-disabled', 'true');
    }
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const lightbox = document.getElementById('lightbox');
  const lightboxPhoto = document.getElementById('lightbox-photo');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeButton = document.getElementById('lightbox-close');
  let lastFocused = null;
  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  document.querySelectorAll('.gallery-item').forEach(button => {
    button.addEventListener('click', () => {
      lastFocused = button;
      lightboxPhoto.src = button.dataset.full;
      lightboxPhoto.alt = button.querySelector('img').alt;
      lightboxCaption.textContent = button.dataset.caption || '';
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (!lightbox.hidden && event.key === 'Escape') closeLightbox();
    if (!lightbox.hidden && event.key === 'Tab') { event.preventDefault(); closeButton.focus(); }
  });
})();
