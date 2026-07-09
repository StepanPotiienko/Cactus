/* ===========================
   signup.js — Email → Google Apps Script
   =========================== */

(function () {
  // ⚠️ Replace with your Google Apps Script Web App URL
  // Create script at script.google.com → Deploy → New deployment → Web app
  // Access: "Anyone" → Deploy → copy URL
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXXXX/exec';

  const form = document.getElementById('signupForm');
  const emailInput = document.getElementById('emailInput');
  const statusEl = document.getElementById('signupStatus');

  // Get localized text
  function t(key) {
    const lang = document.documentElement.lang || 'en';
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    if (typeof translations !== 'undefined' && translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return key;
  }

  function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = 'signup-status ' + (type || '');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      showStatus(t('signup.invalid'), 'error');
      return;
    }

    const lang = document.documentElement.lang || 'en';
    const source = 'landing-page';
    const timestamp = new Date().toISOString();

    // Disable form while submitting
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    emailInput.disabled = true;
    showStatus('…', '');

    try {
      // Send to Google Apps Script
      const formData = new FormData();
      formData.append('email', email);
      formData.append('lang', lang);
      formData.append('source', source);
      formData.append('timestamp', timestamp);

      const resp = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (resp.ok) {
        showStatus(t('signup.success'), 'success');
        emailInput.value = '';
      } else {
        throw new Error(`HTTP ${resp.status}`);
      }
    } catch (err) {
      console.warn('[Cactus] Signup failed:', err.message);

      // Fallback: open mailto with prefilled subject
      const mailtoLink = `mailto:stepan@ap-digitals.com?subject=Cactus%20Notification%20Signup&body=Email:%20${encodeURIComponent(email)}%0ALang:%20${lang}`;
      showStatus(t('signup.error') + ' ' + t('signup.invalid'), 'error');

      // Offer mailto fallback
      const fallbackLink = document.createElement('a');
      fallbackLink.href = mailtoLink;
      fallbackLink.textContent = '→ Email me directly';
      fallbackLink.style.cssText = 'display:block;margin-top:8px;color:#2D5F3F;font-weight:600;text-decoration:underline;';
      statusEl.appendChild(document.createElement('br'));
      statusEl.appendChild(fallbackLink);
    } finally {
      submitBtn.disabled = false;
      emailInput.disabled = false;
    }
  }

  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
})();