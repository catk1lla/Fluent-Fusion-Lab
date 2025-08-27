// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Copy CTA text
const copyBtn = document.getElementById('copy-cta');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.copy || 'Хочу Fusion!');
      copyBtn.textContent = 'Скопировано ✅';
      setTimeout(() => (copyBtn.textContent = 'Написать «Хочу Fusion!»'), 1600);
    } catch (e) {
      alert('Скопируйте вручную: "Хочу Fusion!"');
    }
  });
}

// Form: build mailto and open email client (no backend needed)
const form = document.getElementById('apply-form');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent('Заявка на Fluent Fusion Lab');
    const body = encodeURIComponent(
      `Здравствуйте!\n\n` +
      `Хочу записаться на курс Fluent Fusion Lab.\n\n` +
      `Имя: ${data.name || ''}\n` +
      `Email: ${data.email || ''}\n` +
      `Контакт (TG/WA): ${data.contact || ''}\n` +
      `Уровень: ${data.level || ''}\n` +
      `Время: ${data.time || ''}\n` +
      `Сообщение: ${data.message || ''}\n\n` +
      `Отправлено с лендинга.`
    );
    window.location.href = `mailto:team@fluentfusion.example?subject=${subject}&body=${body}`;
    success.hidden = false;
    form.reset();
  });
}
