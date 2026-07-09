/* ===========================
   download.js — OS detect + GitHub API
   =========================== */

(function () {
  // ⚠️ Change this to your actual GitHub owner/repo
  const GITHUB_REPO = 'stepanpotiienko/Cactus';
  const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
  const RELEASES_PAGE = `https://github.com/${GITHUB_REPO}/releases/latest`;

  // DOM elements
  const btnPrimary = document.getElementById('downloadPrimary');
  const btnPrimaryText = document.getElementById('downloadPrimaryText');
  const versionLabel = document.getElementById('downloadVersion');
  const btnMac = document.getElementById('dlMac');
  const btnWin = document.getElementById('dlWin');
  const btnLinux = document.getElementById('dlLinux');
  const macArch = document.getElementById('dlMacArch');
  const releasesLink = document.getElementById('releasesLink');
  const footerGithub = document.getElementById('footerGithub');
  const footerPrivacy = document.getElementById('footerPrivacy');

  // Set links
  if (releasesLink) releasesLink.href = RELEASES_PAGE;
  if (footerGithub) footerGithub.href = `https://github.com/${GITHUB_REPO}`;
  if (footerPrivacy) footerPrivacy.href = '#privacy';

  // OS detection
  function detectOS() {
    const ua = navigator.userAgent;
    const platform = navigator.platform || '';

    if (/Mac/i.test(platform) || /Macintosh/.test(ua)) {
      // Apple Silicon vs Intel
      if (/arm|aarch/i.test(platform) || !/x86|x64|Intel/.test(ua)) {
        return 'macos-arm';
      }
      return 'macos-intel';
    }
    if (/Win/i.test(platform) || /Windows/.test(ua)) return 'windows';
    if (/Linux/i.test(platform) || /Linux/.test(ua)) return 'linux';
    return 'unknown';
  }

  // Match assets to OS
  function findAsset(assets, os) {
    if (!assets || !assets.length) return null;
    const lower = assets.map(a => ({ ...a, name: a.name.toLowerCase() }));

    if (os === 'macos-arm') {
      return lower.find(a =>
        (a.name.endsWith('.dmg') || a.name.endsWith('.zip')) &&
        (a.name.includes('arm64') || a.name.includes('apple') || a.name.includes('silicon'))
      ) || lower.find(a => a.name.endsWith('.dmg'));
    }
    if (os === 'macos-intel') {
      return lower.find(a =>
        (a.name.endsWith('.dmg') || a.name.endsWith('.zip')) &&
        (a.name.includes('x64') || a.name.includes('intel') || a.name.includes('x86_64'))
      ) || lower.find(a => a.name.endsWith('.dmg'));
    }
    if (os === 'windows') {
      return lower.find(a => a.name.endsWith('.exe')) ||
             lower.find(a => a.name.endsWith('.msi'));
    }
    if (os === 'linux') {
      return lower.find(a => a.name.endsWith('.appimage')) ||
             lower.find(a => a.name.endsWith('.deb')) ||
             lower.find(a => a.name.endsWith('.snap'));
    }
    return null;
  }

  // Get localized text
  function t(key) {
    const lang = document.documentElement.lang || 'en';
    // i18n.js stores translations globally
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    if (typeof translations !== 'undefined' && translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return key;
  }

  // Render download buttons
  function renderDownloads(release, os) {
    const assets = release ? release.assets : [];
    const tagName = release ? release.tag_name : null;

    if (tagName) {
      versionLabel.textContent = `v${tagName.replace(/^v/, '')}`;
    }

    // Primary button
    const detectedAsset = findAsset(assets, os);
    if (detectedAsset) {
      btnPrimary.disabled = false;
      btnPrimary.onclick = () => window.open(detectedAsset.browser_download_url, '_blank');

      const osLabel = {
        'macos-arm': t('download.btn.mac') + ' (Apple Silicon)',
        'macos-intel': t('download.btn.mac') + ' (Intel)',
        'windows': t('download.btn.win'),
        'linux': t('download.btn.linux'),
        'unknown': t('download.fallback'),
      };
      btnPrimaryText.textContent = osLabel[os] || t('download.fallback');
    } else if (release) {
      // Release exists but no matching asset
      btnPrimary.disabled = false;
      btnPrimary.onclick = () => window.open(RELEASES_PAGE, '_blank');
      btnPrimaryText.textContent = t('download.fallback');
    } else {
      // No release yet
      btnPrimary.disabled = false;
      btnPrimary.onclick = () => {
        document.getElementById('screenshots').scrollIntoView({ behavior: 'smooth' });
      };
      btnPrimaryText.textContent = t('download.no.release');
    }

    // Other platform buttons
    function setupOtherBtn(btn, osKey) {
      const asset = findAsset(assets, osKey === 'macos' ? 'macos-arm' : osKey);
      if (asset) {
        btn.disabled = false;
        btn.onclick = () => window.open(asset.browser_download_url, '_blank');
      } else if (release) {
        btn.disabled = false;
        btn.onclick = () => window.open(RELEASES_PAGE, '_blank');
      } else {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
      }
    }

    // Show arch for macOS
    if (macArch) {
      const armAsset = findAsset(assets, 'macos-arm');
      const intelAsset = findAsset(assets, 'macos-intel');
      if (armAsset && intelAsset) {
        macArch.textContent = '(Universal)';
      } else if (armAsset) {
        macArch.textContent = '(ARM)';
      } else if (intelAsset) {
        macArch.textContent = '(Intel)';
      }
    }

    setupOtherBtn(btnMac, 'macos');
    setupOtherBtn(btnWin, 'windows');
    setupOtherBtn(btnLinux, 'linux');
  }

  // Fetch latest release from GitHub API
  async function fetchRelease() {
    try {
      const resp = await fetch(API_URL, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
      });

      if (resp.status === 404) {
        // No releases yet — that's OK
        return null;
      }
      if (!resp.ok) throw new Error(`GitHub API: ${resp.status}`);

      return await resp.json();
    } catch (err) {
      console.warn('[Cactus] Could not fetch release info:', err.message);
      return null;
    }
  }

  // Init
  async function init() {
    const os = detectOS();
    const release = await fetchRelease();
    renderDownloads(release, os);
  }

  // Re-render on language change
  window.addEventListener('langchange', () => {
    const os = detectOS();
    // Re-fetch from cache if possible
    init();
  });

  init();
})();