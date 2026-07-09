/* ===========================
   i18n.js — EN/UA translations
   =========================== */

const translations = {
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.roadmap': 'Roadmap',

    // Hero
    'hero.title': 'Cactus',
    'hero.tagline': 'Your AI workflow, simplified. No terminal required.',
    'hero.learn': 'Learn more',
    'hero.platforms': 'Available for macOS · Windows · Linux',

    // What
    'what.title': 'What is Cactus?',
    'what.text': 'Cactus is a cross-platform desktop application that provides a friendly graphical interface for <strong>Hermes Agent</strong> — a powerful AI assistant. Instead of typing commands in a terminal, Cactus lets you configure AI providers, install skills, manage notes, and control your workflow — all with a few clicks.',

    // Features
    'features.title': 'Features',
    'features.wizard.title': 'Setup Wizard',
    'features.wizard.desc': 'Detects and installs everything you need — Homebrew, Python, Hermes Agent, and your API key. One click, done.',
    'features.models.title': 'Model Picker',
    'features.models.desc': 'Choose your AI provider and model from a simple dropdown. Supports OpenRouter, Anthropic, Gemini, DeepSeek, xAI, and Z.AI.',
    'features.skills.title': 'Skills Marketplace',
    'features.skills.desc': 'Browse, search, and install Hermes Agent skills — extra capabilities for your AI assistant — without touching the CLI.',
    'features.caffeinate.title': 'Caffeinate Controller',
    'features.caffeinate.desc': 'Keep your Mac awake during long AI tasks with a simple toggle and timer. No more sleep interruptions.',
    'features.notes.title': 'Notes Vault',
    'features.notes.desc': 'Connect an Obsidian vault, browse your notes, and launch Obsidian directly from Cactus. Your knowledge, organized.',
    'features.knowledge.title': 'Knowledge Graph',
    'features.knowledge.desc': 'Visualize connections between your notes, skills, and AI sessions as an interactive graph. Discover hidden relationships in your knowledge.',

    // Screenshots
    'screenshots.title': 'See it in action',
    'screenshots.coming': 'Coming Soon',
    'screenshots.text': 'Cactus is actively under development. Be the first to know when it\'s ready!',

    // How it works
    'how.title': 'How it works',
    'how.step1.title': 'Download & Install',
    'how.step1.desc': 'Download Cactus for your platform. Open it like any other app — no terminal needed.',
    'how.step2.title': 'Follow the Wizard',
    'how.step2.desc': 'The setup wizard installs Hermes Agent and Python, then helps you add your AI API key.',
    'how.step3.title': 'Use Your AI',
    'how.step3.desc': 'Browse skills, pick your model, manage notes, and let Cactus handle the rest. That\'s it.',

    // Download
    'download.detecting': 'Detecting your platform…',
    'download.other': 'Other platforms:',
    'download.releases': 'View all releases →',

    // Requirements
    'req.title': 'System Requirements',
    'req.param': 'Parameter',
    'req.min': 'Minimum',
    'req.rec': 'Recommended',
    'req.os.mac': 'macOS',
    'req.os.win': 'Windows',
    'req.os.linux': 'Linux',
    'req.ram': 'RAM',
    'req.disk': 'Disk Space',
    'req.internet': 'Internet',
    'req.python': 'Python',
    'req.hermes': 'Hermes Agent',

    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.now': 'Now (v1)',
    'roadmap.now.1': 'Setup Wizard',
    'roadmap.now.2': 'Model/Provider Picker',
    'roadmap.now.3': 'Skills Marketplace',
    'roadmap.now.4': 'Caffeinate (macOS)',
    'roadmap.now.5': 'Notes Vault',
    'roadmap.soon': 'Soon (v1.1)',
    'roadmap.soon.1': 'Auto-update',
    'roadmap.soon.2': 'Caffeinate (Win/Linux)',
    'roadmap.soon.3': 'Cron Manager',
    'roadmap.soon.4': 'Session Browser',
    'roadmap.later': 'Later (v2)',
    'roadmap.later.1': 'MCP Manager',
    'roadmap.later.2': 'Gateway Setup',
    'roadmap.later.3': 'Multi-profile',
    'roadmap.later.4': 'i18n / Telemetry',
    'roadmap.later.5': 'Code Signing',

    // FAQ
    'faq.title': 'FAQ',
    'faq.q1': 'Is Cactus free?',
    'faq.a1': 'Yes, Cactus is completely free. You only pay for API usage from your AI provider (OpenRouter, Anthropic, etc.).',
    'faq.q2': 'What is Hermes Agent?',
    'faq.a2': 'Hermes Agent is an AI assistant by Nous Research that runs on your computer. It can use tools, search the web, manage files, and more. Cactus provides a graphical interface so you don\'t need to use the terminal.',
    'faq.q3': 'Do I need to know how to code?',
    'faq.a3': 'No! Cactus is designed for non-tech users. The setup wizard handles installation, and the dashboard gives you a simple GUI for everything. The terminal is never shown.',
    'faq.q4': 'Which platforms are supported?',
    'faq.a4': 'Cactus runs on macOS, Windows, and Linux. It\'s a cross-platform Electron app, so the experience is the same everywhere.',
    'faq.q5': 'Do I need an API key?',
    'faq.a5': 'Yes, you need an API key from an AI provider (OpenRouter, Anthropic, Google Gemini, DeepSeek, xAI, or Z.AI). Cactus helps you set it up during the wizard. Costs depend on your provider\'s pricing.',
    'faq.q6': 'Which AI providers are supported?',
    'faq.a6': 'OpenRouter, Anthropic (Claude), Google Gemini, DeepSeek, xAI (Grok), and Z.AI (GLM). You can switch between them anytime in Settings.',
    'faq.q7': 'Is my data sent to the cloud?',
    'faq.a7': 'Cactus runs locally on your machine. Your notes and configuration stay on your computer. Only your AI conversations are sent to your chosen provider\'s API — that\'s how AI models work.',
    'faq.q8': 'Why "Cactus"?',
    'faq.a8': 'A cactus is resilient, low-maintenance, and thrives in tough environments — just like we want your AI workflow to be. Plus, the name was available. 🌵',
    'faq.q9': 'Is it open source?',
    'faq.a9': 'Not yet. Cactus is currently closed-source, but we\'re considering open-sourcing it in the future. The landing page itself is hosted on GitHub.',
    'faq.q10': 'How do I update Cactus?',
    'faq.a10': 'In v1, you check for updates manually via Settings → Check for Updates. Auto-update is coming in v1.1.',
    'faq.q11': 'Will it work without Hermes installed?',
    'faq.a11': 'Yes! The setup wizard detects whether Hermes Agent is installed and installs it automatically if needed. You don\'t need to install anything manually.',
    'faq.q12': 'Does it work offline?',
    'faq.a12': 'Cactus itself works offline for browsing notes and viewing settings. However, AI conversations require an internet connection to reach your provider\'s API.',

    // Footer
    'footer.github': 'GitHub',

    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.rights': '© 2026 Stepan Potiienko. All rights reserved.',

    // Signup
    'signup.success': 'Thanks! We\'ll notify you when Cactus is ready. 🌵',
    'signup.error': 'Something went wrong. Please try again.',
    'signup.invalid': 'Please enter a valid email address.',
  },

  ua: {
    // Nav
    'nav.features': 'Можливості',
    'nav.how': 'Як це працює',
    'nav.download': 'Завантажити',
    'nav.faq': 'FAQ',
    'nav.roadmap': 'План розвитку',

    // Hero
    'hero.title': 'Cactus',
    'hero.tagline': 'Ваш AI-воркфлоу, спрощено. Без терміналу.',
    'hero.learn': 'Дізнатися більше',
    'hero.platforms': 'Доступно для macOS · Windows · Linux',

    // What
    'what.title': 'Що таке Cactus?',
    'what.text': 'Cactus — це кросплатформений десктопний застосунок, який надає зручний графічний інтерфейс для <strong>Hermes Agent</strong> — потужного AI-асистента. Замість введення команд у терміналі, Cactus дозволяє налаштовувати AI-провайдерів, встановлювати скіли, керувати нотатками та контролювати ваш воркфлоу — усе кількома кліками.',

    // Features
    'features.title': 'Можливості',
    'features.wizard.title': 'Майстер налаштування',
    'features.wizard.desc': 'Виявляє та встановлює все необхідне — Homebrew, Python, Hermes Agent і ваш API-ключ. Один клік — і готово.',
    'features.models.title': 'Вибір моделі',
    'features.models.desc': 'Оберіть AI-провайдера та модель зі списку. Підтримує OpenRouter, Anthropic, Gemini, DeepSeek, xAI та Z.AI.',
    'features.skills.title': 'Маркет скілів',
    'features.skills.desc': 'Переглядайте, шукайте та встановлюйте скіли Hermes Agent — додаткові можливості для вашого AI-асистента — без терміналу.',
    'features.caffeinate.title': 'Контролер Caffeinate',
    'features.caffeinate.desc': 'Не давайте Mac заснути під час довгих AI-задач простим перемикачем і таймером. Більше без перерв.',
    'features.notes.title': 'Сховище нотаток',
    'features.notes.desc': 'Підключіть Obsidian-сховище, переглядайте нотатки та запускайте Obsidian прямо з Cactus. Ваші знання, організовані.',
    'features.knowledge.title': 'Граф знань',
    'features.knowledge.desc': 'Візуалізуйте зв\'язки між нотатками, скілами та AI-сесіями як інтерактивний граф. Відкрийте приховані зв\'язки у ваших знаннях.',

    // Screenshots
    'screenshots.title': 'Подивіться у дії',
    'screenshots.coming': 'Незабаром',
    'screenshots.text': 'Cactus активно розробляється. Дізнайтеся першим, коли все буде готово!',

    // How it works
    'how.title': 'Як це працює',
    'how.step1.title': 'Завантажте та встановіть',
    'how.step1.desc': 'Завантажте Cactus для вашої платформи. Відкрийте як звичайний застосунок — без терміналу.',
    'how.step2.title': 'Пройдіть майстер',
    'how.step2.desc': 'Майстер налаштування встановить Hermes Agent та Python, а потім допоможе додати ваш API-ключ.',
    'how.step3.title': 'Користуйтеся AI',
    'how.step3.desc': 'Переглядайте скіли, обирайте модель, керуйте нотатками — Cactus зробить решту. Ось і все.',

    // Download
    'download.detecting': 'Визначаємо вашу платформу…',
    'download.other': 'Інші платформи:',
    'download.releases': 'Усі релізи →',

    // Requirements
    'req.title': 'Системні вимоги',
    'req.param': 'Параметр',
    'req.min': 'Мінімум',
    'req.rec': 'Рекомендовано',
    'req.os.mac': 'macOS',
    'req.os.win': 'Windows',
    'req.os.linux': 'Linux',
    'req.ram': 'Оперативна пам\'ять',
    'req.disk': 'Дисковий простір',
    'req.internet': 'Інтернет',
    'req.python': 'Python',
    'req.hermes': 'Hermes Agent',

    // Roadmap
    'roadmap.title': 'План розвитку',
    'roadmap.now': 'Зараз (v1)',
    'roadmap.now.1': 'Майстер налаштування',
    'roadmap.now.2': 'Вибір моделі/провайдера',
    'roadmap.now.3': 'Маркет скілів',
    'roadmap.now.4': 'Caffeinate (macOS)',
    'roadmap.now.5': 'Сховище нотаток',
    'roadmap.soon': 'Скоро (v1.1)',
    'roadmap.soon.1': 'Автооновлення',
    'roadmap.soon.2': 'Caffeinate (Win/Linux)',
    'roadmap.soon.3': 'Менеджер Cron',
    'roadmap.soon.4': 'Браузер сесій',
    'roadmap.later': 'Пізніше (v2)',
    'roadmap.later.1': 'Менеджер MCP',
    'roadmap.later.2': 'Налаштування Gateway',
    'roadmap.later.3': 'Мультипрофіль',
    'roadmap.later.4': 'i18n / Телеметрія',
    'roadmap.later.5': 'Підписання коду',

    // FAQ
    'faq.title': 'Поширені питання',
    'faq.q1': 'Cactus безкоштовний?',
    'faq.a1': 'Так, Cactus повністю безкоштовний. Ви оплачуєте лише використання API вашого AI-провайдера (OpenRouter, Anthropic тощо).',
    'faq.q2': 'Що таке Hermes Agent?',
    'faq.a2': 'Hermes Agent — це AI-асистент від Nous Research, який працює на вашому комп\'ютері. Він може використовувати інструменти, шукати в інтернеті, керувати файлами та багато іншого. Cactus надає графічний інтерфейс, щоб вам не доводилося користуватися терміналом.',
    'faq.q3': 'Потрібно вміти програмувати?',
    'faq.a3': 'Ні! Cactus створений для нетехнічних користувачів. Майстер налаштування опікується встановленням, а дашборд дає простий графічний інтерфейс для всього. Термінал ніколи не показується.',
    'faq.q4': 'Які платформи підтримуються?',
    'faq.a4': 'Cactus працює на macOS, Windows та Linux. Це кросплатформений Electron-застосунок, тому досвід однаковий скрізь.',
    'faq.q5': 'Потрібен API-ключ?',
    'faq.a5': 'Так, вам потрібен API-ключ від AI-провайдера (OpenRouter, Anthropic, Google Gemini, DeepSeek, xAI або Z.AI). Cactus допомагає налаштувати його під час майстра. Витрати залежать від ціноутворення провайдера.',
    'faq.q6': 'Які AI-провайдери підтримуються?',
    'faq.a6': 'OpenRouter, Anthropic (Claude), Google Gemini, DeepSeek, xAI (Grok) та Z.AI (GLM). Ви можете переключатися між ними будь-коли в Налаштуваннях.',
    'faq.q7': 'Чи відправляються мої дані у хмару?',
    'faq.a7': 'Cactus працює локально на вашому комп\'ютері. Ваші нотатки та конфігурація залишаються на вашому пристрої. Лише ваші AI-розмови відправляються до API обраного провайдера — так працюють AI-моделі.',
    'faq.q8': 'Чому "Cactus"?',
    'faq.a8': 'Кактус стійкий, невибагливий і процвітає в суворих умовах — як ми хочемо, щоб ваш AI-воркфлоу був. До того ж, назва була вільною. 🌵',
    'faq.q9': 'Це з відкритим кодом?',
    'faq.a9': 'Поки що ні. Cactus зараз closed-source, але ми розглядаємо можливість відкрити код у майбутньому. Цей лендинг хоститься на GitHub.',
    'faq.q10': 'Як оновити Cactus?',
    'faq.a10': 'У v1 ви перевіряєте оновлення вручну через Налаштування → Перевірити оновлення. Автооновлення з\'явиться у v1.1.',
    'faq.q11': 'Працюватиме без встановленого Hermes?',
    'faq.a11': 'Так! Майстер налаштування виявляє, чи встановлено Hermes Agent, і встановлює його автоматично за потреби. Вам не потрібно встановлювати нічого вручну.',
    'faq.q12': 'Працює офлайн?',
    'faq.a12': 'Сам Cactus працює офлайн для перегляду нотаток і налаштувань. Однак AI-розмови вимагають інтернет-з\'єднання для доступу до API провайдера.',

    // Footer
    'footer.github': 'GitHub',

    'footer.contact': 'Контакт',
    'footer.privacy': 'Приватність',
    'footer.rights': '© 2026 Степан Потієнко. Усі права захищені.',

    // Signup
    'signup.success': 'Дякуємо! Ми повідомимо вас, коли Cactus буде готовий. 🌵',
    'signup.error': 'Щось пішло не так. Спробуйте ще раз.',
    'signup.invalid': 'Будь ласка, введіть коректну email-адресу.',
  }
};

/* ===== Language toggle logic ===== */
(function () {
  const STORAGE_KEY = 'cactus-lang';
  const toggle = document.getElementById('langToggle');
  const currentSpan = toggle.querySelector('.lang-current');
  const otherSpan = toggle.querySelector('.lang-other');

  function setLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text === undefined) return;
      // Allow HTML in translations
      el.innerHTML = text;
    });

    // Update toggle display
    currentSpan.textContent = lang.toUpperCase();
    const otherLang = lang === 'en' ? 'ua' : 'en';
    otherSpan.textContent = otherLang.toUpperCase();

    // Save preference
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function toggleLang() {
    const current = currentSpan.textContent.toLowerCase();
    const next = current === 'en' ? 'ua' : 'en';
    setLang(next);
  }

  // Init: read from storage or default to 'en'
  let saved = 'en';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
  setLang(saved);

  toggle.addEventListener('click', toggleLang);
})();